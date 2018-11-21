$(window).scroll(function() {
    if ($(this).scrollTop() > 100){ 
 
	$("#submanu").slideDown(500);
        $('.menu-area1').addClass("sticky");
        $('.top-bar-1').addClass("sticky2");
		// $('.main-header').hide();

		
    }
    else if($(this).scrollTop() > 0){
		$("#submanu").hide();
        $('.menu-area1').removeClass("sticky");
      	//$('.main-header').slideDown(1000);
		//  $('.top-bar-1').removeClass("sticky2");
		
    }
});

$( ".close2" ).click(function() {
  $('.off-tag').hide();
});

if ($(window).width() > 960) {
 // alert('1');
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
}
else {
  
}

 
 
 