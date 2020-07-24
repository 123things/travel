import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/city',
    name: 'City',
    component: City
  },{
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]
const scrollBehavior = function (to, from, savedPosition) {
  // savedPosition 会在你使用浏览器前进或后退按钮时候生效
 // 这个跟你使用 router.go() 或 router.back() 效果一致
 // 这也是为什么我在 tab 栏结构中放入了一个 点击回退 的按钮
 if (savedPosition) {
      return savedPosition
    } else {
      // 如果不是通过上述行为切换组件，就会让页面回到顶部
      return {x: 0, y: 0}
  }
}

const router = new VueRouter({
  routes,
  scrollBehavior
})

export default router
