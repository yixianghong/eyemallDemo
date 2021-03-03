<script>
export default {
    data(){
        return{
            tagList:[
                {
                    id:1,
                    name:'日拋',
                    url:'#'
                },
                {
                    id:2,
                    name:'月拋',
                    url:'#'
                },
                {
                    id:3,
                    name:'含水量66%',
                    url:'#'
                },
                {
                    id:4,
                    name:'透氣',
                    url:'#'
                },
                {
                    id:5,
                    name:'彩片',
                    url:'#'
                },
                {
                    id:6,
                    name:'自然',
                    url:'#'
                },
                {
                    id:7,
                    name:'焦糖色',
                    url:'#'
                },
                {
                    id:8,
                    name:'直徑14mm',
                    url:'#'
                },
                {
                    id:9,
                    name:'彩片',
                    url:'#'
                },
                {
                    id:10,
                    name:'自然',
                    url:'#'
                },
                {
                    id:11,
                    name:'焦糖色',
                    url:'#'
                },
                {
                    id:12,
                    name:'直徑14mm',
                    url:'#'
                },
            ]
        }
    }
};
</script>
<template>
  <div class="BannerBox">
    <div class="d-flex justify-content-center position-relative">
      <div class="text-center titleBox p-4">
        <p class="dark-grey-color font-weight-bold xl-text mb-1">
          隱形眼鏡-熱門搜尋
        </p>
        <p class="medium-grey-color md-text mb-0">訂購即享更多好康優惠</p>
      </div>
    </div>
    <b-row class="align-items-center">
      <b-col cols="3">
        <img
          src="~/assets/img/PageContactLens/ContactLensPage_img02.png"
          alt=""
        />
      </b-col>
      <b-col cols="3">
        <div class="hotList d-flex align-items-center justify-content-center">
          <div class="square yellow xl-text">1</div>
          <div class="text-center">
            <p class="lg-text font-weight-bold">
              <svg
                width="29"
                height="25"
                viewBox="0 0 29 25"
                class="pr-1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5705 21.2693H4.9998C4.60696 21.2693 4.28555 21.6111 4.28555 22.0289V23.5481C4.28555 23.9659 4.60696 24.3077 4.9998 24.3077H23.5705C23.9634 24.3077 24.2848 23.9659 24.2848 23.5481V22.0289C24.2848 21.6111 23.9634 21.2693 23.5705 21.2693ZM26.4275 6.07693C25.2446 6.07693 24.2848 7.09767 24.2848 8.35579C24.2848 8.69287 24.3562 9.00621 24.4812 9.29581L21.2492 11.3563C20.5617 11.7931 19.6733 11.5462 19.276 10.8055L15.6378 4.03546C16.1154 3.61768 16.4279 2.99099 16.4279 2.27885C16.4279 1.02074 15.4681 0 14.2852 0C13.1022 0 12.1424 1.02074 12.1424 2.27885C12.1424 2.99099 12.4549 3.61768 12.9325 4.03546L9.29428 10.8055C8.89697 11.5462 8.00415 11.7931 7.32114 11.3563L4.09359 9.29581C4.21412 9.01095 4.29001 8.69287 4.29001 8.35579C4.29001 7.09767 3.33023 6.07693 2.14724 6.07693C0.964248 6.07693 0 7.09767 0 8.35579C0 9.6139 0.959784 10.6346 2.14277 10.6346C2.25884 10.6346 2.37491 10.6156 2.48651 10.5967L5.71406 19.75H22.8563L26.0838 10.5967C26.1954 10.6156 26.3115 10.6346 26.4275 10.6346C27.6105 10.6346 28.5703 9.6139 28.5703 8.35579C28.5703 7.09767 27.6105 6.07693 26.4275 6.07693Z"
                  fill="#FFB636"
                />
              </svg>
              透明片
            </p>
            <span class="grey-color">共24個商品</span>
          </div>
        </div>
      </b-col>
      <b-col cols="3">
        <div class="hotList d-flex align-items-center justify-content-center">
          <div class="square grey xl-text">2</div>
          <div class="text-center">
            <p class="lg-text font-weight-bold">焦糖色</p>
            <span class="grey-color">共24個商品</span>
          </div>
        </div>
      </b-col>
      <b-col cols="3">
        <div class="hotList d-flex align-items-center justify-content-center">
          <div class="square brown xl-text">3</div>
          <div class="text-center">
            <p class="lg-text font-weight-bold">透明片</p>
            <span class="grey-color">共24個商品</span>
          </div>
        </div>
      </b-col>
    </b-row>
    <div class="d-flex justify-content-around mt-5">
        <b-button 
        pill 
        v-for="item in tagList"
        :key="item.id"
        variant="bg-color" 
        class="medium-grey-color">
        {{item.name}}
        </b-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
img{
        max-width: 100%;
}

.hotList {
  width: 220px;
  height: 220px;
  margin:0 auto;
  background: $light-grey-color;
  position: relative;
  @include card-border-radius-style;

  .square {
    position: absolute;
    text-align: center;
    width: 50px;
    height: 50px;
    border-radius: 0 0 10px 10px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    color: $white-color;
    font-weight: 500;
    line-height: 50px;

    &.yellow {
      background: $yellow-color;
    }

    &.grey {
      background: $grey-color;
    }

    &.brown {
      background: $brown-color;
    }
  }
}
</style>