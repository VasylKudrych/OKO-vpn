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

        // $(".section-counties-item__title--active").click(function(){
        //     $(".sub-menu").slideToggle();
        // });
        //
        // $(".section-counties-item__title").hover(
        //     function() {
        //         $(this).toggleClass('section-counties-item__title--active')
        //     }
        // );

        $(".section-counties-item__title--US").click(function(){
            $(".sub-menu--US").slideToggle();
        });

        $(".section-counties-item__title--AF").click(function(){
            $(".sub-menu--AF").slideToggle();
        });

        $(".section-counties-item__title--SA").click(function(){
            $(".sub-menu--SA").slideToggle();
        });

        $(".section-counties-item__title--EU").click(function(){
            $(".sub-menu--EU").slideToggle();
        });

        $(".section-counties-item__title--CA").click(function(){
            $(".sub-menu--CA").slideToggle();
        });

        $(".section-counties-item__title--SB").click(function(){
            $(".sub-menu--SB").slideToggle();
        });

        $(".section-counties-item__title--OU").click(function(){
            $(".sub-menu--OU").slideToggle();
        });

        $(".section-counties-item__title--A").click(function(){
            $(".sub-menu--A").slideToggle();
        });

    } else return 0;
});