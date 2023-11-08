jQuery(() => {

    let offcanvas = jQuery('#offcanvas'), hamburger = jQuery('#hamburger');

    if (offcanvas.length === 0) return;

    // toggle offcanvas
    const offcanvasToggle = () => {

        hamburger.toggleClass('close');
        backdrop_toggle();
        offcanvas.toggleClass('show');
        offcanvas.hasClass('show') ? history.pushState({}, "", `#offcanvas`) : history.back();

    }

    // click event on hamburger icon to toggle offcanvas
    hamburger.on('click', offcanvasToggle);

    jQuery('.backdrop').on('click', function() {
        offcanvas.toggleClass('show');
    });

});