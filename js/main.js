$(window).scroll(function() {
    if ($(window).scrollTop() >= 1) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });

// scroll-top
// var btn = $('#backToTop');
// $(window).on('scroll', function() {
//     if ($(window).scrollTop() > 300) {
//         btn.addClass('show');
//     } else {
//         btn.removeClass('show');
//     }
// });
// btn.on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: 0
//     }, '300');
// });
// scroll-top-end
  

//   heading-slider 
$('.testimonial-slide').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // count-js
  $('.counter-btn').click(function(e) {
    e.preventDefault();
    var $btn = $(this);
    $('#output-' + $btn.data('index')).html(function(i, val) {
        val = val * 1 + $btn.data('inc');
        return (val <= 0 ? '' : '') + val;
    });
});
