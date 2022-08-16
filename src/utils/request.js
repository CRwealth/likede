import axios from 'axios'
import { Message } from 'element-ui'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000 // request timeout
})

// response interceptor
// response interceptor 响应拦截器
service.interceptors.response.use((response) => {
  // axios默认加了一层data
  console.log('response', response)
  const { success, msg, token } = response.data
  //   要根据success的成功与否决定下面的操作
  if (success) {
    // console.log(token)
    return token
  } else {
    // 业务已经错误了 还能进then ? 不能 ！ 应该进catch
    Message.error(msg) // 提示错误消息
    return Promise.reject(new Error(msg))
  }
}, error => {
  Message.error(error.msg) // 提示错误信息
  return Promise.reject(error) // 返回执行错误 让当前的执行链跳出成功 直接进入 catch
})
export default service
