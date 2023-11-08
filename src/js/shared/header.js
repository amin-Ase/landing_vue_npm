let params = {
    lastScrollTop: 0,
    scrollUpThreshold: 50,
    header: jQuery('header')
};
/* headerHeight should attach this way because keyword "this" does not identify inside param obj itself */
params.headerHeight = params.header.height();

jQuery(() => {

    jQuery(window).on('scroll', function() {
        header_sticky_handler(params, this);
    });

    let menuItems = jQuery('.header-links .nav-link');
    menuItems.on('click', function() {
        // if the menu item is not active, add active class to it
        if (!jQuery(this).hasClass('active')) {
            menuItems.removeClass('active');
            jQuery(this).addClass('active');
        }
    });

});

function header_sticky_handler({ lastScrollTop, scrollUpThreshold, header, headerHeight }, win) {

    let st = jQuery(win).scrollTop();
    let diff = st - lastScrollTop;

    // if diff is more than 30px, do the statement
    if (Math.abs(diff) > scrollUpThreshold) {

        // detecting scroll down
        if (st > lastScrollTop) {
            // Hides the header when scrolling down
            header.css({
                top: -headerHeight - 1 + 'px'
            }).addClass('elm_invisible');
        }
        // detecting scroll up
        else {
            // Shows the header when scrolling back
            if (st < lastScrollTop) {
                header.css({
                    top: 0
                }).removeClass('elm_invisible');
            }
        }
        lastScrollTop = st;
    }

    params.lastScrollTop = lastScrollTop;   // update lastScrollTop
}