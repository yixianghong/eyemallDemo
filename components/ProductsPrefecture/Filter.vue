<script>
export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      cate:['品牌','種類','配戴週期','顏色','直徑','含水量'],
      options: [
        { html: '<span class="green-color">【獨家】</span><span>威氏康</span>',text: "威氏康", value: "orange" },
        { text: "博士倫", value: "apple" },
        { text: "美若康", value: "pineapple" },
        { text: "嬌生", value: "grape" },
        { text: "海昌", value: "grape" },
        { text: "酷柏", value: "grape" },
        { text: "加美", value: "grape" },
        { text: "帝康", value: "grape" },
        { text: "美麗康", value: "grape" },
        { text: "愛能視", value: "grape" },
      ],
    };
  },
};
</script>
<template>
  <div id="Filter" class="mb-4">
    <b-form-group
    v-for="(cate,index) in cate" 
      :key="index"
      id="fieldset-horizontal"
      label-cols-md="2"
      content-cols-md="10"
      :label="cate"
      label-for="Brand"
      class="w-100 align-items-center pt-0 pb-0 mb-0 ml-0 mr-0"
      label-class="background-normal p-3"
    >
      <b-form-checkbox-group
        id="Brand"
        class="ml-3 pt-3 pb-3 checkboxBorderBottom"
        v-model="selected"
        :options="options"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>
  
  </div>
</template>
<style lang="scss" scoped>
.checkboxBorderBottom{
    border-bottom: 1px solid $light-grey-color;
}
</style>