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
      { path: '/collegeDrawingEnroll', component: solve => require(['../components/collegeenroll/collegeDrawingEnroll.vue'], solve) },
      { path: '/collegeHandweitingEnrol', component: solve => require(['../components/collegeenroll/collegeHandweitingEnrol.vue'], solve) },
      { path: '/collegeShootEnrol', component: solve => require(['../components/collegeenroll/collegeShootEnrol.vue'], solve) },
      { path: '/artWorkEnrol', component: solve => require(['../components/artworkenroll/artWorkEnrol.vue'], solve) },
      { path: '/excellentEnrol', component: solve => require(['../components/excellentenroll/excellentEnrol.vue'], solve) },
    ],
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
