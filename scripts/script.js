(function() {
  $(function() {
    var $body, $flyoutCancel, $recentBtn, $recentList, $relatedBtn, $relatedList, nav, navOffset, screenHeight;
    $recentBtn = $('#recentBtn');
    $recentList = $('#recentList');
    $relatedBtn = $('#relatedBtn');
    $relatedList = $('#relatedList');
    $flyoutCancel = $('#flyoutCancel');
    $body = $('body');
    $recentBtn.on('click', function(e) {
      e.preventDefault();
      $relatedList.removeClass('is-active');
      $recentList.toggleClass('is-active');
      return $flyoutCancel.toggleClass('is-active');
    });
    $relatedBtn.on('click', function(e) {
      e.preventDefault();
      $recentList.removeClass('is-active');
      $relatedList.toggleClass('is-active');
      return $flyoutCancel.toggleClass('is-active');
    });
    $flyoutCancel.on('click', function(e) {
      e.preventDefault();
      $recentList.removeClass('is-active');
      $relatedList.removeClass('is-active');
      return $flyoutCancel.removeClass('is-active');
    });
    screenHeight = $(window).height();
    console.log(screenHeight);
    $flyoutCancel.css({
      'height': screenHeight
    });
    nav = $('ul.nav');
    navOffset = nav.offset();
    return $(document).on('scroll', function(e) {
      if ($(this).scrollTop() > navOffset.top) {
        return $body.addClass('nav-is-fixed');
      } else {
        return $body.removeClass('nav-is-fixed');
      }
    });
  });

}).call(this);
