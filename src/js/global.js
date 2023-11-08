/* creates an ajax post request using promises */

const _l = {
    more_details: 'مشاهده بیشتر',
    less_details: 'مشاهده کمتر',
}
let blazy;
window.fetched_obj = {};

let post_request = ({url, data = {}, reqType = "POST", asyncType = true}) =>
    new Promise(function(resolve, reject) {
        jQuery.ajax({
            method: reqType,
            url: url,
            data: data,
            async: asyncType,
            success: response => {
                resolve(response);     // Resolve the Promise with the response data
                jQuery.getScript('/landing_vue_npm/dist/lib/js/blazy.min.js', () => {
                    blazy = new Blazy({
                        selector: '.b-lazy',
                        container: '.lazyLoad',
                    });
                });
            },
            error: error => {
                reject(error);         // Reject the Promise with the error information
            }
        });
    });

const loader_toggle = (container, content, type, selector = '.spinner') => {
    if (type === 'on') {
        container.find(content).addClass('d-none');   // content on loader's background
        container.find(selector).removeClass('d-none').addClass('content-center');
    } else if (type === 'off') {
        container.find(content).removeClass('d-none');
        container.find(selector).addClass('d-none').removeClass('content-center');
    }
}  // toggles loader

// backdrop hide
const backdrop_hide = () => {
    jQuery('.backdrop').fadeOut('fast').removeClass('show');
    jQuery('body').removeClass('overflow-hidden');
}
// backdrop toggle
const backdrop_toggle = () => {
    jQuery('.backdrop').fadeToggle('fast').toggleClass('show');
    jQuery('body').toggleClass('overflow-hidden');
}
// event on hashchange (back button)
jQuery(window).on('hashchange', () => {
    if (window.location.hash.slice(1) !== 'offcanvas') {
        jQuery('#offcanvas').removeClass('show');
        jQuery('#hamburger').removeClass('close');
        backdrop_hide();
    }
});

function toggleableHeight(el) {

    let container, showMore_text,
        moreLess = jQuery('.showMore'), wrapper = jQuery(`.${el}`);

    wrapper.data({visibility: 'collapsed'});   // sets initial data for each container

    moreLess.on('click', function() {
        container = jQuery(this).closest(`.${el}`);

        // if content is invisible, show it and save the scroll position
        if (container.data('visibility') === 'collapsed') {

            container.data({                               // modify container data
                visibility: 'expanded'
            });
            showMore_text = _l.less_details;

        }    // else hide the content and scroll back to the saved position
        else {
            let offset = container.offset();
            offset.top -= 150;
            jQuery('html, body').animate({scrollTop: offset.top}, 0);
            container.data({visibility: 'collapsed'});      // reset visibility state to collapsed
            showMore_text = _l.more_details;
        }

        container.find('.moreTxt').text(showMore_text).siblings('.arrow-down').toggleClass('rotate-arrow-up');
        container.find('.text').toggleClass('textOverflow h-auto');

    });
}  // toggles height of texts in paragraph.

/**
 * @param {Element} _this      - accordion toggle element.
 * @param {String}  target     - data-id of accordion toggle element holding the target "id".
 * @param {Number} transTime   - transition time of toggling the accordion target.
 * @param {Number} offsetTop   - used together with offset. used when we want scroll accordion content.
 * @param {Boolean} offset     - false means scrolling is disabled.
 */
function accordion_toggle(_this, target, transTime, offsetTop, offset = true) {
    _this.find('.arrow-down').toggleClass('rotate-arrow-up');

    if (offset)   // if we want to scrollY accordion when toggling
        if (!jQuery(`${target}:visible`).length) {
            let offset = _this.offset();   // get offset of element
            offset.top -= offsetTop;     // set offset.top for element
            jQuery('html, body').animate({scrollTop: offset.top}, 70);   // start scrolling
        }   // executes when accordion content is hidden

    jQuery(target).slideToggle(transTime);

}     // accordion click event to toggle its content

jQuery(() => {

    jQuery('.backdrop').on('click', function() {
        history.back();
        backdrop_hide();
    });

});