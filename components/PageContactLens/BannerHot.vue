<script>
import NewArrivalSwiper from "../NewArrivalSwiper";
export default {
  data() {
    return {
      swiperOptions: {
        // pagination: {
        //   el: ".swiper-pagination",
        // },
        loop: true,
        spaceBetween: 30,
        slidesPerView: 4,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // Some Swiper option/callback...
      },
      swiperData: {
        slides: [
          {
            id: 1,
            src: "BannerCL/CLBanner_img02",
          },
          {
            id: 2,
            src: "BannerCL/CLBanner_img02",
          },
          {
            id: 3,
            src: "BannerCL/CLBanner_img02",
          },
          {
            id: 4,
            src: "BannerCL/CLBanner_img02",
          },
          {
            id: 5,
            src: "BannerCL/CLBanner_img02",
          },
        ],
      },
    };
  },
  components: {
    NewArrivalSwiper,
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>
<template>
  <div class="BannerBox">
    <div class="d-flex justify-content-center position-relative">
      <div class="text-center titleBox p-4">
        <p class="dark-grey-color font-weight-bold xl-text mb-1">熱銷商品排行</p>
        <p class="green-color font-weight-bold font-italic xxxl-text mb-0">
          HOT
        </p>
      </div>
    </div>
    <p>隱形眼鏡</p>
    <NewArrivalSwiper
      swiperName="hotCL"
      :swiperOptions="swiperOptions"
      :swiperData="swiperData"
    ></NewArrivalSwiper>
    <p class="mt-4">隱形眼鏡</p>
    <NewArrivalSwiper
      swiperName="hotCL"
      :swiperOptions="swiperOptions"
      :swiperData="swiperData"
    ></NewArrivalSwiper>
  </div>
</template>
<style lang="scss" scoped>
</style>
