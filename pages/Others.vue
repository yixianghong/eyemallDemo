<script>
import BannerMain from "~/components/PageOthers/BannerMain";
import BannerBrand from "~/components/PageOthers/BannerBrand";
import BannerEvent from "~/components/PageOthers/BannerEvent";
import BannerHotSearch from "~/components/PageOthers/BannerHotSearch";




export default {
  components: {
    BannerMain,
    BannerBrand,
    BannerEvent,
    BannerHotSearch
  },
};
</script>
<template>
  <div class="reset-page-padding-top">
    <div class="container">
      <BannerMain></BannerMain>
      <BannerHotSearch></BannerHotSearch>
      <BannerEvent></BannerEvent>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.text {
  color: $grey-color;
}
</style>
