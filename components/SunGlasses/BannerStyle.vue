
<script>
export default {
  data() {
    return {
      cardListRow1: [
        {
          id: 1,
          src: "SunGlassesPage_img03",
          icon: "OpticalGlasses_icon01",
          background: "light-brown-color",
          title: "",
          content: "濾藍光",
        },
        {
          id: 2,
          src: "SunGlassesPage_img04",
          icon: "OpticalGlasses_icon01",
          background: "special-dark-color",
          title: "",
          content: "半框",
        },
        {
          id: 3,
          src: "SunGlassesPage_img05",
          icon: "OpticalGlasses_icon01",
          background: "green-apple-color",
          title: "",
          content: "眉框",
        },
        {
          id: 4,
          src: "SunGlassesPage_img06",
          icon: "OpticalGlasses_icon01",
          background: "light-red-color",
          title: "",
          content: "圓框",
        },
      ],
      cardListRow2: [
        {
          id: 1,
          src: "SunGlassesPage_img07",
          icon: "OpticalGlasses_icon01",
          background: "light-green-apple-color",
          title: "",
          content: "橢圓框",
        },
        {
          id: 2,
          src: "SunGlassesPage_img08",
          icon: "OpticalGlasses_icon01",
          background: "dark-green-apple-color",
          title: "",
          content: "貓眼框",
        },
        {
          id: 3,
          src: "SunGlassesPage_img09",
          icon: "OpticalGlasses_icon01",
          background: "block-color",
          title: "",
          content: "威靈頓框",
        },
      ],
      cardListRow3: [
        {
          id: 1,
          src: "SunGlassesPage_img10",
          icon: "OpticalGlasses_icon01",
          background: "little-light-green-color",
          title: "",
          content: "波士頓框",
        },
        {
          id: 2,
          src: "SunGlassesPage_img11",
          icon: "OpticalGlasses_icon01",
          background: "dark-skin-color",
          title: "",
          content: "其他框",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="BannerBox">
    <div class="d-flex justify-content-center position-relative">
      <div class="text-center titleBox p-4">
        <p class="dark-grey-color font-weight-bold xl-text mb-1">依框型挑選</p>
        <p class="medium-grey-color md-text mb-0">訂購即享更多好康優惠</p>
      </div>
    </div>
    <b-row class="justify-content-center">
      <b-col cols="12" class="mb-5">
        <b-row>
          <b-col cols="3" v-for="(item, index) in cardListRow1" :key="index">
            <b-card
              header-class="p-4"
              no-body
              class="border-0"
              :img-src="require(`~/assets/img/PageSunGlasses/${item.src}.png`)"
              img-alt="Card image"
              img-top
              img-width="250"
              img-height="250"
              :bg-variant="item.background"
            >
              <div class="p-3 white-color text-center">
                <div
                  class="d-flex align-items-center justify-content-center mb-2"
                  style="height: 37px"
                >
                  <img
                    :src="
                      require(`~/assets/img/OpticalGlasses/${item.icon}.svg`)
                    "
                    alt=""
                  />
                </div>
                <span>{{item.content}}</span>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="8" class="mb-5">
        <b-row>
          <b-col cols="4" v-for="(item, index) in cardListRow2" :key="index">
            <b-card
              header-class="p-4"
              no-body
              class="border-0"
              :img-src="require(`~/assets/img/PageSunGlasses/${item.src}.png`)"
              img-alt="Card image"
              img-top
              img-width="250"
              img-height="250"
              :bg-variant="item.background"
            >
              <div class="p-3 white-color text-center">
                <div
                  class="d-flex align-items-center justify-content-center mb-2"
                  style="height: 37px"
                >
                  <img
                    :src="
                      require(`~/assets/img/OpticalGlasses/${item.icon}.svg`)
                    "
                    alt=""
                  />
                </div>
                 <span>{{item.content}}</span>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="6" class="mb-5">
        <b-row>
          <b-col cols="6" v-for="(item, index) in cardListRow3" :key="index">
            <b-card
              header-class="p-4"
              class="border-0"
              no-body
              :img-src="require(`~/assets/img/PageSunGlasses/${item.src}.png`)"
              img-alt="Card image"
              img-top
              img-width="250"
              img-height="250"
              :bg-variant="item.background"
            >
              <div class="p-3 white-color text-center">
                <div
                  class="d-flex align-items-center justify-content-center mb-2"
                  style="height: 37px"
                >
                  <img
                    :src="
                      require(`~/assets/img/OpticalGlasses/${item.icon}.svg`)
                    "
                    alt=""
                  />
                </div>
                 <span>{{item.content}}</span>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>


<style lang="scss" scoped>
.card {
  @include card-border-radius-style;
  max-width:250px;
}
</style>