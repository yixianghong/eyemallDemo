<script>
import CountBox from "~/components/CountBox";

export default {
  data() {
    return {
      cartList: [
        {
          id: 1,
          name: "定期配送",
          active: true,
        },
        {
          id: 2,
          name: "配送車",
          active: false,
        },
        {
          id: 3,
          name: "購物車",
          active: false,
        },
        {
          id: 4,
          name: "直送車",
          active: false,
        },
      ],
    };
  },
};
</script>
<template>
  <div class="container reset-page-padding-top">
    <div class="layoutGrey"></div>
    <div
      class="circleStepContainer ml-auto mr-auto mt-4 mb-4 d-flex justify-content-between"
    >
      <div class="col text-center circleStepWrap active">
        <div class="circleStep">1</div>
        <span class="circleText">確認配送清單</span>
      </div>
      <div class="col text-center circleStepWrap">
        <div class="circleStep">2</div>
        <span class="circleText">付款及取貨方式</span>
      </div>
      <div class="col text-center circleStepWrap">
        <div class="circleStep">3</div>
        <span class="circleText">資料填寫</span>
      </div>
      <div class="col text-center circleStepWrap">
        <div class="circleStep">4</div>
        <span class="circleText">確認訂單</span>
      </div>
      <div class="col text-center circleStepWrap">
        <div class="circleStep">5</div>
        <span class="circleText">結帳</span>
      </div>
    </div>
    <b-row>
      <b-col cols="9">
        <b-tabs
          no-nav-style
          content-class="p-4 background-white"
          nav-class="justify-content-start p-2 background-white border-radius-10"
          active-nav-item-class="tabActive"
          nav-wrapper-class="nav-wrapper"
        >
          <b-tab v-for="item in cartList" :key="item.id" :active="item.active">
            <template #title>
              <span class="d-flex align-items-center">
                {{ item.name }}
                <b-badge class="badge ml-2" pill>1</b-badge>
              </span>
            </template>
            <b-row class="background-white little-sm-text cartsTitle">
              <b-col cols="4">產品名稱</b-col>
              <b-col cols>價格</b-col>
              <b-col cols="2">左眼-數量</b-col>
              <b-col cols="2">右眼-數量</b-col>
              <b-col cols>小計</b-col>
              <b-col cols>操作</b-col>
            </b-row>
            <b-row class="background-white little-sm-text cartsTitle mt-3">
              <b-col cols="4" class="d-flex align-items-center">
                <div>
                  <img
                    src="~@/assets/img/PageCarts/PageCarts_img01.png"
                    alt=""
                  />
                </div>
                <div class="ml-2">
                  RAY_BAN【兒童太陽眼鏡】WAYFARER系列 水銀鏡面9052S-100S6Q 黑
                </div>
              </b-col>
              <b-col cols class="d-flex align-items-center">$ 2900</b-col>
              <b-col cols="2" class="d-flex align-items-center"><CountBox ref="leftEye" size="sm"></CountBox></b-col>
              <b-col cols="2" class="d-flex align-items-center"><CountBox ref="rightEye" size="sm"></CountBox></b-col>
              <b-col cols class="d-flex align-items-center">$ 2900</b-col>
              <b-col cols class="d-flex align-items-center">
                <b-icon icon="trash"></b-icon>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </b-col>
      <b-col cols="3" class="background-white p-3 border-radius-10">
        <div class="text-center mb-3">
          <p class="lg-text mb-2">配送車-總金額</p> 
          <p class="little-sm-text mb-2 medium-grey-color">共1項商品</p> 
        </div>
        <div class="d-flex justify-content-between">
          <span>商品金額</span>
          <span>$ 1000</span>
        </div>
        <div class="d-flex justify-content-between">
          <span>點數折扣</span>
          <span>-$ 800</span>
        </div>
        <hr>
         <div class="d-flex justify-content-between">
          <span>小計</span>
          <span>$ 200</span>
        </div>
        <div class="d-flex justify-content-between">
          <span>運費1111111</span>
          <span>$ 80</span>
        </div>
        <div class="d-flex justify-content-between">
          <span class="red-color">總金額</span>
          <span class="red-color">$ 280</span>
        </div>
        <div class="d-flex justify-content-end">
          <span class="xs-text">(再消費$800即可免運費)</span>
        </div>
        <hr>
          <div class="d-flex justify-content-between">
            <span>使用點數折抵</span>
            <span><b-icon icon="chevron-down"></b-icon></span>
          </div>
        <hr>
         <div class="d-flex justify-content-between align-items-end mb-3">
            <span class="pb-1">定期配送-總金額</span>
            <span class="red-color">NT $ <span class="xl-text font-weight-bold">2977</span></span>
          </div>
             <b-button pill variant="success" class="w-100">下一步</b-button>
      </b-col>
    </b-row>
  </div>
</template>
<style lang="scss" scoped>


.circleStepContainer {
  position: relative;
  width: 725px;

  &:after {
    content: "";
    position: absolute;
    width: 80%;
    height: 1px;
    background: #c4c4c4;
    top: 26%;
    left: 10%;
    z-index: -1;
  }

  .circleStepWrap {
    .circleStep {
      width: 40px;
      height: 40px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 10px;
      border-radius: 50%;
      color: $white-color;
      background: $grey-color;

      @include Vertically;
    }

    .circleText {
      color: $grey-color;
    }

    &.active {
      .circleStep {
        background: $yellow-color;
      }

      .circleText {
        color: $dark-grey-color;
      }
    }
  }
}

.badge {
  border-radius: 50%;
  background: $bg-color;
  color: $grey-color;
}

.tabActive {
  .badge {
    background: $green-color;
    color: $white-color;
  }
}

.nav-wrapper {
  border-bottom: 1px solid $light-grey-color;
}
</style>