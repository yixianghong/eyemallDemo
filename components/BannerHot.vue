<script>
export default {
  data() {
    return {
      swiperData: {
        slides: [
          {
            id: 1,
            src: "HotBanner_img01",
          },
          {
            id: 2,
            src: "HotBanner_img02",
          },
          {
            id: 3,
            src: "HotBanner_img03",
          },
          {
            id: 4,
            src: "HotBanner_img01",
          },
          {
            id: 5,
            src: "HotBanner_img02",
          },
        ],
      },
      swiperOptions: {
        // pagination: {
        //   el: ".swiper-pagination",
        // },
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {},
};
</script>
<template>
  <div class="BannerBox">
    <div class="d-flex justify-content-center position-relative">
      <div class="text-center titleBox p-4">
        <p class="dark-grey-color font-weight-bold xl-text mb-1">強檔活動</p>
        <p class="medium-grey-color md-text mb-0">訂購即享更多好康優惠</p>
      </div>
    </div>
    <swiper ref="mySwiper" :options="swiperOptions" navigation class="mb-2">
      <swiper-slide v-for="item in swiperData.slides" :key="item.id">
        <b-card
          header-class="p-4"
          no-body
          :img-src="require(`~/assets/img/BannerHot/${item.src}.png`)"
          img-alt="Card image"
          img-top
          img-width="149"
          img-height="175"
        >
          <div class="p-3 d-flex justify-content-between align-items-center">
            <div>
              <p class="dark-grey-color mb-1 font-weight-bold">
                繽紛太陽眼鏡 AIMI
              </p>
              <span class="grey-color sm-text">全場焦點‧時尚來襲</span>
            </div>
            <div>
              <b-button
                pill
                variant="green"
                class="white-color md-text pl-3 pr-3"
                size="md"
                >查看</b-button
              >
            </div>
          </div>
        </b-card>

        <!-- <img :src="require(`~/assets/img/mainSwiper/${item.src}.png`)" alt="" /> -->
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<style lang="scss" scoped>
.card {
  @include card-border-radius-style;
}

</style>
