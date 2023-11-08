jQuery(() => {

    let pageNumber = 2;

    jQuery('.loadBtn').on('click', function () {
        // make the element non-clickable
        jQuery(this).css('pointer-events', 'none');

        loader_toggle(jQuery(this), '.btnCnt', 'on', '.loader');

        let reqParam = {
            url: serverUrl + `/${pageNumber}`,
        };

        post_request(reqParam)
            .then(response => {
                render_latestNews(response.latestNews);

                if (response.nextPage === -1)   // if there is no more pages
                    jQuery(this).addClass('d-none');
                else {
                    loader_toggle(jQuery(this), '.btnCnt', 'off', '.loader');
                    pageNumber++;
                    jQuery(this).css('pointer-events', 'auto');
                }
            });
    });

});