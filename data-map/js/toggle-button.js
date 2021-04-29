$(document).ready(function() {

  $('#dismiss-popup-btn').click(function() {
    $('.popup').toggleClass("active");
  })

  $('#open-popup-btn').click(function() {
    $('.popup').toggleClass("active");
  })

  $('#open-tea').click(function() {
    $('.owl-stage').toggleClass("active");
    $('.owl-dots').toggleClass("active");
    $('.tea-btn').toggleClass("active");
  })

  var timesClicked = 0;

  $('#button-left').click(function() {
    $('.offset-btn').toggleClass("active");
    $('.offset-btn-pop').toggleClass("active");
    timesClicked++;

    if (timesClicked > 1) {
      console.log('clicked');
      document.getElementsByClassName("link-change")[0].setAttribute("href", "https://www.adagio.com/pages/carbon_offset.html");
    }

  })

})
