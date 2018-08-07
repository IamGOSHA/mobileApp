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




	var touchstartX = 0;
	var touchstartY = 0;
	var touchendX = 0;
	var touchendY = 0;
	
	var gesuredZone = document.getElementsByClassName('elem')[0];
	
	gesuredZone.addEventListener('touchstart', function(event) {
			touchstartX = event.screenX;
			touchstartY = event.screenY;
	}, false);
	
	gesuredZone.addEventListener('touchend', function(event) {
			touchendX = event.screenX;
			touchendY = event.screenY;
			handleGesure();
	}, false); 
	
	function handleGesure() {
			var swiped = 'swiped: ';
			if (touchendX < touchstartX) {
					alert(swiped + 'left!');
			}
			if (touchendX > touchstartX) {
					alert(swiped + 'right!');
			}
			if (touchendY < touchstartY) {
					alert(swiped + 'down!');
					$('body,html').mousewheel(function(event) {
						event.preventDefault();
						if (event.deltaY > 0) {
							
								$('body,html').scrollTop(deltaY);
						}
				});
			}
			if (touchendY > touchstartY) {
					alert(swiped + 'left!');
			}
			if (touchendY == touchstartY) {

					console.log('swipe-down');
			}
	}

function addButton(){
    var node = document.querySelector("#swipe-tabs-cont");
    var longpress = false;
    var presstimer = null;
    var longtarget = null;

    var cancel = function(e) {
        if (presstimer !== null) {
            clearTimeout(presstimer);
            presstimer = null;
				}
				$('.block-content-panel').removeClass('longpress');
        $('.stop').find('.btn-target').animate({'marginRight': "-500px"},0);
        $('.stop').find('.data-num').animate({'marginRight': "0px"},0);
        $('.stop').find('.value-percent').animate({'marginRight': "0px"},0);
    };

    var click = function(e) {
        if (presstimer !== null) {
            clearTimeout(presstimer);
            presstimer = null;
        }
        $('.block-content-panel').removeClass('longpress');
        $('.stop').find('.btn-target').animate({'marginRight': "-500px"},0);
        $('.stop').find('.data-num').animate({'marginRight': "0px"},0);
        $('.stop').find('.value-percent').animate({'marginRight': "0px"},0);

        if (longpress) {
            return false;
        }
    };

    var start = function(e) {
        console.log(e);
        var $this = this;

        if (e.type === "click" && e.button !== 0) {
            return;
        }

        longpress = false;


        if (presstimer === null) {
            presstimer = setTimeout(function() {
                longpress = true;
                $('.block-content-panel').addClass('longpress');
                $('.stop').find('.btn-target').animate({'marginRight': "0px"},0);
                $('.stop').find('.data-num').animate({'marginRight': "-500px"},0);
                $('.stop').find('.value-percent').animate({'marginRight': "-500px"},0);

            }, 2000);
        }

        return false;
    };

    node.addEventListener("mousedown", start);
    node.addEventListener("touchstart", start);
    node.addEventListener("click", click);
    node.addEventListener("mouseout", cancel);
    node.addEventListener("touchend", cancel);
    node.addEventListener("touchleave", cancel);
    node.addEventListener("touchcancel", cancel);


}
addButton();
    $( "#drag" ).sortable({
        axis: "y",
        containment: ".content",
        items: "> li",
        tolerance: "pointer",
        opacity: .9,
        delay: 2000,
        placeholder: "sortable-placeholder",
        stop: function( event, ui ) {
            $('.block-content-panel').removeClass('longpress');
                ui.item.addClass('stop');
                $('.stop').find('.btn-target').animate({'marginRight': "-500px"},0);
                $('.stop').find('.data-num').animate({'marginRight': "0px"},0);
                $('.stop').find('.value-percent').animate({'marginRight': "0px"},0);
			}




    });
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
		$(this).toggleClass('active');
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	// $('.brand-title').each(function() {
	// 	if ($(this).text().length > 50) {
	// 		$(this).text( $(this).text().substring(0, 51)+ "...");
	// 	}
	// });
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
    var wElem = $('.wrapp-elem').width();
    $('.brand-title').width(wElem).css('text-overflow','ellipsis');
		var nav_wrap = $(".slide-tab-panel"),
		nav_list = $(".slide-tab-panel li"),
		elem_width,
		elem_left_offset,
		elem_parent,
		slider_line;
	
	
		nav_wrap.each(function(){
				$(this).append('<li class="sliding-line"></li>');
	
				var start_elem_width = 0;
				var start_elem_offset = 0;
				var active_elem = $(this).find(".active");
	
				if(active_elem.length){
						start_elem_width = active_elem.outerWidth();
						start_elem_offset = active_elem.position().left;
				}
	
				$(this).find(".sliding-line").css({
						"width": start_elem_width + "px",
						"left": start_elem_offset + "px"
				})
				.data("width", start_elem_width)
				.data("left", start_elem_offset);
		});
	
	
	
	nav_wrap.find(nav_list).click(function(){
	
		elem_parent = $(this);
		elem_width = elem_parent.outerWidth();
		elem_left_offset = $(this).position().left;
		slider_line = elem_parent.siblings(".sliding-line");
		slider_line.stop().animate({
				"width": elem_width + "px",
				"left": elem_left_offset + "px"
		});
	
	
	});		 


    var initSwipeSlides=$('#swipe-tabs-cont');
    initSwipeSlides.slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 200,
				centerMode: true,
        waitForAnimate: false,
				dragging: true,
				autoHeight: true,
        centerPadding: 0,
        cssEase: 'ease-in-out',
        swipeToSlide: true,
        touchMove: false,
        slidesToShow: 1,
        edgeFriction:	0,
				slidesToScroll: 1,
    });
    initSwipeSlides.on('afterChange', function(event, slick, currentSlide) {
			var list= $('.swipe-tab');
				var i;
				for(i=0;i<list.length;i++){

					if( currentSlide ==list[i].dataset.attr){
						list[i].classList.add('active');
						elem_parent = $(list[i]);
						elem_width = elem_parent.outerWidth();
						elem_left_offset = $(list[i]).position().left;
						slider_line = elem_parent.siblings(".sliding-line");
						slider_line.stop().animate({
								"width": elem_width + "px",
								"left": elem_left_offset + "px"
						});
					}else{
						list[i].classList.remove('active');
					}
				

				}

			
			
	});
	initSwipeSlides.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		function moveright(){
			nav_wrap;
			var offset_indent = $('.active').width();
			var posNav_Wrap = $(nav_wrap).position().left;
			nav_wrap.animate({left : posNav_Wrap - offset_indent});
		}
		function moveleft(){
			nav_wrap;
			var offset_indent = $('.active').width();
			var posNav_Wrap = $(nav_wrap).position().left;
			nav_wrap.animate({left : posNav_Wrap + offset_indent});
		}
		if(nextSlide > currentSlide && currentSlide !=5){
			moveright();
		}else if(nextSlide < currentSlide && currentSlide !=0){
			moveleft();
		}
	})


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
     wElem = $('.wrapp-elem').width();
    $('.brand-title').width(wElem);
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



