<script>
export default {
  data() {
    return {};
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
        <p class="dark-grey-color xl-text mb-1 font-weight-bold">大學葉黃素</p>
        <p class="medium-grey-color md-text mb-0">訂購即享更多好康優惠</p>
      </div>
    </div>
    <b-row class="flex-wrap">
      <b-col cols="4" class="square">
        <img src="~/assets/img/PageGold/GoldPage_img02.png" alt="" />
      </b-col>
      <b-col cols="4" class="square yellow">
        <p>
          <span class="xxxl-text font-weight-bold"> 金晶明-葉黃素</span
          ><br /><span>訂購即享更多好康優惠</span>
        </p>
      </b-col>
      <b-col cols="4" class="square">
        <img src="~/assets/img/PageGold/GoldPage_img03.png" alt="" />
      </b-col>
      <b-col cols="4" class="square purple">
        <p>
          <span class="xxxl-text font-weight-bold"> 金晶明-葉黃素</span
          ><br /><span>訂購即享更多好康優惠</span>
        </p>
      </b-col>
      <b-col cols="4" class="square">
        <img src="~/assets/img/PageGold/GoldPage_img04.png" alt="" />
      </b-col>
      <b-col cols="4" class="square green">
        <p>
          <span class="xxxl-text font-weight-bold"> 金晶明-葉黃素</span
          ><br /><span>訂購即享更多好康優惠</span>
        </p>
      </b-col>
    </b-row>
  </div>
</template>
 
 <style lang="scss" scoped>
.square {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: $white-color;
  @include card-border-radius-style;

  &.yellow {
    background: $yellow-color;
  }

  &.purple {
    background: $lutein-purple-color;
  }

  &.green {
    background: $green-color;
  }
}
</style>
