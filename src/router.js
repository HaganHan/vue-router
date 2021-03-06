import VueRouter from '@/plugins/vue-router'
import Vue from 'vue'
import Hagan from '@/views/Hagan.vue'
import Rita from '@/views/Rita.vue'
import RitaSon from '@/views/RitaSon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/hagan',
    component: Hagan
  },
  {
    path: '/rita',
    component: Rita
  },
  {
    path: '/rita/son',
    component: RitaSon
  }
]

console.log('1')
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.path !== '/rita') { // 路由守卫
    next()
  }
})

export default router
