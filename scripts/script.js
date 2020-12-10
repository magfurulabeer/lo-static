console.log("HELLO WORLD")
$(document).ready(function(){

  // Change 'hover' to 'click' if you want to
$('.nav li > .sub-menu').parent().hover(function() {
  var submenu = $(this).children('.sub-menu');
  if ( $(submenu).is(':hidden') ) {
    $(submenu).slideDown(200);
  } else {
    $(submenu).slideUp(200);
  }
});

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  });

  $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    switch(nextSlide) {
      case 0:
        $('main.hero').fadeTo('fast', 0.8, function() {
            $(this).css("background-image", "url('../images/bg-1.png')");
        }).fadeTo('fast', 1);
        break;
      case 1:
        $('main.hero').fadeTo('fast', 0.8, function() {
          $(this).css("background-image", "url('../images/bg-2.png')");
        }).fadeTo('fast', 1);        
        break;
      case 2:
        $('main.hero').fadeTo('fast', 0.8, function() {
          $(this).css("background-image", "url('../images/bg-3.png')");
        }).fadeTo('fast', 1);
        break;
    }
  });

  $('.testimonial-section').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false
  });
  
});