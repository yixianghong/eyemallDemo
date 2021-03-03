<script>
export default {};
</script>

<template>
  <div class="d-flex pt-2 justify-content-between" style="width: 366px">
    <a href="" class="green-color">陳家明</a>
    <a href="" class="dark-grey-color">APP下載</a>
    <a href="" class="dark-grey-color">線上預約</a>
    <a href="" class="position-relative">
      <div class="position-absolute badgeStyle">1</div>
      <img src="~@/assets/icon/Vector.png" alt="">
      <!-- <svg
        width="24"
        height="28"
        viewBox="0 0 24 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5612 20.2137L22.561 20.2134C22.502 20.1478 22.4382 20.0786 22.3704 20.005C21.8795 19.4723 21.1802 18.7136 20.6012 17.5012C19.9407 16.1182 19.4499 14.1869 19.4499 11.317C19.4499 7.44572 16.833 4.36483 13.3109 3.60822L12.7184 3.48094V2.87494V1.74107C12.7184 1.16952 12.2768 0.75 11.7857 0.75C11.2947 0.75 10.8531 1.16953 10.8531 1.74107V2.87494V3.48094L10.2606 3.60822C6.73846 4.36483 4.12159 7.44572 4.12159 11.317C4.12159 14.1869 3.63076 16.1182 2.9703 17.5012C2.39128 18.7136 1.69202 19.4724 1.20114 20.005C1.13338 20.0785 1.06959 20.1477 1.01064 20.2132L22.5612 20.2137ZM22.5612 20.2137C22.7455 20.4181 22.823 20.6548 22.8215 20.8881L22.8215 20.8884M22.5612 20.2137L22.8215 20.8884M22.8215 20.8884C22.8182 21.4375 22.4101 21.8839 21.8825 21.8839H1.68897C1.1618 21.8839 0.753617 21.4378 0.750021 20.8881L22.8215 20.8884ZM14.3023 25.125C13.9878 26.2818 12.9643 27.1071 11.7857 27.1071C10.6072 27.1071 9.58366 26.2818 9.2692 25.125H14.3023ZM0.750021 20.888C0.748546 20.6551 0.825819 20.4188 1.01053 20.2134L0.750021 20.888Z"
          stroke="#656565"
          stroke-width="1.5"
        />
      </svg> -->
    </a>
    <nuxt-link to="/Carts" class="position-relative">
      <div class="position-absolute badgeStyle">1</div>
      <svg
        width="30"
        height="27"
        viewBox="0 0 30 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.36523 1H3.55265C4.54113 1 5.40611 1.66455 5.6608 2.61965L9.43339 16.7668C9.68809 17.7219 10.5531 18.3865 11.5415 18.3865H22.3718C23.2263 18.3865 24.0021 17.8877 24.3568 17.1104L27.7748 9.6196C28.4341 8.17473 27.378 6.53207 25.7898 6.53207H9.8653"
          stroke="#656565"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <ellipse
          cx="8.32211"
          cy="24.1827"
          rx="2.3182"
          ry="2.3182"
          fill="#656565"
        />
        <ellipse
          cx="24.5506"
          cy="24.1827"
          rx="2.3182"
          ry="2.3182"
          fill="#656565"
        />
      </svg>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.badgeStyle {
  background: #fb6666;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: $white-color;
  right: -10px;
  top: -10px;
  font-size: $font-size-12;
  @include Vertically;
}
</style>