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