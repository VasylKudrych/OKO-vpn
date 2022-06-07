$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.scroll-button').fadeIn();
        } else {
            $('.scroll-button').fadeOut();
        }
    });

    $('.scroll-button').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});

$(document).ready(function () {
    $(".header-burger").click(function(event) {
        $(".header, .header-burger, .header-nav").toggleClass("active");
        $("body").toggleClass("lock");
    });

    AOS.init();
});

$('.section-counties-item').on('click', function (event) {

    let windowWidth = $(window).width();

    if (windowWidth >= 768)  {
        event.stopPropagation();
    }
})



