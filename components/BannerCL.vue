<script>
import NewArrivalSwiper from "./NewArrivalSwiper";
export default {
  data() {
    return {
      swiperMainData: {
        slides: [
          {
            id: 1,
            src: "CLBanner_img01",
          },
          {
            id: 2,
            src: "CLBanner_img01",
          },
          {
            id: 3,
            src: "CLBanner_img01",
          },
        ],
      },
      swiperOptions: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
      newArrivalSwiperOptions: {
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
        <p class="dark-grey-color xl-text mb-1 font-weight-bold">隱形眼鏡</p>
        <p class="medium-grey-color md-text  mb-0">訂購即享更多好康優惠</p>
      </div>
    </div>
    <swiper ref="mySwiper" :options="swiperOptions" navigation class="mb-2">
      <swiper-slide
        v-for="item in swiperMainData.slides"
        :key="item.id"
        class="card"
      >
        <img :src="require(`~/assets/img/BannerCL/${item.src}.png`)" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <NewArrivalSwiper
      swiperName="CL"
      :swiperOptions="newArrivalSwiperOptions"
      :swiperData="swiperData"
    ></NewArrivalSwiper>
    <b-col lg="4" class="mt-5 ml-auto mr-auto">
        <b-button class="w-100 dark-grey-border dark-grey-color pt-2 pb-2 border-radius-10" 
        variant="white">查看更多</b-button>
    </b-col>
  </div>
</template>
 
 <style lang="scss" scoped>
.BannerBox {
  .card {
    @include card-border-radius-style;
  }
  img {
    width: 100%;
  }
}
</style>
