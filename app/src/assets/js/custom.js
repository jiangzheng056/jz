(function($) {
    "use strict";
    jQuery(window).on('load',
    function() {
        $(".preloader").delay(1600).fadeOut("slow");
    });
    window.addEventListener('scroll',
    function() {
        const header = document.querySelector('header.style-1, header.style-2, header.style-3, .header-area-2');
        header.classList.toggle("sticky", window.scrollY > 0);
    });
    $('.mobile-menu-btn').on("click",
    function() {
        $('.main-menu').addClass('show-menu');
    });
    $('.menu-close-btn').on("click",
    function() {
        $('.main-menu').removeClass('show-menu');
    });
    $('.search-btn').on("click",
    function() {
        $('.header-search').addClass('slide');
    });
    $('.search-cross-btn').on("click",
    function() {
        $('.header-search').removeClass('slide');
    });
    $('.dropdown-icon').on('click',
    function() {
        $(this).toggleClass('active').next('ul').slideToggle();
        $(this).parent().siblings().children('ul').slideUp();
        $(this).parent().siblings().children('.active').removeClass('active');
    });
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('ul li a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }
    $(window).on('scroll',
    function() {
        if ($(this).scrollTop() > 200) {
            $('.position_top').addClass('sticky');
        } else {
            $('.position_top').removeClass('sticky');
        }
    });
    $('.search').on('click',
    function(event) {
        $('.header-search').toggleClass('down');
    });
    $('.search-cross-btn').on('click',
    function(event) {
        $('.header-search').removeClass('down');
    });
    $('.side-btn').on('click',
    function(event) {
        $('.sidebar').toggleClass('active');
    });
    $('.cross').on('click',
    function(event) {
        $('.sidebar').removeClass('active');
    });
    $('.cross-btn').on('click',
    function(event) {
        $('.main-nav').toggleClass('slidenav');
    });
    $('.remove').on('click',
    function(event) {
        $('.main-nav').removeClass('slidenav');
    });
    $(".main-nav .bi").on('click',
    function(event) {
        var $fl = $(this);
        $(this).parent().siblings().find('.sub-menu').slideUp();
        $(this).parent().siblings().find('.bi').addClass('bi-chevron-down');
        if ($fl.hasClass('bi-chevron-down')) {
            $fl.removeClass('bi-chevron-down').addClass('bi-chevron-up');
        } else {
            $fl.removeClass('bi-chevron-up').addClass('bi-chevron-down');
        }
        $fl.next(".sub-menu").slideToggle();
    });
    $(".progress-bar-circle").loading();
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });
    $('.popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $('.watch-text').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $(".sidebar").niceScroll(".sidebar-scroll", {
        cursorcolor: "#FF4F4F",
        cursorwidth: "10px"
    });
    var swiper = new Swiper(".hero-slider", {
        slidesPerView: 1,
        parallax: true,
        speed: 2000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper = new Swiper(".project-slider", {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 1200,
        effect: 'slide',
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320 : {
                slidesPerView: 1,
            },
            480 : {
                slidesPerView: 2,
            },
            992 : {
                slidesPerView: 3,
            },
            1200 : {
                slidesPerView: 4,
            }
        },
    });
    var swiper = new Swiper(".project-slider2", {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1200,
        effect: 'slide',
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            320 : {
                slidesPerView: 1,
            },
            480 : {
                slidesPerView: 2,
            },
            992 : {
                slidesPerView: 3,
            },
        },
    });
    var swiper = new Swiper(".testimonial-slider", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        centeredSlides: true,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".testimonial-slider2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next-c",
            prevEl: ".swiper-button-prev-c",
            clickable: true,
        },
        thumbs: {
            swiper: swiper,
        },
    });
    var heroSliderTwo = new Swiper('.banner1', {
        slidesPerView: 1,
        speed: 1500,
        loop: true,
        spaceBetween: 10,
        centeredSlides: true,
        roundLengths: true,
        parallax: true,
        effect: 'fade',
        navigation: false,
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 4000
        },
        pagination: {
            el: ".hero-one-pagination",
            clickable: true,
        }
    });
    jQuery(window).on('load',
    function() {
        new WOW().init();
        window.wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            mobile: true,
            live: true,
            offset: 100
        });
        window.wow.init();
    });
} (jQuery));