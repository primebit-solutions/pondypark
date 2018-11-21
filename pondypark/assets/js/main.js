
$(function() {
$.scrollify({
    section : ".panel",
    //sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0
   
  });
  });

  if ($(window).width() < 960) {
    alert('Less than 960');
 }
 else {
    alert('More than 960');
 }
