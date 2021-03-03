<script>
import BannerMain from "../components/BannerMain";
import BannerGold from "../components/BannerGold";
import BannerHot from "../components/BannerHot";
import NewArrival from "../components/NewArrival";
import BannerBlock from "../components/BannerBlock";
import BannerCL from "../components/BannerCL";
import BannerOK from "../components/BannerOK";
import BannerSun from "../components/BannerSun";
import BannerFeature from "../components/BannerFeature";
import BannerGoldInfo from "../components/BannerGoldInfo";
import BannerOther from "../components/BannerOther";
import BannerStore from "../components/BannerStore";
import BannerCommercial from "../components/BannerCommercial";
import BannerNotification from "../components/BannerNotification";










export default {
  components: {
    BannerMain,
    BannerGold,
    BannerHot,
    BannerBlock,
    BannerCL,
    BannerOK,
    BannerSun,
    BannerFeature,
    BannerGoldInfo,
    BannerOther,
    BannerStore,
    BannerCommercial,
    BannerNotification
  },
};
</script>
<template>
  <div class="reset-page-padding-top">
    <div class="container">
      <BannerMain></BannerMain>
      <BannerGold></BannerGold>
      <BannerHot></BannerHot>
      <NewArrival></NewArrival>
    </div>
    <div class="container-fluid p-0 mt-4 mb-4">
        <BannerBlock></BannerBlock>
    </div>
    <div class="container">
      <BannerCL></BannerCL>
      <BannerOK></BannerOK>
      <BannerSun></BannerSun>
      <BannerFeature></BannerFeature>
      <BannerGoldInfo></BannerGoldInfo>
      <BannerOther></BannerOther>
    </div>
    <div class="container-fluid p-0 mt-4 mb-4">
        <BannerStore></BannerStore>
    </div>
    <div class="container">
        <BannerCommercial></BannerCommercial>
        <BannerNotification></BannerNotification>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.text {
  color: $grey-color;
}
</style>
