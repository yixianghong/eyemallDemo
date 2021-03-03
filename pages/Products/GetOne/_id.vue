<script>

import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import CountBox from "~/components/CountBox"

Vue.use(BootstrapVue, {});

Vue.use(BootstrapVueIcons, {});
export default {
  layout:'layoutGrey',
  data() {
    return {
      swiperOptionTop: {
        // notNextTick: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: "auto",
        spaceBetween: 10,
        loop: true,
      },
      swiperOptionThumbs: {
        // notNextTick: true,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loopedSlides: 5,
        loop: true,
      },
      swiperData: {
        slides: [
          {
            id: 1,
            src: "BannerOK/OKBanner_img01",
          },
          {
            id: 2,
            src: "BannerOK/OKBanner_img01",
          },
          {
            id: 3,
            src: "BannerOK/OKBanner_img01",
          },
          {
            id: 4,
            src: "BannerOK/OKBanner_img01",
          },
          {
            id: 5,
            src: "BannerOK/OKBanner_img01",
          },
          {
            id: 6,
            src: "BannerOK/OKBanner_img01",
          },
        ],
      },
    };
  },
  mounted() {
    const swiperTop = this.$refs.swiperTop.$swiper;
    const swiperThumbs = this.$refs.swiperThumbs.$swiper;
    swiperTop.controller.control = swiperThumbs;
    swiperThumbs.controller.control = swiperTop;
  },
  updated() {
    if (this.isInit === 1) {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.$swiper;
        const swiperThumbs = this.$refs.swiperThumbs.$swiper;
        swiperTop.controller.control = swiperThumbs;
        swiperThumbs.controller.control = swiperTop;
      });
      this.isInit = 0;
    }
  },
  
};
</script>
<template>
  <div id="ProductGetOne" class="container reset-page-padding-top">
    <div class="layoutGrey"></div>
    <p class="mt-2 mb-2 little-sm-text dark-grey-color">
      HACHILL 潮流玩酷 方格大框水銀鏡面太陽眼鏡 HC8212S-C3
    </p>
    <b-row class="background-white pt-3 pl-3 pr-3 pb-5 mb-5">
      <b-col cols="6">
        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
          <swiper-slide v-for="item in swiperData.slides" :key="item.id">
            <div>
              <img :src="require(`~/assets/img/${item.src}.png`)" alt="" />
            </div>
          </swiper-slide>
          <div
            class="swiper-button-next swiper-button-white"
            slot="button-next"
          ></div>
          <div
            class="swiper-button-prev swiper-button-white"
            slot="button-prev"
          ></div>
        </swiper>
        <!-- swiper2 Thumbs -->
        <swiper
          :options="swiperOptionThumbs"
          class="gallery-thumbs"
          ref="swiperThumbs"
        >
          <swiper-slide v-for="item in swiperData.slides" :key="item.id">
            <div class="swiper-slide-tumnb-wrap">
              <img :src="require(`~/assets/img/${item.src}.png`)" alt="" />
            </div>
          </swiper-slide>
        </swiper>
        <div>
          <span class="medium-grey-color pr-4">分享至</span>
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            class="mr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="34"
              height="34"
              rx="17"
              stroke="#007EFE"
            />
            <path
              d="M22.2792 18.4792L22.8498 15.1076H19.2831V12.9197C19.2831 11.9975 19.7811 11.0979 21.3787 11.0979H23V8.22764C23 8.22764 21.5289 8 20.122 8C17.1849 8 15.2651 9.61505 15.2651 12.5383V15.1082H12V18.4798H15.2651V26.6307H19.2831V18.4798L22.2792 18.4792Z"
              fill="#007EFE"
            />
          </svg>
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="34"
              height="34"
              rx="17"
              stroke="#656565"
            />
            <path
              d="M24.15 11H10.85C10.0941 11 9.36922 11.2509 8.83475 11.6976C8.30027 12.1443 8 12.7501 8 13.3818V21.321C8 21.9527 8.30027 22.5585 8.83475 23.0052C9.36922 23.4518 10.0941 23.7028 10.85 23.7028H24.15C24.9059 23.7028 25.6308 23.4518 26.1653 23.0052C26.6997 22.5585 27 21.9527 27 21.321V13.3818C27 12.7501 26.6997 12.1443 26.1653 11.6976C25.6308 11.2509 24.9059 11 24.15 11ZM23.5135 12.5878L17.5 16.359L11.4865 12.5878H23.5135ZM24.15 22.1149H10.85C10.598 22.1149 10.3564 22.0313 10.1782 21.8824C10.0001 21.7335 9.9 21.5316 9.9 21.321V13.5802L16.93 17.9865C17.0944 18.0896 17.2944 18.1453 17.5 18.1453C17.7056 18.1453 17.9056 18.0896 18.07 17.9865L25.1 13.5802V21.321C25.1 21.5316 24.9999 21.7335 24.8218 21.8824C24.6436 22.0313 24.402 22.1149 24.15 22.1149Z"
              fill="#656565"
            />
          </svg>
        </div>
      </b-col>
      <b-col cols="6">
        <div class="d-flex mb-3">
          <div class="tag green-color mr-2">#日拋</div>
          <div class="tag green-color mr-2">#日拋</div>
          <div class="tag green-color mr-2">#日拋</div>
        </div>
        <div class="mb-4">
          <p class="xl-text mb-1 font-weight-bold">睛漾水凝日拋 (炫)</p>
          <span class="grey-color">HACHILL</span>
        </div>
        <div class="d-flex justify-content-between align-items-end">
          <div>
            <span class="red-color xxl-text mr-2">$699</span>
            <s class="grey-color little-sm-text mr-2">原價 $350</s>
          </div>
          <div>
            <div class="grey-color little-sm-text mb-1">
              商品編號：ADHC1402049LL
            </div>
          </div>
        </div>
        <hr />
        <div class="medium-grey-color">
          <div class="d-flex mt-1 mb-1 align-items-center align-items-center">
            <div class="mr-3">優惠</div>
            <div class="yellow-color little-sm-text">任選3盒，平均每盒$999</div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex mt-1 mb-1 align-items-center">
              <div class="mr-3">付款</div>
              <div class="little-sm-text dark-grey-color">
                超商取貨付款‧信用卡一定付清‧分期
              </div>
            </div>
            <div class="green-color little-sm-text">
              更多 <b-icon icon="chevron-down"></b-icon>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex mt-1 mb-1 align-items-center">
              <div class="mr-3">取貨</div>
              <div class="little-sm-text dark-grey-color">
                大學門市‧超商‧宅配 <span class="green-color">(滿千免運)</span>
              </div>
            </div>
            <div class="green-color little-sm-text">
              更多 <b-icon icon="chevron-down"></b-icon>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div class="mr-3 mt-1 mb-1">庫存</div>
            <div class="green-color little-sm-text">
              顯示分店存貨 <b-icon icon="chevron-down"></b-icon>
            </div>
          </div>
          <hr />
          <CountBox size="xl"><template v-slot:title>數量</template></CountBox>
          <!-- <div class="d-flex justify-content-between align-items-center mb-4">
            <div class="mr-3 mt-1 mb-1">數量</div>
            <div class="d-flex">
              <div class="countBox" @click="countDash">
                <b-icon icon="dash"></b-icon>
              </div>
              <input class="countNumberBox" type="number" v-model="count" />
              <div class="countBox" @click="countAdd">
                <b-icon icon="plus"></b-icon>
              </div>
            </div>
          </div> -->
          <b-row class="mt-5">
            <b-col cols="6">
              <b-button
                pill
                class="w-100 white-color pt-2 pb-2"
                variant="yellow"
                >立即購買</b-button
              >
            </b-col>
            <b-col cols="6">
              <b-button pill class="w-100 white-color pt-2 pb-2" variant="green"
                >加入購物車</b-button
              >
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4">
        <div class="background-white p-4">
          <p class="green-color">優惠專區</p>
        </div>
      </b-col>
      <b-col cols="8" class="background-white">
        <div class="background-white p-4" style="margin-left: -15px;">
          <p class="green-color">商品詳情</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss" scoped>
.full-background {
  background: $bg-color;
}
#ProductGetOne {
  img {
    width: 100%;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .gallery-top {
    height: 80% !important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20% !important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    border: 1px solid $green-color;
    opacity: 1;
  }

  .swiper-slide-tumnb-wrap {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
}
</style>