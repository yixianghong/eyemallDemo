<script>
import NewArrivalSwiper from "../NewArrivalSwiper";
export default {
  data() {
    return {
      newArrivalSwiperOptions: {
        // pagination: {
        //   el: ".swiper-pagination",
        // },
        loop: true,
        spaceBetween: 15,
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
            src: "PageGold/GoldPage_img05",
          },
          {
            id: 2,
            src: "PageGold/GoldPage_img05",
          },
          {
            id: 3,
            src: "PageGold/GoldPage_img05",
          },
          {
            id: 4,
            src: "PageGold/GoldPage_img05",
          },
          {
            id: 5,
            src: "PageGold/GoldPage_img05",
          },
        ],
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
        <p class="dark-grey-color xl-text mb-1 font-weight-bold">更多優惠組合</p>
        <p class="medium-grey-color md-text  mb-0">訂購即享更多好康優惠</p>
      </div>
    </div>
    <NewArrivalSwiper
      swiperName="eventGold"
      :swiperOptions="newArrivalSwiperOptions"
      :swiperData="swiperData"
    ></NewArrivalSwiper>
  </div>
</template>
 
 <style lang="scss" scoped>
 .card-img-top{
   width: auto;
   object-fit: contain;
 }
.card{
  img{
      object-fit: contain;
    }
}
</style>
