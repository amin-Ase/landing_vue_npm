jQuery('.scrollIntoEl').on('click',function() {

    let targetId = jQuery(this).find('a').attr('href'), element = jQuery(`${targetId}`);

    if (element.length) {
        let offset = element.offset();
        offset.top -= 100;
        jQuery('html, body').animate({scrollTop: offset.top}, 10);
        element[0].scrollIntoView({behavior: 'smooth', block: 'start'});
    }
});