$(document).ready(function () {
    "use strict";
/*------------------------------*/
/* Page Loader
/*------------------------------*/
 
$(window).load(function() {
	$(".loader-item").delay(500).fadeOut();
	$("#pageloader").delay(1000).fadeOut("slow");
});



/*------------------------------*/
/* Sticky Header
/*------------------------------*/

jQuery("#header").sticky({
	topSpacing: 0
});


/*------------------------------*/
/* Home Slider
/*------------------------------*/

$(window).load(function() {
	$('.flexslider').flexslider({
      animation: "slide", 
	  controlNav: true,
	  animationLoop:true,
	  animationSpeed:700,
	  slideshowSpeed:6000,
	  before: function(slider){
      $(slider).find(".flex-active-slide").find('.slider-text').each(function(){
       $(this).removeClass("animated fadeIn");
       });
     },
    after: function(slider){
          $(slider).find(".flex-active-slide").find('.slider-text').addClass("animated fadeIn");
      }
});
});



  
// jQuery('#text-slider').bxSlider({
// 	mode: 'fade',
// 	pager: true,
// 	auto: true,
// 	controls: false
// });



/*------------------------------*/
/* Page Animation
/*------------------------------*/


new WOW().init();


/*------------------------------*/
/* Single work slider
/*------------------------------*/

$(".single-work-slider").owlCarousel({

	navigation : false, // Show next and prev buttons
	slideSpeed : 400,
	pagination : false,
	singleItem:true,
	autoPlay: true,
	navigation : true,
	navigationText: [
	  "<i class='fa fa-angle-left'></i>",
	  "<i class='fa fa-angle-right'></i>"
    ] ,
});


/*------------------------------*/
/* Related project carousel
/*------------------------------*/

$('.related-project-carousel').owlCarousel({
  autoPlay:3000,
  slideSpeed: 200,
  items : 4,
  itemsDesktop : [1199,4],
  itemsDesktopSmall : [979,3],
  stopOnHover:true,
  pagination:false,
  navigation : true,
   navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
  ],   

});

/*------------------------------*/
/* Parallax
/*------------------------------*/
 
$(window).bind('load', function() {
	if(!onMobile)
	parallaxInit();
});

function parallaxInit() {
	$('#facts').parallax("50%", 0.2);
	$('#cta').parallax("50%", 0.2);
	$('#pricing').parallax("50%", 0.2);
	$('#contact').parallax("50%", 0.2);
	$('#banner').parallax("50%", 0.2);
	
	/*add as necessary*/
}
var onMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
	onMobile = true;
}



/*------------------------------*/
/* Mixitup portfolio
/*------------------------------*/
    
jQuery('.work-grid').mixitup({
	targetSelector: '.mix',
});

/*------------------------------*/
/* Magnific popup
/*------------------------------*/

$('.popup-image').magnificPopup({
	type: 'image',
	closeOnContentClick: true,
	mainClass: 'mfp-img-mobile',
	image: {
		verticalFit: true
	}
	
});

/*------------------------------*/
/* Testimonial carousel
/*------------------------------*/

$(".testimonials-carousel").owlCarousel({
	autoPlay: 5000,
	slideSpeed: 200,
	items: 1,
	itemsDesktop: [1199, 1],
	itemsDesktopSmall: [979, 1],
	itemsTablet: [768, 1],
	itemsMobile: [479, 1],
	autoHeight: true,
	navigation: false,
});

/*------------------------------*/
/* Smooth scroll
/*------------------------------*/

 
(function($) { "use strict";
	$(".scroll a[href^='#']").on('click', function(e) {
	   e.preventDefault();
	   var hash = this.hash;
	   $('html, body').stop().animate({
		   scrollTop: $(hash).offset().top - 80}, 2000, 'easeOutExpo');
	});
	 })(jQuery);

	$('.collapse ul li a').click(function(){ 
	$('.navbar-toggle : visible').click();
});	



/*------------------------------*/
/* Scroll to top
/*------------------------------*/	
 
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
	$('.scrollup').fadeOut();
}
}); 

	$('.scrollup').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 2000);
return false;
});
   
});
