export default {
    props: {
        opt: Object,
        navicon: String,
        arr: Array,
        cat: String,
    },
    mounted() {
        jQuery(this.$refs.catSlider).owlCarousel(this.$props.opt)
            .find('.owl-nav').addClass(`sliderNavBtn rect`).children().append(this.$props.navicon);
    },
    computed: {
        device_mobile() {
            return jQuery('body.device_mobile').length;
        }
    },
    template: `
          <div v-if="!device_mobile" class="partContainer part_container part-divider">
            <div class="flex-between contents">
              
                <div class="flex imgWrapper position-rel indexArticle">
                  <div class="imgContent content-center visible_on_hover">
                    <div class="contentWrap">
                      <div class="title">{{arr[0].title}}</div>
                      <div class="text">{{arr[0].text}}</div>
                      <a :href="arr[0].link" class="watchAll">
                        <button class="btn radius-50">
                          <span class="btnCnt">مشاهده همه</span>
                        </button>
                      </a>
                    </div>
                  </div>
                  <img class="b-lazy" :data-src="arr[0].src" alt="articleImg" decoding="async" src="">
                </div>
              
                <div class="part-slider">
                  <div class="sliderWrapper owl-carousel owl-theme" :data-category="cat" ref="catSlider">
                    
                    <template v-for="(item, idx) in arr">
                      
                        <div class="card" v-if="idx > 0">
                          <a :href="item.link" class="card_link flex-col">
                            <div class="card-img flex mb-15">
                              <img class="poster b-lazy" :data-src="item.src" src=""
                                   alt="poster" decoding="async" width="282" height="202">
                            </div>
                            <div class="card-body title mb-5">
                                {{ item.title }}
                            </div>
                            <div class="card-footer date">
                                {{ item.date }}
                            </div>
                          </a>
                        </div>
                      
                    </template>
                    
                  </div>
                </div>
            </div>
          </div>
          
          <div v-else class="categorySlider part_container">
            <div class="container-32">
              <div class="categoryLink">
                <img class="b-lazy" :src="arr[0].src" alt="articleLinkImg" decoding="async">
                <div class="flex content">
                  <div class="catName">
                    {{ arr[0].title }}
                  </div>
                  <a :href="arr[0].link" class="flex col-gap-10 mr-auto">
                    <span class="text">مشاهده همه</span>
                    <span class="icon">
<!--                <?php include ("../assets/svg/arrow.php"); ?>-->
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="simpleSlider hide-scrollbar lazyLoad">
              <div class="sliderWrapper flex" data-category="cat">
                
                <template v-for="(item, idx) in arr">

                  <div class="card" v-if="idx > 0">
                    <a :href="item.link" class="card_link flex-col">
                      <div class="card-img flex mb-15">
                        <img class="poster b-lazy" :src="item.src"
                             alt="poster" decoding="async" width="282" height="202">
                      </div>
                      <div class="card-body title mb-5">
                        {{ item.title }}
                      </div>
                      <div class="card-footer date">
                        {{ item.date }}
                      </div>
                    </a>
                  </div>

                </template>
                      
              </div>
            </div>
          </div>
    `
}