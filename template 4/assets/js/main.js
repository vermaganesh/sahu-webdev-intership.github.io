
(function ($) {
  'use strict';

jQuery(document).ready(function($) {

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.load-wrapp').length) {
            $('.load-wrapp').delay(200).fadeOut(500);
        }
    }
    handlePreloader();

    var menu_btn  = $(".menu-btn");
    var main_menu = $(".main-menu");
    var close_btn = $(".close-btn");
    var logo_area = $(".logo-area");


	menu_btn.on('click', function(){
		logo_area.removeClass("active")
	});
	menu_btn.on('click', function(){
		main_menu.addClass("active")
	});
	close_btn.on('click', function(){
		main_menu.removeClass("active")
	});
	close_btn.on('click', function(){
		logo_area.addClass("active")
	});

	//menu 2 btn add class and remove class
    var menu2              = $(".menu2");
    var main_menu_area2    = $(".main-menu-area2");
    var side_menu          = $(".side-menu");
    var side_btn_time_icon = $(".side-btn-time-icon ");

	menu2.on('click', function(){
		main_menu_area2.addClass("active");
		side_menu.addClass("active");

	});
	
	side_btn_time_icon.on('click', function(){
		main_menu_area2.removeClass("active")
		side_menu.removeClass("active")
	});


    function stickyNav() {
        //fixed nav bar active
        window.onscroll = function () {
            myFunction()
        };
        var header = document.getElementById("header");
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    }
    stickyNav();

    // offcanvas search form active start
    $(".offcanvas-btn").on('click', function(){
        $("body").addClass('fix');
        $(".offcanvas-search-inner").addClass('show')
    })

    $(".minicart-btn").on('click', function(){
        $("body").addClass('fix');
        $(".minicart-inner").addClass('show')
    })

    $(".offcanvas-close, .minicart-close,.offcanvas-overlay").on('click', function(){
        $("body").removeClass('fix');
        $(".offcanvas-search-inner, .minicart-inner").removeClass('show')
    })


    // Off Canvas Open close start
    $(".off-canvas-btn").on('click', function () {
        $("body").addClass('fix');
        $(".off-canvas-wrapper").addClass('open');
    });

    $(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
        $("body").removeClass('fix');
        $(".off-canvas-wrapper").removeClass('open');
    });
    

    // slide effect dropdown
    function dropdownAnimation() {
        $('.dropdown').on('show.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(500);
        });

        $('.dropdown').on('hide.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(500);
        });
    }
    dropdownAnimation();

    //offcanvas mobile menu start 
    var $offCanvasNav = $('.mobile-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');
    
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
    
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });

 });

    

     //jquery load function start
    jQuery(window).on("load", function() {
        
    });


}(jQuery));


