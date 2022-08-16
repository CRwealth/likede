import request from '@/utils/request'

// const num = Math.random() * 100
export function getcode(num) {
  const url = `/api/user-service/user/imageCode/${num}`
  return url
}

// 登陆页面
export function loginApi(data) {
  return request({
    url: 'user-service/user/login',
    method: 'POST',
    data: {
      ...data,
      loginType: 0
    }
  })
}
