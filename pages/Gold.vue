<script>
import BannerMain from "~/components/PageGold/BannerMain";
import BannerBrand from "~/components/PageGold/BannerBrand";
import BannerEvent from "~/components/PageGold/BannerEvent";



export default {
  components: {
    BannerMain,
    BannerBrand,
    BannerEvent
  },
};
</script>
<template>
  <div class="reset-page-padding-top">
    <div class="container">
      <BannerMain></BannerMain>
      <BannerBrand></BannerBrand>
      <BannerEvent></BannerEvent>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.text {
  color: $grey-color;
}
</style>
