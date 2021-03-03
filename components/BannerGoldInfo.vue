<script>
export default {};
</script>
<template>
  <div class="BannerBox">
    <div class="d-flex justify-content-center position-relative">
      <div class="text-center titleBox p-4">
        <p class="dark-grey-color xl-text mb-1 font-weight-bold">大學葉黃素</p>
        <p class="medium-grey-color md-text mb-0">訂購即享更多好康優惠</p>
      </div>
    </div>
    <div>
      <b-row>
        <b-col class="flex-column" cols="4">
          <b-card
            img-src="~/assets/img/BannerGoldInfo/GoldInfoBanner_img01.png"
            img-alt="Card image"
            img-bottom
            class="border-0"
          >
            <div>
             <p class="font-weight-bold xl-text mb-0">金寶明<span class="md-text">(120粒)</span></p>
             <p class="font-weight-bold lutein-purple-color xxl-text">黑醋栗+葉黃素</p>
             <span>金寶明的脆皮軟糖經過18道手續精製完成，特殊糖衣技術，讓營養完整保留。</span>
            </div>
          </b-card>
        </b-col>
        <b-col class="flex-column" cols="4">
          <b-card
            img-src="~/assets/img/BannerGoldInfo/GoldInfoBanner_img02.png"
            img-alt="Card image"
            img-top
            class="border-0"
          >
            <div>
              <p class="font-weight-bold xl-text mb-0">金晶明<span class="md-text">(120粒)</span></p>
             <p class="font-weight-bold green-color xxl-text">山桑子+葉黃素</p>
             <span>金愛爾明的特殊微粒劑設計能避免珍貴成分被破壞，適合天天補充。</span>
            </div>
          </b-card>
        </b-col>
        <b-col class="flex-column" cols="4">
          <b-card
            img-src="~/assets/img/BannerGoldInfo/GoldInfoBanner_img03.png"
            img-alt="Card image"
            img-bottom
            class="border-0"
          >
            <div>
              <p class="font-weight-bold xl-text mb-0">金愛爾明<span class="md-text">(120粒)</span></p>
             <p class="font-weight-bold yellow-color xxl-text">山桑子+葉黃素</p>
             <span>金愛爾明的特殊微粒劑設計能避免珍貴成分被破壞，適合天天補充。</span>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-img-top {
  object-fit: contain;
}
</style>