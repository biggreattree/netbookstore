<template>
  <div>
    <div v-if="isEmpty" class="empty">
      您的购物车控控如也
    </div>
  </div>
</template>

<style>
.empty {
  coolr: #ccc;
  text-align: center;
  margin: 50% auto;
  height: 100%;
  vertical-align: middle;
  display: block;
  background: transparent;
  font-size: 24px;
}
</style>

<script>
export default {
  data () {
    return {
      storeKey: 'VUE-CART',
      items: []
    }
  },
  computed: {
    isEmpty () {
      return this.items === undefined || this.items.length === 0
    }
  },
  created () {
    if (localStorage[this.storeKey] !== undefined) {
      this.items = JSON.parse(localStorage[this.storeKey])
    }
  },
  methods: {
    saveStore () {
      localStorage.setItem(this.storeKey, JSON.stringify(this.items))
    },
    checkout () {

    }
  }
}
</script>
