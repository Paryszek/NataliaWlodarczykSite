$(document).ready(function() {
	var NavY = $('.header').offset().top;
    var stickyNav = function(){
        var ScrollY = $(window).scrollTop();
	   if (ScrollY > NavY) {

        $('.scrolltop').addClass('scrollshow');
        $('.scrolltop').removeClass('scrollhide');
				$('.header').addClass('sticky');
        $('.logo').addClass('logomove');
        $('.header-main-menu-left').addClass('menuleftmove');
        $('.header-main-menu-right').addClass('menurightmove');
				$('.header-main').addClass('header-main-move');
        $('.logo').removeClass('logoback');
        $('.header-main-menu-left').removeClass('menuleftback');
        $('.header-main-menu-right').removeClass('menurightback');
        $('.header').removeClass('stickyback');
				$('.header-main').removeClass('header-main-back');
	   } else {
        $('.scrolltop').addClass('scrollhide');
        $('.scrolltop').removeClass('scrollshow');
				$('.header').removeClass('sticky');
        $('.logo').removeClass('logomove');
        $('.logo').addClass('logoback');
        $('.header').addClass('stickyback');
        $('.header-main-menu-left').removeClass('menuleftmove');
        $('.header-main-menu-right').removeClass('menurightmove');
        $('.header-main-menu-left').addClass('menuleftback');
        $('.header-main-menu-right').addClass('menurightback');
				$('.header-main').addClass('header-main-back');
				$('.header-main').removeClass('header-main-move');
	   }
	};
    var flaga1 = 1;
    var flaga2 = 0;
    var flaga3 = 0;
    var clickicons = function(){
        $('.icon-heart').click(function(){
            if(flaga1 === 0){
							if(flaga2 === 1){
								$('.showtext2').fadeOut().removeClass('textActive');
								$('.showtext2').css("display", "none");
								$('.icon-star').removeClass('texton');
								flaga2 = 0;
							}else if(flaga3 === 1){
								$('.showtext3').fadeOut().removeClass('textActive');
								$('.showtext3').css("display", "none");
								$('.icon-graduation-cap').removeClass('texton');
								flaga3 = 0;
							}
                $('.showtext1').fadeIn(1000).addClass('textActive');
                $('.icon-heart').addClass('texton');
                flaga1 = 1;
            }
        });
        $('.icon-star').click(function(){
            if(flaga2 === 0){
							if(flaga1 === 1){
								$('.showtext1').fadeOut().removeClass('textActive');
								$('.showtext1').css("display", "none");
								$('.icon-heart').removeClass('texton');
								flaga1 = 0;
							}else if(flaga3 === 1){
								$('.showtext3').fadeOut().removeClass('textActive');
								$('.showtext3').css("display", "none");
								$('.icon-graduation-cap').removeClass('texton');
								flaga3 = 0;
							}
							  $('.showtext2').fadeIn(1000).addClass('textActive');
                $('.icon-star').addClass('texton');
                flaga2 = 1;
            }
        });
        $('.icon-graduation-cap').click(function(){
            if(flaga3 === 0){
							if(flaga1 === 1){
								$('.showtext1').fadeOut().removeClass('textActive');
								$('.showtext1').css("display", "none");
								$('.icon-heart').removeClass('texton');
								flaga1 = 0;
							}else if(flaga2 === 1){
								$('.showtext2').fadeOut().removeClass('textActive');
								$('.showtext2').css("display", "none");
								$('.icon-star').removeClass('texton');
								flaga2 = 0;
							}
								$('.showtext3').fadeIn(1000).addClass('textActive');
                $('.icon-graduation-cap').addClass('texton');
                flaga3 = 1;
            }
        });
    };
    var scrolltotop = function(){
        $('.scrolltop').click(function(){
            $('body,html').animate({
				scrollTop: 0
			}, 1000);
        });
    };
    stickyNav();
    scrolltotop();
    clickicons();
    $(window).scroll(function() {
		stickyNav();
	});
});
