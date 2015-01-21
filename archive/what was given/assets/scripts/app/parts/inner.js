$(function() {
  $('.js__article').each(function() {
    var $box = $(this),
      $home = $box.find('.js__article-home');

    $home.height($box.height());

    $box.imagesLoaded( function() {
      $home.height($box.height());
    });
  });
});
