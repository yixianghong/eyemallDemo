

<script>
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
Vue.use(BootstrapVue, {});

Vue.use(BootstrapVueIcons, {});

export default {
  props: ["size"],
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    countAdd() {
      this.count += 1;
    },
    countDash() {
      this.count -= 1;
      if (this.count <= 1) {
        this.count = 1;
      }
    },
  },
  components: {
    BootstrapVue,
    BootstrapVueIcons,
  },
};
</script>

<template>
  <div class="d-flex justify-content-between align-items-center">
    <slot name="title"></slot>
    <div class="d-flex">
      <div :class="['countBox',{'sm' : size == 'sm','xl': size == 'xl'}]" @click="countDash">
        <b-icon icon="dash"></b-icon>
      </div>
      <input :class="['countNumberBox',{'sm' : size == 'sm','xl': size == 'xl'}]" type="number" pattern="/[0-9]/" maxlength="2" v-model="count" />
      <div :class="['countBox',{'sm' : size == 'sm','xl': size == 'xl'}]" @click="countAdd">
        <b-icon icon="plus"></b-icon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.countNumberBox {
  border-radius: 2px;
  background: $white-color;
  border: 0px;
  text-align: center;

  @include Vertically;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &.sm {
    width: 30px;
    height: 25px;
  }

  &.xl {
    width: 57px;
    height: 40px;
  }
}

.countBox {
  border-radius: 2px;
  cursor: pointer;
  background: $pale-grey-color;

  @include Vertically;

  &.sm {
    width: 30px;
    height: 25px;
  }

  &.xl {
    width: 47px;
    height: 40px;
  }
}
</style>