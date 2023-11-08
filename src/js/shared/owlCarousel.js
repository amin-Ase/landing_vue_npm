let owlCarousel = jQuery('.owl-carousel');

owlCarousel.on({
    'initialized.owl.carousel': function () {
        jQuery(this).find('.owl-stage').addClass('lazyLoad');    // is used for blazy.js container
        setTimeout(() => {
            jQuery(this).find('.owl-prev,.owl-next').attr('aria-label', 'slider navigation');
        }, 0);

        jQuery(this).siblings('.placeholder_img').fadeOut(300);

    },
    'drag.owl.carousel': function () {
        jQuery(this).find('.owl-item').css('pointer-events', 'none');
    },
    'dragged.owl.carousel': function () {
        jQuery(this).find('.owl-item').css('pointer-events', 'auto');
    }
});