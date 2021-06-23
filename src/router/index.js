import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import login from '../components/login.vue'
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
      { path: '/vocalistenroll', component: solve => require(['../components/enroll/vocalistEnroll.vue'], solve) }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
