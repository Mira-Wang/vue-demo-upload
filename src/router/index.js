import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: () => import('@/views/home'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/mine',
        component: () => import('@/views/mine'),
        meta: {
            title: '我的'
        }
    },
    {
        path: '/login',
        component: () => import('@/views/login'),
        meta: {
            title: '登录'
        }
    }
]

const router = new Router({
    routes
})

export default router