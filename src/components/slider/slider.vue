<template>
  <div class="swiper-container" ref="slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="slide in slides" :key="slide.id">
        <img :src="slide.imgUrl"/>
      </div>
    </div>
    <div class="swiper-pagination" ref="pagination"></div>
  </div>
</template>

<style>
@import 'swiper/dist/css/swiper.css';
.swiper-container {
  width: 100%;
  margin: 0;
  padding: 0;
}

.swiper-wrapper {
  height: 200px;
}

.swiper-slider img {
  max-width: 100%;
}

.swiper-slider {
  text-align: center;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>

<script>
import Swiper from 'swiper'

/* eslint-disable no-new */
export default {
  props: ['slides'],
  mounted () {
    debugger
    new Swiper(this.$refs.slider, {
      pagination: this.$refs.pagination,
      paginationClickable: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: 2500,
      autoplayDisableOnInteraction: false
    })
  }
}
</script>
