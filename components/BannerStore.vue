<script>
export default {};
</script>
<template>
  <div class="blockBanner BannerBox pt-5 d-flex align-items-center">
    <div class="container">
      <b-row>
        <b-col cols="6" class="">
          <div>
            <p class="xl-text mb-2 font-weight-bold">門市據點</p>
            <p>分佈全台地區 為您服務</p>
          </div>
          <div>
            <b-row>
              <b-col lg="6" class="mt-5">
                <b-button
                  class="w-100 green-border white-color pt-2 pb-2 border-radius-10"
                  variant="green"
                  >門市一覽</b-button
                >
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col cols="6">
          <img src="~/assets/img/BannerStore/StoreBanner_img01.png" alt="" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.blockBanner {
  width: 100%;
  height: 572px;
  background: $bg-color;

  .titleBox {
    background: $bg-color;
  }

  img {
    width: 100%;
  }
}
</style>