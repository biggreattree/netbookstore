<template>
  <div class="book-list">
    <div class="header">
      <div class="heading">{{heading}}</div>
      <div class="more">更过...</div>
    </div>
    <div class="book-items">
      <div class="book" v-for="book in books" @click="@emit('onBookSelect', book)">
        <div class="cover">
          <img :src="book.imgUrl"/>
        </div>
        <div class="title">{{book.title}}</div>
        <div class="authors">{{book.authors | join}}</div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import './list.less';
</style>

<script>
//data是一个内部对象，此时就要换成内部外部都可见的props
export default {
  props: ['heading', 'books'],
  filters: {
    join (args) {
      return args.join(',')
    }
  }
}
</script>
