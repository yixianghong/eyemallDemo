<script>
export default {
  data() {
    return {
      swiperData: {
        slides: [
          {
            id: 1,
            src: "mainSwiper_img01",
          },
          {
            id: 2,
            src: "mainSwiper_img01",
          },
          {
            id: 3,
            src: "mainSwiper_img01",
          },
        ],
      },
      swiperOptions: {
        loop:true,
        pagination: {
          el: ".swiper-pagination",
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
    <swiper ref="mySwiper" :options="swiperOptions" navigation class="mb-2">
      <swiper-slide v-for="item in swiperData.slides" :key="item.id">
        <nuxt-link to="/Products/Prefecture/1">
          <img :src="require(`~/assets/img/mainSwiper/${item.src}.png`)" alt="" />
        </nuxt-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <b-row class="bannerBox">
      <b-col cols="6" class="pr-1">
        <img src="~/assets/img/mainSwiper/Banner_img01.png" alt="" />
      </b-col>
      <b-col cols="6" class="pl-1">
        <img src="~/assets/img/mainSwiper/Banner_img02.png" alt="" />
      </b-col>
    </b-row>
  </div>
</template>
 
 <style lang="scss" scoped>
 .BannerBox{
   .col-6{
     @include card-border-radius-style 
   }
   img{
       max-width: 100%;
   }
 }
 </style>
