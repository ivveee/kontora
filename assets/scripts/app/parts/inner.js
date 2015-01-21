$(function() {
	
	// iterates through all js__article children and searches for js__article-home div
	// then sets the height of the found div equal to js__article height
	// then does the same as the images are loaded (purpose unknown yet)
  $('.js__article').each(function() {
    var $box = $(this),
      $home = $box.find('.js__article-home');

    $home.height($box.height());

    $box.imagesLoaded( function() {
      $home.height($box.height());
    });
  });
});
