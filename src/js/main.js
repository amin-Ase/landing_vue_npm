// import { createApp } from 'vue';
// import Card from './component/BlurredCard.js';
// import Luxpart from './component/LuxPart.js';
//
//
// window.newArticle = createApp({
//     components: {
//         Card
//     },
//     data() {
//         return {
//             cardContent: {}
//         }
//     },
//     methods: {
//         updateCnt() {
//             this.cardContent = data_json.newestArticles
//         }
//     }
// });
// newArticle.mount('#new_cards_wrap');
//
// /* ---------------------------------------------------------------- */
//
// window.luxuryParts = createApp({
//     components: {
//         Luxpart
//     },
//     data() {
//         return {
//             luxContent: {},
//             options: {
//                 rtl: true,
//                 margin: 10,
//                 nav: true,
//                 dots: false,
//                 items: 3,
//                 smartSpeed: 600,
//             },
//             arrowIcon: '<svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.33333 16.8461L9.50833 15.6585L3.19167 9.26536H20V7.58075H3.19167L9.50833 1.18765L8.33333 0L0 8.42305L8.33333 16.8461Z" fill="currentColor"/></svg>'
//         }
//     },
//     methods: {
//         updateCnt() {
//             this.luxContent = data_json.luxuryCategories
//         }
//     },
//     // watch: {
//     //     luxContent(val) {
//     //         console.log('lux content updated: ', val)
//     //     }
//     // }
// });
// luxuryParts.mount('#luxParts');

import Vue from 'vue'
import Card from './component/BlurredCard.vue';

new Vue({
    el: '#new_cards_wrap',
    components: {
        Card
    },
    template: '<Card />'
});