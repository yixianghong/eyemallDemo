<script>
export default {
  props: ["swiperName", "swiperOptions", "swiperData"],
  data() {
    return {};
  },
  computed: {
    swiper() {
      let mySwiper = this.swiperName;
      return this.$refs[mySwiper].$swiper;
    },
  },
  mounted() {},
};
</script>
<template>
  <swiper
    :ref="swiperName"
    :options="swiperOptions"
    :auto-update="true"
    navigation
    class="mb-2"
  >
    <swiper-slide v-for="item in swiperData.slides" :key="item.id">
      <b-card
        class="border-0"
        header-class="pt-0 pb-0"
        no-body
        
        img-alt="Card image"
        img-top
        img-width="auto"
        img-height="auto"
      >
        <template #header>
          <b-card-img
            :src="require(`~/assets/img/${item.src}.png`)"
            alt="Image"
          ></b-card-img>
        </template>
        <div class="p-3">
          <div>
            <p class="dark-grey-color mb-2 font-weight-bold">
              A-AIMI潮流雷朋款飛行員墨鏡潮流雷朋款飛行員5806
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-end">
            <div>
              <p class="mb-0 sm-text">AIMI</p>
              <p class="mb-0">
                <span class="red-color lg-text pr-2">$1250</span
                ><s><sub>$2980</sub></s>
              </p>
            </div>
            <div>
              <b-button
                variant="yellow"
                class="gray-color xs-text p-1"
                size="sm"
                >限時優惠</b-button
              >
            </div>
          </div>
        </div>
      </b-card>

      <!-- <img :src="require(`~/assets/img/mainSwiper/${item.src}.png`)" alt="" /> -->
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>



<style lang="scss" scoped>
.card {
  // @include card-border-radius-style;
  @include card-padding-style;
}
</style>