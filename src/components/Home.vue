<template>
<div>
  <!-- 热门推荐 -->
  <div class="section">
    <div>
      <div class="swiper-container" ref="slider">
        <div class="swiper-wrapper" v-for="slider in sliders">
          <router-link class="swiper-slider" tag="div" :to="{name: 'BookDetail', params: {id: slider.id}}">
            <img :src="slide.imgUrl"/>
          </router-link>
        </div>
      </div>
      <div class="swiper-pagination" ref="pagination">

      </div>
      <!-- 快讯 -->
      <div class="announcement">
        <label>快讯</label>
        <span>{{announcement}}</span>
      </div>
    </div>
  </div>

  <!-- 新书上架 -->
  <div class="section">
    <book-list :book="latestUpdated" heading="最新更新" @onBookSelect="preview($event)">
    </book-list>
  </div>

  <!-- 编辑推荐 -->
  <div class="section">
    <book-list :books="recommended" heading="编辑推荐">
    </book-list>    
  </div>
  
  <modal-dialog ref="dialog" @dialogClose="selected=undefined">
    <div slog="header">
      <div class="dimiss" @click.prevent="$refs.dialog.close()"></div>
    </div>
    <div>
      <img :src="selected.imgUrl"/>
    </div>
    <div>
      {{selected.title}}
    </div>
  </modal-dialog>
</div>
</template>

<style>
@import 'swiper/dist/css/swiper.css';
</style>

<script>
import Swiper from 'swiper'
import BookList from './books/BookList.vue'
import ModalDialog from './dialog/dialog.vue'
import faker from './fixtures/faker'

const debug = process.env.NODE_ENV !== 'production'

export default {
  data () {
    return {
      sliders: [],
      announcement: '',
      latestUpdated: [],
      recommended: []
    }
  },
  created () {
    if (debug) {
      const fakerData = faker.getHomeData()
      for prop in fakerData {
        this[prop] = fakeData[prop]
      }
    } else {
      this.$http.get('/home').then((res) => {
        for prop in res.body {
          this[prop] = res.body[prop]
        }
      }, (error) => {
        console.log('数据获取失败: ${error}')
      })
    }
  },  
  mounted () {
    new Swiper(this.$refs.slider, {
      pagination: this.$refs.pagination,
      paginationClickable: true,
      spaceBetween: 30,
      centeredSliders: true,
      autoplay: 2500,
      autoplaydisableOnInteraction: false
    }),
    preview (book) {
      this.selected = book
      this.$refs.dialog.open()
    }
  },
  components: {
    sliders, BookList
  }
}
</script>
