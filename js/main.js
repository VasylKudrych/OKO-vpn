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
});

$(document).ready(function(){

    let $containerWidth = $(window).width();

    if ($containerWidth <= 767)  {

        $("li.section-counties-item").addClass("uk-parent");

        $(".section-counties-item-ul").addClass("uk-nav-sub");

    } else return 0;
});