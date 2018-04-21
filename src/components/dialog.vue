<template>
  <div class="dialog-wrapper" :class="{'open': isOpen}">
    <div class="overlay" @click="close">
    </div>
    <div class="dialog">
      <div class="heading">
        <slot name="heading">
        </slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less">
@import './dialog.less';
</style>

<script>
export default {
  data () {
    return {isOpen: false}
  },
  methods: {
    open () {
      this.isOpen = true
      this.$emit('dialogopen')
    },
    close () {
      this.isOpen = false
      this.$emit('dialogclose')
    }
  }
}
</script>
