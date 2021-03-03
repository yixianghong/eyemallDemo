<script>
export default {
  data() {
    return {
      //   一頁SHOW 幾個
      perPage: 12,
      currentPage: 1,
      ProductListItem:[
          {
              title:'A-AIMI潮流雷朋款飛行員墨鏡潮流雷朋款飛行員5806',
              tag:['AIMI'],
              fixPrice:'2990',
              Price:'1250',
              img:'BannerOK/OKBanner_img01'
          },
          {
              title:'A-AIMI潮流雷朋款飛行員墨鏡潮流雷朋款飛行員5806',
              tag:['AIMI'],
              fixPrice:'2990',
              Price:'1250',
              img:'BannerOK/OKBanner_img01'
          },
          {
              title:'A-AIMI潮流雷朋款飛行員墨鏡潮流雷朋款飛行員5806',
              tag:['AIMI'],
              fixPrice:'2990',
              Price:'1250',
              img:'BannerOK/OKBanner_img01'
          },
          {
              title:'A-AIMI潮流雷朋款飛行員墨鏡潮流雷朋款飛行員5806',
              tag:['AIMI'],
              fixPrice:'2990',
              Price:'1250',
              img:'BannerOK/OKBanner_img01'
          },
          {
              title:'A-AIMI潮流雷朋款飛行員墨鏡潮流雷朋款飛行員5806',
              tag:['AIMI'],
              fixPrice:'2990',
              Price:'1250',
              img:'BannerOK/OKBanner_img01'
          },
          {
              title:'A-AIMI潮流雷朋款飛行員墨鏡潮流雷朋款飛行員5806',
              tag:['AIMI'],
              fixPrice:'2990',
              Price:'1250',
              img:'BannerOK/OKBanner_img01'
          },
          {
              title:'A-AIMI潮流雷朋款飛行員墨鏡潮流雷朋款飛行員5806',
              tag:['AIMI'],
              fixPrice:'2990',
              Price:'1250',
              img:'BannerOK/OKBanner_img01'
          },
          {
              title:'A-AIMI潮流雷朋款飛行員墨鏡潮流雷朋款飛行員5806',
              tag:['AIMI'],
              fixPrice:'2990',
              Price:'1250',
              img:'BannerOK/OKBanner_img01'
          },
          {
              title:'A-AIMI潮流雷朋款飛行員墨鏡潮流雷朋款飛行員5806',
              tag:['AIMI'],
              fixPrice:'2990',
              Price:'1250',
              img:'BannerOK/OKBanner_img01'
          },
          {
              title:'A-AIMI潮流雷朋款飛行員墨鏡潮流雷朋款飛行員5806',
              tag:['AIMI'],
              fixPrice:'2990',
              Price:'1250',
              img:'BannerOK/OKBanner_img01'
          },
          {
              title:'A-AIMI潮流雷朋款飛行員墨鏡潮流雷朋款飛行員5806',
              tag:['AIMI'],
              fixPrice:'2990',
              Price:'1250',
              img:'BannerOK/OKBanner_img01'
          },
          {
              title:'A-AIMI潮流雷朋款飛行員墨鏡潮流雷朋款飛行員5806',
              tag:['AIMI'],
              fixPrice:'2990',
              Price:'1250',
              img:'BannerOK/OKBanner_img01'
          },
          {
              title:'A-AIMI潮流雷朋款飛行員墨鏡潮流雷朋款飛行員5806',
              tag:['AIMI'],
              fixPrice:'2390',
              Price:'1250',
              img:'BannerOK/OKBanner_img01'
          },
          {
              title:'A-AIMI潮流雷朋款飛行員墨鏡潮流雷朋款飛行員5806',
              tag:['AIMI'],
              fixPrice:'2190',
              Price:'1250',
              img:'BannerOK/OKBanner_img01'
          },
      ]
    };
  },
};
</script>
<template>
  <div>
    <div
      class="d-flex mb-4 justify-content-between pt-4 pb-4 pl-3 pr-3 background-normal"
    >
      <div>商品總計<span class="xl-text green-color"> {{ProductListItem.length}} </span>項</div>
      <div class="d-flex col-4 justify-content-between">
        <div>綜合</div>
        <div>新品</div>
        <div>價格由高至低</div>
        <div>價格由低至高</div>
      </div>
    </div>
    <div class="mb-4">
      <b-row>
        <b-col cols="3" 
                v-for="(item, index) in ProductListItem" 
                :key="index"
                v-show="index >= (currentPage * perPage) - perPage && index <= (currentPage * perPage) - 1"
        >
        <nuxt-link to="/Products/GetOne/1">
          <b-card
            class="border-0"
            header-class="pt-0 pb-0"
            no-body
            img-alt="Card image"
            img-top
            img-width="auto"
            img-height="auto"
          >
            <template #header>
              <b-card-img
                :src="require(`~/assets/img/${item.img}.png`)"
                alt="Image"
              ></b-card-img>
            </template>
            <div class="p-3">
              <div>
                <p class="dark-grey-color mb-2 font-weight-bold">
                  {{item.title}}
                </p>
              </div>
              <div class="d-flex justify-content-between align-items-end">
                <div>
                  <p class="mb-0 sm-text" v-for="(tags,tagIndex) in item.tag" :key="tagIndex">{{tags}}</p>
                  <p class="mb-0">
                    <span class="red-color lg-text pr-2">${{item.fixPrice}}</span
                    ><s><sub>${{item.Price}}</sub></s>
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
        </nuxt-link>
        </b-col>
      </b-row>
    </div>
    <b-pagination
        v-model="currentPage"
        :total-rows="ProductListItem.length"
        :per-page="perPage"
        next-class="green-color"
        prev-class="green-color"
        last-class="green-color"
        page-class="green-color"
        class="justify-content-center"
        pageLinkClass="green-color"
      ></b-pagination>
  </div>
</template>