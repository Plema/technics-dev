var fullPageCreated = false;
    createFullpage();

function createFullpage() {
    if (fullPageCreated === false) {
        fullPageCreated = true;
        $('#fullpage').fullpage({
            menu: '#menu',
            navigation: true,
            scrollingSpeed: 1000,
            navigationPosition: 'right',
            anchors: ['secondPage1', 'secondPage2', 'secondPage3', 'secondPage4', 'secondPage5'],
        });       
    }
}

if ($(window).width() <= 1023) {
    fullPageCreated = false;
    $.fn.fullpage.destroy('all');
}

if ($(window).width() >= 1024) {
    createFullpage();
}

$(document).ready(function(){

    $('.phone').mask('+7 (000) 000 00 00', {placeholder: "+7 (___) ___ __ __"});

    var projectsSlider = $('.projects-slider .slider');

    projectsSlider.on("init", function(event, slick){
        $(".projects_count").html('0' + parseInt(slick.currentSlide + 1) + ' <i>/</i> <span>0' + slick.slideCount + '</span>');
    });

    projectsSlider.on("afterChange", function(event, slick, currentSlide){
        $(".projects_count").html('0' + parseInt(slick.currentSlide + 1) + ' <i>/</i> <span>0' + slick.slideCount + '</span>');
    });

    projectsSlider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"></button>',
        prevArrow: '<button class="slick-arrow prev"></button>',
    });

    $('.slider-item').on('click', function(){
        var projects = $(this).data('projects');
        $('.slider-item').removeClass('active');
        $('.projects-item').removeClass('active');
        $(this).addClass('active');
        $('.' + projects).addClass('active');
    });

    $('.partners-slider').slick({
        rows: 2,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: '<button class="slick-arrow next"></button>',
        prevArrow: '<button class="slick-arrow prev"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                rows: 1,
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    });

    $('.partners-item').on('click', function(){
        var partners = $(this).data('partners');
        $('.partners-item').removeClass('active');
        $('.text-item').removeClass('active');
        $(this).addClass('active');
        $('.' + partners).addClass('active');
    });

});

$(window).resize(function() {

    if ($(window).width() <= 1023) {
        fullPageCreated = false;
        $.fn.fullpage.destroy('all');
    }

    if ($(window).width() >= 1024) {
        createFullpage();
    }

});