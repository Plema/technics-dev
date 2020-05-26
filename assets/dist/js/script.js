if ($(window).width() <= 1023) {

    $(".menu").on("click","a", function (event) {
        console.log(0);
        event.preventDefault();
        var id  = $(this).data('class');
            console.log(id);
        var top = $('.' + id).offset().top;
            console.log(top);
        $('body,html').animate({scrollTop: top}, 1500);
        $('.open-menu').removeClass('active');
        $('.menu').removeClass('active');
    });

}

var fullPageCreated = false;
    createFullpage();

function createFullpage() {
    if (fullPageCreated === false) {
        fullPageCreated = true;
        $('#fullpage').fullpage({
            licenseKey: 'YOUR KEY HERE',
            menu: '#menu',
            navigation: true,
            scrollingSpeed: 1000,
            navigationPosition: 'right',
            anchors: ['secondPage1', 'secondPage2', 'secondPage3', 'secondPage4', 'secondPage5'],
            onLeave: function(origin, destination, direction){
                if(destination.index == 4){
                    $('footer').addClass('active');
                }else{
                    $('footer').removeClass('active');
                }
            }
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

    $('.info').on('click', function(){
        $(this).next('.info-popup').addClass('active');
    });

    $('.icon-close').on('click', function(){
        $(this).parent('.info-popup').removeClass('active');
    });

    $('.close').on('click', function(){
        $('.thank-popup').removeClass('active');
    });
    
    $('.close-popup').on('click', function(){
        $('.thank-popup').removeClass('active');
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

    var timeout1, timeout2, setImeout, current1 = 0,
    textArr1 = document.querySelectorAll('.solutions li')

    function ovalIconInit1 () {
        timeout1 = setTimeout(function() {
            $('.solutions li').removeClass('active');
            $('.' + $('.solutions li.active').data('text')).addClass('active');
            textArr1.forEach(function(i) { (i) >= i.classList.remove('active') });
            textArr1[current1].classList.add("active");
            (current1 === 6) ? current1 = 0 : current1++;
            ovalIconInit1();
        }, 2850);
    };

    ovalIconInit1();

    $('.open-menu').on('click', function(){
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
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

