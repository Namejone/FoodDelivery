(function ($) {
    "use strict";
    // owlCarousel
    $('.popular-items-slider-active').owlCarousel({
        loop:true,
        margin:30,
        items:5,
        navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:3
            },
            992:{
                items:5
            }
        }
    });

    // owlCarousel
    $('.search-products-active').owlCarousel({
        loop:true,
        margin:30,
        items:5,
        navText:['<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>'],
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:3
            },
            992:{
                items:6
            }
        }
    });



    
})(jQuery);