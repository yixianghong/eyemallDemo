<script>
import NewArrivalSwiper from "./NewArrivalSwiper";
export default {
  data() {
    return {
      tabNum: 0,
      tabList: [
        {
          id: 1,
          name: "隱形眼鏡",
          swiperName: "CL",
          active: true,
        },
        {
          id: 2,
          name: "光學眼鏡",
          swiperName: "OK",
          active: false,
        },
        {
          id: 3,
          name: "太陽眼鏡",
          swiperName: "SUN",
          active: false,
        },
        {
          id: 4,
          name: "配件",
          swiperName: "Other",
          active: false,
        },
      ],
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
        ],
      },
    };
  },
  components: {
    NewArrivalSwiper,
  },
  computed: {},
  methods: {
  },
  mounted() {},
};
</script>
<template>
  <div class="BannerBox">
    <div class="d-flex justify-content-center position-relative">
      <div class="text-center titleBox p-4">
        <p class="dark-grey-color font-weight-bold xl-text mb-1">精選新品</p>
        <p class="green-color font-weight-bold font-italic xxxl-text mb-0">
          NEW ARRIVAL
        </p>
      </div>
    </div>

    <b-tabs
      nav-class="col-6 m-auto p-0 gray-border-nav"
      content-class="mt-3"
      justified
      active-nav-item-class="tabActive"
      no-nav-style
    >
      <b-tab
        v-for="(item, index) in tabList"
        :key="item.id"
        @click="tabNum = index"
        :title="item.name"
        :active="item.active"
      >
        <NewArrivalSwiper
          :swiperName="item.swiperName"
          :swiperOptions="swiperOptions"
          :swiperData="swiperData"
          v-if="tabNum == index"
        ></NewArrivalSwiper>
      </b-tab>
    </b-tabs>
  </div>
</template>
<style lang="scss" scoped>

</style>
