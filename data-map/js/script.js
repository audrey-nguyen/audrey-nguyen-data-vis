$(document).ready(function(){
  $('.slider').owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    stagePadding: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}
  })

});
