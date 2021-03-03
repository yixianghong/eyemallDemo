

<script>
export default {};
</script>
<template>
  <div class="BannerBox">
    <div class="notificationInfo p-5">
      <b-row>
        <b-col cols="9 pl-0">
          <p class="font-weight-bold xl-text mb-5">大學眼鏡關心您</p>
          <p>
            配戴一般隱形眼鏡須經眼科醫師驗光配鏡取得處方，或經驗光人員驗光配鏡取得配鏡單，並定期接受眼科醫師追蹤檢查。本器材不得逾中文仿單建議之最長配戴時數、不得重覆配戴，於就寢前務必取下，以免感染或潰傷。
          </p>
          <p>如有不適，應立即就醫。</p>
        </b-col>
        <b-col cols="3">
          <img src="~/assets/img/BannerCommercial/commercial_img03.png" alt="" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<style lang="scss" scoped>
img {
  width: 100%;
}
.notificationInfo {
  background: $light-grey-color;
  @include card-border-radius-style;

  img {
    width: auto;
  }
}
</style>