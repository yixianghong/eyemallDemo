<script>
export default {
  data() {
    return {
      StoreList: {
        city: [
          {
            id: 1,
            name: "台北",
            active:true
          },
          {
            id: 2,
            name: "新北",
            active:false
          },
          {
            id: 3,
            name: "桃竹苗",
            active:false
          },
          {
            id: 4,
            name: "台中",
            active:false
          },
          {
            id: 5,
            name: "嘉南",
            active:false
          },
          {
            id: 6,
            name: "花蓮",
            active:false
          },
          {
            id: 7,
            name: "澎湖",
            active:false
          },
        ],
        info: [
          {
            id: 1,
            name: "內湖大學眼鏡",
            address:"台北市內湖區成功路買段139號",
            phone:"02-2793-6311"
          },
          {
            id: 1,
            name: "內湖大學眼鏡",
            address:"台北市內湖區成功路買段139號",
            phone:"02-2793-6311"
          },
          {
            id: 1,
            name: "內湖大學眼鏡",
            address:"台北市內湖區成功路買段139號",
            phone:"02-2793-6311"
          },
          {
            id: 1,
            name: "內湖大學眼鏡",
            address:"台北市內湖區成功路買段139號",
            phone:"02-2793-6311"
          },
          {
            id: 1,
            name: "內湖大學眼鏡",
            address:"台北市內湖區成功路買段139號",
            phone:"02-2793-6311"
          },
          {
            id: 1,
            name: "內湖大學眼鏡",
            address:"台北市內湖區成功路買段139號",
            phone:"02-2793-6311"
          },
          {
            id: 1,
            name: "內湖大學眼鏡",
            address:"台北市內湖區成功路買段139號",
            phone:"02-2793-6311"
          },
        ],
      },
    };
  },
};
</script>
<template>
  <div class="container reset-page-padding-top">
    <div class="layoutGrey"></div>
    <h4 class="font-weight-bold text-center mt-4">門市資訊</h4>
    <hr />
    <div>
      <b-tabs
        no-nav-style
        content-class="mt-3 p-4 background-white"
        nav-class="justify-content-center p-2 background-white border-radius-10"
        active-nav-item-class="tabActive"
      >
        <b-tab 
        :title="item.name" v-for="item in StoreList.city" 
        :key="item.id" 
        :active="item.active"
        >
          <b-row>
            <b-col cols="5">
              <img src="~/assets/img/PageStore/PageStore_img01.png" alt="" />
            </b-col>
            <b-col cols="7">
              <div class="d-flex justify-content-between">
                <h4 class="green-color font-weight-bold mb-4">內湖大學眼科</h4>
                <div
                  class="openGoolgeMap little-sm-text d-flex justify-content-center align-items-center"
                >
                  <svg
                    width="12"
                    height="17"
                    viewBox="0 0 12 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.2426 1.85024C9.19353 0.745745 7.79318 0.0896315 6.3118 0.0085278C4.83042 -0.0725759 3.37301 0.427079 2.22087 1.41106C1.06873 2.39504 0.303529 3.79359 0.0729496 5.33679C-0.15763 6.87998 0.16276 8.45843 0.972283 9.76748L5.14355 16.5113C5.23637 16.6613 5.36329 16.7846 5.5128 16.87C5.66231 16.9553 5.82968 17 5.99974 17C6.1698 17 6.33718 16.9553 6.48669 16.87C6.6362 16.7846 6.76312 16.6613 6.85594 16.5113L11.0273 9.76748C11.7785 8.55315 12.1104 7.1038 11.9676 5.66236C11.8247 4.22093 11.2157 2.87502 10.2426 1.85024ZM6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
                      fill="#63C856"
                    />
                  </svg>
                  <span class="ml-1">開啟地圖</span>
                </div>
              </div>
              <div class="d-flex align-items-center mb-2">
                <svg
                  class="mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.2426 3.85024C13.1935 2.74574 11.7932 2.08963 10.3118 2.00853C8.83042 1.92742 7.37301 2.42708 6.22087 3.41106C5.06873 4.39504 4.30353 5.79359 4.07295 7.33679C3.84237 8.87998 4.16276 10.4584 4.97228 11.7675L9.14355 18.5113C9.23637 18.6613 9.36329 18.7846 9.5128 18.87C9.66231 18.9553 9.82968 19 9.99974 19C10.1698 19 10.3372 18.9553 10.4867 18.87C10.6362 18.7846 10.7631 18.6613 10.8559 18.5113L15.0273 11.7675C15.7785 10.5531 16.1104 9.1038 15.9676 7.66236C15.8247 6.22093 15.2157 4.87502 14.2426 3.85024ZM10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11Z"
                    fill="#63C856"
                  />
                </svg>
                <span class="dark-grey-color">台北市內湖區成功路買段139號</span>
              </div>
              <div class="d-flex align-items-center mb-4">
                <svg
                  class="mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0005 12.5283L13.0338 11.4946C13.173 11.3571 13.3491 11.263 13.5407 11.2236C13.7323 11.1843 13.9312 11.2015 14.1133 11.2731L15.3726 11.7761C15.5566 11.8508 15.7143 11.9783 15.826 12.1426C15.9376 12.3068 15.9982 12.5005 16 12.6991V15.0065C15.9989 15.1416 15.9705 15.2751 15.9165 15.399C15.8625 15.5228 15.784 15.6345 15.6858 15.7272C15.5875 15.8199 15.4715 15.8917 15.3448 15.9384C15.218 15.985 15.0831 16.0056 14.9482 15.9987C6.12352 15.4495 4.34289 7.97343 4.00614 5.11221C3.99051 4.9717 4.00479 4.82947 4.04805 4.69489C4.09131 4.5603 4.16256 4.4364 4.25712 4.33134C4.35168 4.22628 4.46741 4.14244 4.59668 4.08533C4.72596 4.02823 4.86585 3.99915 5.00717 4.00002H7.23526C7.43408 4.00061 7.62819 4.06069 7.7926 4.17254C7.95702 4.28438 8.08422 4.44288 8.15786 4.62764L8.66068 5.88751C8.73461 6.0689 8.75347 6.26807 8.71491 6.46013C8.67635 6.65218 8.58208 6.82862 8.44387 6.96739L7.41055 8.00112C7.41055 8.00112 8.00563 12.0299 12.0005 12.5283Z"
                    fill="#C4C4C4"
                  />
                </svg>
                <span class="little-sm-text">02-2793-6311</span>
              </div>
              <b-row>
                <b-col cols="4">
                  <p>營業時間︰</p>
                  <div class="d-flex justify-content-between">
                    <span class="mr-2">周一到五</span>
                    <span>09:00-21:30</span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <span class="mr-2">周六</span>
                    <span>11:00-21:00</span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <span class="mr-2">周日</span>
                    <span>11:00-21:00</span>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>



<style lang="scss" scoped>
img {
  max-width: 100%;
}
.openGoolgeMap {
  width: 93px;
  height: 30px;
  background: #63c85625;
  border-radius: 10px;
  color: $green-color;
}
</style>