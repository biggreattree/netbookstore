<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link :to="{name: 'HelloWorld'}">
      <div>你好，师姐</div>
    </router-link>

    <tabs></tabs>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Tabs from './tabs.vue'
export default {
  components: {Tabs}
}
</script>

<style>
@import "./assets/less/site.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
