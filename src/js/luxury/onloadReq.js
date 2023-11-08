// on page ready functions calling to load the data.

/* ---------list of template id-------- */
const tempIds = {
    nonBorder_card: '#nonBorderedCard_temp',
    blurred_card: '#blurredCard_temp',
    articleBox: '#articleBox_temp',
    luxSlide: '#luxSlide_temp',
};
/* ---------slider options-------- */
let defaultOptions = {
    rtl: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 1,
    smartSpeed: 600,
},
    sliderAutoPlay = {
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    },
    sliderLoop = {
        loop: true
    };

/*--------------------------- destructuring function --------------------------*/
// destructuring the data object
const data_separator = (data) => {

    let { luxSlides, latestArticles } = data;

    render_luxSlider(luxSlides);
    render_latestArticles(latestArticles);
};

/* -------------------------- cloning templates --------------------- */
const clone_luxSlide = ({src}, tempId) => {
    let content = jQuery(tempIds[tempId])[0].content.cloneNode(true);

    jQuery(content).find('img').attr('src', src);

    return content;
}

const clone_latestArticle = ({src, title, date, link}, tempId) => {
    let content = jQuery(tempIds[tempId])[0].content.cloneNode(true);

    jQuery(content).find('img').attr('data-src', src);
    jQuery(content).find('.artTitle').text(title);
    jQuery(content).find('a').attr('href', link);

    return content;
}

/* -------------------------- rendering functions --------------------------- */
const render_luxSlider = (data) => {
    let owl_wrapper = jQuery('.luxurySlider .sliderWrapper'), cntArr = [];

    data.forEach(item => {
        cntArr.push(clone_luxSlide(item, 'luxSlide'));
    });

    owl_wrapper.append(cntArr).owlCarousel({...defaultOptions, ...sliderAutoPlay, ...sliderLoop, nav: false});
}

const render_latestArticles = (data) => {
    let cntArr = [], container = jQuery('.articleContainer');

    data.forEach(item => {
        cntArr.push(clone_latestArticle(item, 'articleBox'));
    });

    container.append(cntArr);
}

/*------------------------- Document on ready ------------------------*/
window.data_json = {};
// let blazy;

jQuery(() => {

let page_id = jQuery("body").attr("id");

    if (page_id === "luxury") {
        let reqParam = {
            url: localUrl
        };

        post_request(reqParam)
            .then(response => {
                data_separator(response);
                data_json = response;
                jQuery('.aminoo').trigger('click');
            });
    }

});
