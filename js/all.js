(function ($) {

  // e.preventDefault();
  // parents siblings
  // $('html,body').animate({ scrollTop: 0 }, 'slow');
  // $('.test').position().top   offset().top
  // document.querySelector('.test');
  // document.querySelectorAll('.test');
  // document.getElementById('test');

  var $win = $(window),
    w = $win.width(),
    h = $win.height();
  $win.on('resize', function () {
    w = $win.width();
    h = $win.height();
  }).resize();

  // wow
  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();
  // wow END


  $('.open_pop').click(function (e) {
    e.preventDefault();
    var catchDataNum = $(this).attr('data-num');
    $('.lightbox__#pop_' + catchDataNum).fadeIn();
  });

  $('.lightbox__bgclose').click(function () {
    $('.lightbox__').fadeOut();
  });




})($);