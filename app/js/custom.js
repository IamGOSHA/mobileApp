$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');
});


/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	$('.brand-title').each(function() {
		if ($(this).text().length > 30) {
			$(this).text( $(this).text().substring(0, 30)+ "...");
		}
	});
	/* components */


	/*
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};*/

	function initSlider(){
		var initSlide =$('.slick-slider');
					initSlide.on('init', function(event, slick) {
					var $swipeTabs = $('.swipe-tab');
					var $swipeTabsContentContainer = $('.swipe-tabs-container');
					var currentIndex = 0;
					var activeTabClassName = 'active-tab';
				
					var elem= document.getElementsByClassName('elem');
					for(var i=0; i < elem.length; ++i){
						if(currentIndex == elem[i].dataset.target ){
							console.log();
									elem[i].classList.remove("hide");
						}else{
							elem[i].classList.add("hide");
						}
					}
					$swipeTabsContentContainer.removeClass('hide');
					currentIndex = slick.getCurrent();
					$swipeTabs.removeClass(activeTabClassName);
							 $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
				});
		var initSlide =$('.slick-slider')
		initSlide.slick({
					dots: false,
					arrows: false,
					infinite: false,
					speed: 300,
					slidesToShow: 1,
					centerMode: true,
					variableWidth: true,
					slidesToScroll: 1,
			});
			initSlide.on('afterChange', function(event, slick, currentSlide) {
				var elem= document.getElementsByClassName('elem');
				for(var e=0; e < elem.length; ++e){
					if(currentSlide == elem[e].dataset.target ){
								elem[e].classList.remove("hide");
					}else{
						elem[e].classList.add("hide");
					}
				}
				// $swipeTabsContentContainer.removeClass('hide');
				// currentIndex = slick.getCurrent();
				// $swipeTabs.removeClass(activeTabClassName);
				// 		 $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
			});
	}

initSlider();


	/*
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	

	
	/* components */






});

var handler = function(){

	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



