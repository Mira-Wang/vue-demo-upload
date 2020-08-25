import request from '@/utils/request'

// 登录接口
// POST
// /api/login
export function Login(data) {
    return request({
        url: '/api/login',
        method: 'post',
        data
    })
}