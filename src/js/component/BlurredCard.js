export default {
    props: {
        content: Object
    },
    computed: {
    },
    data() {
        return {
            title: this.content.title,
            src: this.content.src,
            date: this.content.date,
            link: this.content.link
        }
    },
    methods: {
    },
    template:
    `
      <div class="blurredCard">
          <a :href="link" class="card_link flex">
            <div class="card-img flex">
              <img class="poster b-lazy" :data-src="src" src=""
                   alt="poster" decoding="async" width="340" height="270">
            </div>
            <div class="text-label">
              <div class="date">
                {{ date }}
              </div>
              <div class="titleWrapper flex">
                <span class="title textOverflow line-clamp-2">
                  {{ title }}
                </span>
                <span class="icon">
<!--                  <?php include("../assets/svg/arrow.php");?>-->
                </span>
              </div>
            </div>
            <div class="blurred"></div>
          </a>
      </div>
    `
}