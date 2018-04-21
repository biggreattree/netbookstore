import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Categories from '@/components/Categories'
import ShoppingCart from '@/components/ShoppingCart'
import Me from '@/components/Me'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/hello', name: 'HelloWorld', component: HelloWorld},
    {path: '/home', name: 'Home', component: Home},
    {path: '/categories', name: 'Categories', component: Categories},
    {path: '/shoppingCart', name: 'ShoppingCart', component: ShoppingCart},
    {path: '/me', name: 'Me', component: Me}
  ]
})
