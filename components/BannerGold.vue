<script>
export default {};
</script>
<template>
  <div class="BannerBox">
    <div class="d-flex justify-content-center position-relative">
      <div class="text-center titleBox p-4">
        <p class="green-color font-weight-bold xl-text mb-1">定期配送</p>
        <p class="dark-grey-color font-weight-bold lg-text mb-2">大學葉黃素</p>
        <p class="medium-grey-color md-text mb-0">訂購即享更多好康優惠</p>
      </div>
    </div>
    <b-row>
      <b-col cols="6" class="pr-1">
        <img src="~/assets/img/BannerGold/GoldBanner_img01.png" alt="" />
      </b-col>
      <b-col cols="6" class="pl-1">
        <b-row class="flex-column">
          <b-col cols="12"
            ><img src="~/assets/img/BannerGold/GoldBanner_img02.png" alt=""
          /></b-col>
          <b-col cols="12">
            <b-row>
              <b-col cols="4" class="pr-1">
                <b-card
                header-class="p-4"
                  no-body
                  img-src="~/assets/img/BannerGold/GoldBanner_img03.png"
                  img-alt="Card image"
                  img-top
                  img-width="149"
                  img-height="175"
                >
                  <b-button href="#" variant="purple" class="white-color">金晶明-銀髮族  ></b-button>
                </b-card>
              </b-col>
              <b-col cols="4" class="pl-1 pr-1">
                <b-card
                  no-body
                  img-src="~/assets/img/BannerGold/GoldBanner_img04.png"
                  img-alt="Card image"
                  img-top
                  img-width="149"
                  img-height="175"
                >
                  <b-button href="#" variant="yellow" class="white-color">金晶明-銀髮族  ></b-button>
                </b-card>
              </b-col>
              <b-col cols="4" class="pl-1">
                <b-card
                  no-body
                  img-src="~/assets/img/BannerGold/GoldBanner_img05.png"
                  img-alt="Card image"
                  img-top
                  img-width="149"
                  img-height="175"
                >
                  <b-button href="#" variant="lutein-green" class="white-color">金晶明-銀髮族  ></b-button>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<style lang="scss" scoped>

.BannerBox {
  .row {
    img {
      width: 100%;
    }
  }

  .card {
    @include card-border-radius-style;

    .card-img-top{
        padding: 25px 5px 25px 5px;

        &img{
            width: 149px;
            height: 110px;
        }
    }
  }
}
</style>
