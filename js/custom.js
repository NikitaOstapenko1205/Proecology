(function($){
    "use strict";

    $(document).ready(function () {
        var menuButton = $('.header-burger'),
            mainMenu = $('.header-menu'),
            subMenu = $('.sub-menu');

        menuButton.click(function(){
            if($(this).hasClass('open')){
                $(this).removeClass('open');
                mainMenu.stop().slideUp(300);
            }
            else{
                $(this).addClass('open');
                mainMenu.stop().slideDown(300);
            }
        });

        subMenu.click(function(){
            var windowWidth = $(window).width();
            
            if(windowWidth <= 975){

                if($(this).hasClass('sub-menu-open')){
                    $('.sub-menu-ul').stop().slideUp(300);
                    $('.sub-menu').removeClass('sub-menu-open');
                }
                else{
                    $('.sub-menu-ul').stop().slideUp(300);
                    $('.sub-menu').removeClass('sub-menu-open');
                    $(this).addClass('sub-menu-open');
                    $(this).find('.sub-menu-ul').stop().slideDown(300);
                }

            }
        });

        $('.above-footer .row').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows : false,
            responsive: [
                {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
                },
                {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        });



    });
})(jQuery);