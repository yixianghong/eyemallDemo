<script>
import BannerMain from "~/components/SunGlasses/BannerMain";
import BannerHotSearch from "~/components/SunGlasses/BannerHotSearch";
import BannerStyle from "~/components/SunGlasses/BannerStyle";
import BannerHot from "~/components/SunGlasses/BannerHot";
import BannerEvent from "~/components/SunGlasses/BannerEvent";
import BannerNotification from "~/components/BannerNotification";



export default {
  components: {
    BannerMain,
    BannerHotSearch,
    BannerStyle,
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
      <BannerStyle></BannerStyle>
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
