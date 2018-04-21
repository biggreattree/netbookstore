<template>
  <div class="tabs">
      <ul>
        <li>
          <!-- 使用router-link指向定义的path -->
          <router-link :to="{name: 'Home'}" tag="li">
            <div><img src="./assets/images/home.svg"></div>
            <div>首页</div>
          </router-link>
        </li>
         <li>
          <router-link :to="{name: 'Categories'}" tag="li">
            <div><img src="./assets/images/categories.svg"></div>
            <div>分类</div>
          </router-link>
        </li>
         <li>
          <router-link :to="{name: 'ShoppingCart'}" tag="li">
            <div><img src="./assets/images/shoppingCart.svg"></div>
            <div>购物车</div>
          </router-link>
        </li>
         <li>
          <router-link :to="{name: 'Me'}" tag="li">
            <div><img src="./assets/images/me.svg"></div>
            <div>我的</div>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<style lang="less">
@import './assets/less/tabs.less';
</style>

<script>
export default {

}
</script>
