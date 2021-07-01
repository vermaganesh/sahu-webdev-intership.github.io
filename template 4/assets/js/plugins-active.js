
(function ($) {
  'use strict';


jQuery(document).ready(function($) {

      var welcome_wrapCarousel     = $(".welcome-wrap");
      var about_right_slide        = $(".about-right-slide");
      var clinets_area             = $(".clinets-area");
      var single_blog_mid_carousel = $(".single_blog_mid_carousel");
      var menu_carousel            = $(".menu-carousel");
      var blog_wrap                = $(".blog-wrap");
      var teams_carousel           = $(".teams-carousel");


    // welcome slider active
    welcome_wrapCarousel.owlCarousel({
      items:1,
      loop:true,
      nav:false,
      dots:true, 
      autoplay:true,
      smartSpeed:2000,
      fluidSpeed:2000,
      autoplaySpeed:5000,
    })
    welcome_wrapCarousel.on('translate.owl.carousel', function() {
        $('.welcome-area .text-box h1').removeClass('fadeInLeft animated').hide();
    });
    welcome_wrapCarousel.on('translated.owl.carousel', function() {
        $('.owl-item.active .text-box h1').addClass('fadeInLeft animated').show();
    });


    //about right slider active
    about_right_slide.owlCarousel({
      items:1,
      loop:true,
      nav:false,
      dots:false,
      autoplay:true,
      smartSpeed:1000,
    })

    //client area slider active
    clinets_area.owlCarousel({
      items:1,
      loop:true,
      nav:false,
      dots:false,
      margin:30,
      autoplay:true,
      smartSpeed:1000,

    })

    //client area slider active
    single_blog_mid_carousel.owlCarousel({
      items:1,
      loop:true,
      nav:false,
      dots:false,
      autoplay:true,
      smartSpeed:1000,
    })

    //menu slide actvie
    menu_carousel.owlCarousel({
      loop:true,
      nav:true,
      dots:false,
      autoplay:true,
      margin:30,
      smartSpeed:1000,
      navText:["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"],
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
    //menu slide actvie
    teams_carousel.owlCarousel({
      loop:true,
      nav:true,
      dots:false,
      margin:30,
      center:true,
      autoplay:true,
      smartSpeed:1000,
      navText:["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"],
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

    //blog wrap slider active
    blog_wrap.owlCarousel({
      loop:true,
      nav:true,
      dots:false,
      autoplay:true,
      smartSpeed:1000,
      margin:30,
      navText:["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"],
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

      //modal video button active
      var video__btn = $(".video-btn-link");
      video__btn.modalVideo();

      //wow animations active here
      new WOW().init();
    
      var navbarmneuclass = $('.navbarmneuclass')
      navbarmneuclass.onePageNav();

    //google map
    $('.map')
        .gmap3({
          center: [23.7439934,90.4224107],
          zoom: 6,
          mapTypeId : google.maps.MapTypeId.ROADMAP
        })
        .route({
          origin:"48 Pirrama Road, Pyrmont NSW",
          destination:"Bondi Beach, NSW",
          travelMode: google.maps.DirectionsTravelMode.DRIVING
        })
        .directionsrenderer(function (results) {
          if (results) {
            return {
              panel: $("<div></div>").addClass("gmap3").insertAfter($(".map")), // accept: string (jQuery selector), jQuery element or HTML node targeting a div
              directions: results
            }
          }
        })

      });

      //menu active
      jQuery('.stellarnav').stellarNav({
        theme: 'light',
        breakpoint: 960,
        position: 'right',
        phoneBtn: '18009997788',
        locationBtn: 'https://www.google.com/maps'
      });


     //jquery load function start
    jQuery(window).on("load", function() {
        
    });


}(jQuery));

//active plugins js main file end......