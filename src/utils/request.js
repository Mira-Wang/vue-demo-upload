import axios from 'axios'
import router from '@/router'
import Vue from 'vue'
import {
    Notify,
    Dialog
} from 'vant'
import "vant/lib/dialog/style";
import "vant/lib/notify/style";
Vue.use(Notify).use(Dialog)
// 自定义配置新建一个axios实例
const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, //api的base_url ，差不多是host吧
    timeout: 5000 // request timeout
})
// 添加请求拦截器
request.interceptors.request.use(
    config => {
        // 配置请求头等
        // config.headers['api-token'] = token
        config.headers['api-token'] = '2a93d2b7bab94089acc4e8ea4414ce84'
        config.headers['api-tenant'] = '1009'
        config.headers['dept_id'] = '1286190164174163970'
        return config
    },
    error => {
        Promise.reject(error)
    }
)
// 添加响应拦截器
request.interceptors.response.use(
    response => {
        const res = response.data
        // 跟后台商量，自定义code标示请求状态
        if (res.code !== 0) {
            if (res.code === 123) {
                // token已失效请重新登录
                Dialog.alert({
                    message: res.msg
                }).then(function () {
                    reLogin()
                })
                return Promise.reject(res)
            }
        } else {
            return response.data
        }
    },
    error => {
        Promise.reject(error)
    },
)
const reLogin = function () {
    router.push('/login')
}

export default request