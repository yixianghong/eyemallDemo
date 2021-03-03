<script>
import BannerMain from "~/components/PageContactLens/BannerMain";
import BannerHotSearch from "~/components/PageContactLens/BannerHotSearch";
import BannerCate from "~/components/PageContactLens/BannerCate";
import BannerBrand from "~/components/PageContactLens/BannerBrand";
import BannerHot from "~/components/PageContactLens/BannerHot";
import BannerEvent from "~/components/PageContactLens/BannerEvent";
import BannerNotification from "~/components/BannerNotification";







export default {
  components: {
    BannerMain,
    BannerHotSearch,
    BannerCate,
    BannerHot,
    BannerEvent,
    BannerNotification
  },
};
</script>
<template>
  <div class="reset-page-padding-top">
    <div class="container">
      <BannerMain></BannerMain>
      <BannerHotSearch></BannerHotSearch>
      <BannerCate></BannerCate>
      <BannerBrand></BannerBrand>
      <BannerHot></BannerHot>
      <BannerEvent></BannerEvent>
      <BannerNotification></BannerNotification>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.text {
  color: $grey-color;
}
</style>
