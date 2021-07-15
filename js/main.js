$('.front-big-slider_js').slick({
    dots:true,
    arrows:false,
    infinite:false,
    accessibility: false,
});

var scrollPrev = 0;
        $(window).scroll(function () {
            var scrolled = $(this).scrollTop(),
                header_height = $('.header_navig').height();
            if (scrolled > header_height) {
                $('.site-header').addClass('hide_menu');
                $('.search').addClass('hide_menu');
            } else {
                $('.site-header').removeClass('hide_menu');
                $('.search').removeClass('hide_menu');
            }

            if (scrollPrev > scrolled) {
                $('.site-header').removeClass('hide_menu');
                $('.search').removeClass('hide_menu');
            }
            scrollPrev = scrolled;
        });

$('.burger').click(function () { 
    $('.main-menu').toggleClass('hide-burger');
    $('.close-button').toggleClass('invis');
    $('.burger').toggleClass('animate_burg');
    $('body').toggleClass('no_scroll');
});

$('.close').click(function () { 
    $('.main-menu').removeClass('hide-burger');
    $('.close-button').toggleClass('invis');
});

$(".lupa").click(function() { 
    $(".search").toggleClass("search_visible");
});

$(".").click(function (e) { 
    e.preventDefault();
    
});
