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
        path: '/home',
        component: home,
        children: [
            { path: '/', redirect: '/vocalistenroll' },
            { path: '/vocalistenroll', component: solve => require(['../components/artenroll/vocalistEnroll.vue'], solve) },
            { path: '/instrumentalEnroll', component: solve => require(['../components/artenroll/instrumentalEnroll.vue'], solve) },
            { path: '/danceEnroll', component: solve => require(['../components/artenroll/danceEnroll.vue'], solve) },
            { path: '/playEnroll', component: solve => require(['../components/artenroll/playEnroll.vue'], solve) },
            { path: '/recitationEnroll', component: solve => require(['../components/artenroll/recitationEnroll.vue'], solve) },
            { path: '/drawingEnroll', component: solve => require(['../components/studentartenroll/drawingEnroll.vue'], solve) },
            { path: '/handwritingEnroll', component: solve => require(['../components/studentartenroll/handwritingEnroll.vue'], solve) },
            { path: '/shootEnroll', component: solve => require(['../components/studentartenroll/shootEnroll.vue'], solve) },
            { path: '/deviseEnroll', component: solve => require(['../components/studentartenroll/deviseEnroll.vue'], solve) },
            { path: '/movieEnroll', component: solve => require(['../components/studentartenroll/movieEnroll.vue'], solve) },
        ]
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router