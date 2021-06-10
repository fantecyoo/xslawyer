<template>
  <div>
    <!-- swiper -->
    <swiper
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :loop="true"
      :autoplay="true"
      class="swiper"
    >
      <swiper-slide><img src="../assets/1.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/3.png" alt=""></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper-bundle.css";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);
export default {
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
.swiper{
    --swiper-navigation-color:gray;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 30px;/* 设置按钮大小 */
    height: 100vh;
    z-index: -1;
    margin-top: -100px;
}
</style>