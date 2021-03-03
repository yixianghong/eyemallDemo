<script>
export default {
  data() {
    return {
      cardList: [
        {
          id: 1,
          src: "FeatureBanner_img01",
          icon:"FeatureBanner_icon01",
          background: "light-blue-color",
          title:"濾藍光",
          content:"紫外線減少約99%"
        },
        {
          id: 2,
          src: "FeatureBanner_img02",
          icon:"FeatureBanner_icon02",
          background: "light-brown-color",
           title:"濾藍光+UV400",
          content:"紫外線減少約99%"
        },
        {
          id: 3,
          src: "FeatureBanner_img03",
          icon:"FeatureBanner_icon04",
          background: "light-green-color",
           title:"戶外運動",
          content:"紫外線減少約99%"
        },
        {
          id: 4,
          src: "FeatureBanner_img04",
          icon:"FeatureBanner_icon03",
          background: "dark-green-color",
          title:"偏光",
          content:"紫外線減少約99"
        },
      ],
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
        <p class="dark-grey-color font-weight-bold xl-text mb-1">功能性眼鏡</p>
        <p class="medium-grey-color md-text mb-0">訂購即享更多好康優惠</p>
      </div>
    </div>
    <b-row>
      <b-col cols="3" v-for="(item, index) in cardList" :key="index">
        <b-card
          header-class="p-4"
          no-body
          :img-src="require(`~/assets/img/BannerFeature/${item.src}.png`)"
          img-alt="Card image"
          img-top
          img-width="250"
          img-height="250"
          :bg-variant="item.background"
        >
          <div class="p-3 white-color text-center">
            <div class="d-flex align-items-center justify-content-center mb-2" style="height:37px">
                <img :src="require(`~/assets/img/BannerFeature/${item.icon}.svg`)" alt="">
              <span class="pl-2">濾藍光</span>
            </div>
            <span>紫外線減少約99%</span>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<style lang="scss" scoped>
.card {
  border: 0px;
  @include card-border-radius-style;
}
</style>
