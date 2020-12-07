$(function(){
    //Section video fancy-box
    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 1,
            showinfo : 1
        }
    });

    //Section heroes slick
    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-btn slick-prev"><img class="arrow-p" src="images/arrow-left.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img class="arrow-n" src="images/arrow-right.png" alt="next"></button>',
        asNavFor: '.heroes__slider-text',
        responsive: [
            {
                breakpoint: 426,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows: false
    });
});