<script>
export default {
  data() {
    return {
      cardList: [
        {
          id: 1,
          src: "ContactLensPage_img03",
          background: "dark-blue-color",
          title:"透明片",
        },
        {
          id: 2,
          src: "ContactLensPage_img04",
          background: "light-brown-color",
           title:"彩片",
        },
      ],
    };
  },
  computed: {
  },
  mounted() {},
};
</script>
<template>
  <div class="BannerBox">
    <div class="d-flex justify-content-center position-relative">
      <div class="text-center titleBox p-4">
        <p class="dark-grey-color font-weight-bold xl-text mb-1">依種類挑選</p>
        <p class="medium-grey-color md-text mb-0">訂購即享更多好康優惠</p>
      </div>
    </div>
    <b-row class="justify-content-center">
      <b-col cols="4" v-for="(item, index) in cardList" :key="index">
        <b-card
          header-class="p-4"
          no-body
          :img-src="require(`~/assets/img/PageContactLens/${item.src}.png`)"
          img-alt="Card image"
          img-top
          img-width="400"
          img-height="200"
          :bg-variant="item.background"
        >
          <div class="p-3 white-color text-center">
            <div class="d-flex align-items-center justify-content-center">
              <span class="pl-2">{{item.title}}</span>
            </div>
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
