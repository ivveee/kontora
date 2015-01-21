'use strict';
$(function() {
  var h = $('.itemb').first().height();
  $('.itemb').css('line-height', h + 'px');

  var $swText = $('.switcher_text'),
    $swImg = $('.switcher_image'),

    CLASS_TEXT = 'rt';


  $swText.on('click', function() {
    $('body').addClass(CLASS_TEXT);
    $.cookie('switcher', 'text');
    // if ($article.length) $article.trigger('text');
    return false;
  });
  $swImg.on('click', function() {
    $('body').removeClass(CLASS_TEXT);
    $.cookie('switcher', 'image');
    // if ($article.length) $article.trigger('image');
    return false;
  });

  if ($.cookie('switcher') === 'text') {
    $swText.trigger('click')
  }

  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function logoReposition() {
    $('.logo').css({
      'background-position': getRandomInt(-10, 110) + '% 50%'
    })
  }
  // logoReposition();

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

    $(window).on('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        recalc();
        // rearrange();
      }, 100)
    });

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

    setTimeout(function() {
      $grid.addClass('is__active');
    }, 300);
  });

})
