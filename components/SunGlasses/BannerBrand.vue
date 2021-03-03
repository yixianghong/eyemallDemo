<script>
import NewArrivalSwiper from "../NewArrivalSwiper";
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
        spaceBetween: 15,
        slidesPerView: 5,
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
            src: "ContactLensPage_img06",
          },
          {
            id: 2,
            src: "ContactLensPage_img05",
          },
          {
            id: 3,
            src: "ContactLensPage_img06",
          },
          {
            id: 4,
            src: "ContactLensPage_img05",
          },
          {
            id: 5,
            src: "ContactLensPage_img06",
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
    
    <swiper ref="mySwiper" :options="newArrivalSwiperOptions" navigation class="mb-2">
      <swiper-slide
        v-for="item in swiperData.slides"
        :key="item.id"
        class="CLCard"
      >
        <img :src="require(`~/assets/img/PageContactLens/${item.src}.png`)" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
 
 <style lang="scss" scoped>
.BannerBox {
  .CLCard {
    text-align: center;
    height: 139px;
    display: flex;
    justify-content: center;
    
    img{
      object-fit: contain;
    }
  }
}
</style>
