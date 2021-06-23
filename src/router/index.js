import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import login from '../components/login.vue'
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/home', component: home, children: [
      { path: '/', redirect: '/vocalistenroll' },
      { path: '/vocalistenroll', component: solve => require(['../components/artenroll/vocalistEnroll.vue'], solve) },
      { path: '/artPlaystatistics', component: solve => require(['../components/statistics/artPlayStatistics.vue'], solve)}
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
