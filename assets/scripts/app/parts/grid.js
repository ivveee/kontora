'use strict';
$(function() {
  // not understood yet
  var h = $('.itemb').first().height();
  $('.itemb').css('line-height', h + 'px');

  var $swText = $('.switcher_text'),
    $swImg = $('.switcher_image'),
    // selection var for picture-text mode
    CLASS_TEXT = 'rt';

  // services picture mode and text mode buttons
  // puts current status to cookie
  $swText.on('click', function() {
    $('body').addClass(CLASS_TEXT);
    $.cookie('switcher', 'textPosition', { path: '/' });
    // if ($article.length) $article.trigger('text');
    return false;
  });
  $swImg.on('click', function() {
    $('body').removeClass(CLASS_TEXT);
    $.cookie('switcher', 'imagePosition', { path: '/' });
    // if ($article.length) $article.trigger('image');
    return false;
  });

  // processes current cookie 
  if ($.cookie('switcher') === 'textPosition') {
    $swText.trigger('click');
  }
  if ($.cookie('switcher') === 'imagePosition') {
    $swImg.trigger('click');
  }

  // The idea is that text and images "float" on the background
  // as background is clicked we fall back to home page
  // So grid objects should show "cursor:pointer" imitating a link
  // parse kirbytext'ed text, wrapping text between br's with <span>
  // set cursor style to text because 
  $('.js__article-holder p').contents().filter(function(){
    return this.nodeType === 3;
  }).wrap('<span class="js__article-text-spanned" style = "cursor:text"/>');
  // if anything outside div is clicked - getting back to home
  $('.js__article-box').on('click', function(e){
    e.stopPropagation();
    //set to "return to home" to everything except text and image and header wrapped in dt and dd
    if( !($(e.target).hasClass('js__article-text-spanned') || $(e.target).is('img') || 
          $(e.target).is('dt') || $(e.target).is('dd') ) ) { // horrific. to be changed.
        window.location.href = "/";
    }
  });

  // as is 
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // as is
  function logoReposition() {
    $('.logo').css({
      'background-position': getRandomInt(-10, 110) + '% 50%'
    })
  }
  // logoReposition();

  // serva thumbnail imagini alla "home" pagina
  $('.js__grid').each(function() {
    var $grid = $(this),
      $items = $grid.find('.js__item'),
      $rearranger = $('.js__rearrange'),
      windowWidth,
      windowHeight,
      itemWidth = 150,
      itemHeight = 150,
      maxOffsetX,
      maxOffsetY,
      resizeTimeout,
      z = 100,
      COLS = 7,
      ROWS = 6,
      CLASS_STILL = 'is__still';

    function recalc() {
      windowWidth = $grid.width();
      windowHeight = $grid.height();
      // itemWidth = parseInt(windowWidth/COLS);
      // itemHeight = parseInt(windowHeight/ROWS);
      maxOffsetX = windowWidth - itemWidth;
      maxOffsetY = windowHeight - itemHeight - 61;
    }

    function rearrange(force) {
      $items.each(function() {
        var id = $(this).attr('id'),
          offsetLeft = $.cookie(id + '_left'),
          offsetTop = $.cookie(id + '_top');
        if (!offsetLeft || force) {
          offsetLeft = getRandomInt(0, maxOffsetX)/windowWidth * 100;
          $.cookie(id + '_left', offsetLeft, { expires: 1 });
        }
        if (!offsetLeft || force) {
          offsetTop = getRandomInt(0, maxOffsetY)/(windowHeight - 61) * 100;
          $.cookie(id + '_top', offsetTop, { expires: 1 });
        }
        $(this).css({
          width: itemWidth,
          left: offsetLeft + '%',
          top: offsetTop + '%'
        });
      });
    }

    // aspetta per una seconda quando ha ricesto l'evento "resize" e ricalcolare i variabili
    $(window).on('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        recalc();
        // rearrange();
      }, 100)
    });

    // sets up thumbnails as jQuery UI items
    $items.draggable({
      containment: '#grid',
      scroll: false,
      start: function(event, ui) {
        ui.helper.addClass(CLASS_STILL);
        ui.helper.css('z-index', z++);
      },
      stop: function(event, ui) {
        var id = ui.helper.attr('id');
        $.cookie(id + '_left', ui.position.left / windowWidth * 100, { expires: 1 });
        $.cookie(id + '_top', ui.position.top / windowHeight * 100, { expires: 1 });
        ui.helper.removeClass(CLASS_STILL);
      }
    });

    // rearranges thumbnails on SPACE. Doesn't work
    $(document).on('keydown', function(e) {
      if (e.keyCode == 32) {
        rearrange();
      }
    })
    $rearranger.on('click', function(e) {
      e.preventDefault();
      rearrange(true);
    })

    recalc();
    rearrange();

    // in 0.3 seconds sets grid opacity to 1
    setTimeout(function() {
      $grid.addClass('is__active');
    }, 300);
  });

})
