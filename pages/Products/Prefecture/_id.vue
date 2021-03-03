<script>
import FilterPanel from '~/components/ProductsPrefecture/Filter'
import ProductList from '~/components/ProductsPrefecture/ProductList'

export default {
  components:{
    FilterPanel,
    ProductList
  }
}
</script>
<template>
<div class="container reset-page-padding-top">
     <div class="mb-4">
         <img src="~/assets/img/ProductsBanner/Products_BannerImg01.png" alt="">
     </div>
     <FilterPanel></FilterPanel>
     <ProductList></ProductList>
   
</div>
 
</template>

<style scoped>
img{
  width: 100%;
}
</style>