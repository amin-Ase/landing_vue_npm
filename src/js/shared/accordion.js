jQuery('.accordion_btn').on('click', function() {

    let target = jQuery(this).attr('data-accordion_target');
    // params: selector, transition time, offset top
    accordion_toggle(jQuery(this), target, 300, null, false);

});  // accordion header click action