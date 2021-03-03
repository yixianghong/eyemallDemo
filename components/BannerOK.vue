<script>
export default {};
</script>
<template>
  <div class="BannerBox">
    <div class="d-flex justify-content-center position-relative">
      <div class="text-center titleBox p-4">
        <p class="dark-grey-color xl-text mb-1 font-weight-bold">光學眼鏡</p>
        <p class="medium-grey-color md-text mb-0">訂購即享更多好康優惠</p>
      </div>
    </div>
    <div>
      <b-row>
        <b-col class="flex-column" cols="3"> 
            <div>
                <img src="~/assets/img/BannerOK/OKBanner_img02.png" alt="">
            </div>
            <div>
                <p class="font-weight-bold xl-text mt-2 mb-1">秋天季節</p>
                <p class="mb-0 font-weight-bold dark-grey-color xl-text">
                    <span class="green-color xxxl-text">復古</span>
                    光學眼鏡
                </p>
                <span>全場焦點 時尚來襲</span><br>
                <p class="mt-5 dark-grey-color">部好器以合家起黃權積相現旅處在一對全官如，以發年多</p>
            </div>
        </b-col>
        <b-col cols="9">
          <b-row class="flex-wrap">
            <b-col cols="4" v-for="(item, index) in 6" :key="index">
              <b-card
                class="border-0"
                header-class="p-4"
                no-body
                img-src="~/assets/img/BannerOK/OKBanner_img01.png"
                img-alt="Card image"
                img-top
                img-width="149"
                img-height="175"
              >
                <div class="p-3">
                  <div>
                    <p class="dark-grey-color mb-2">
                      A-AIMI潮流雷朋款飛行員5806
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
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
    <b-col lg="4" class="mt-5 ml-auto mr-auto">
        <b-button class="w-100 dark-grey-border dark-grey-color pt-2 pb-2 border-radius-10" 
        variant="white">查看更多</b-button>
    </b-col>
  </div>
</template>

<style lang="scss" scoped>
img{
         max-width: 100%;
}
.card-img-top {
  object-fit: contain;
}
</style>