import request from '@/utils/request'

// GET
// /api/index/user
// 首页
export function home() {
    return request({
      url: `/api/index/user`,
      method: 'get',
    })
  }