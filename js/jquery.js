$(document).ready(function() {

  var top_nav = $("#top-nav");
  var toggle = 1;

  $(".menuIcon").on('click', function() {
    if (toggle) {
      top_nav.slideDown("fast");
      toggle = 0;
    } else {
      top_nav.slideUp("fast");
      toggle = 1;
    }
  });



});
