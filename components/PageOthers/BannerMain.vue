<script>
export default {
  data() {
    return {
      swiperData: {
        slides: [
          {
            id: 1,
            src: "PageOthers_img01",
          },
          {
            id: 2,
            src: "PageOthers_img01",
          },
          {
            id: 3,
            src: "PageOthers_img01",
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
        <img :src="require(`~/assets/img/PageOthers/${item.src}.png`)" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
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
