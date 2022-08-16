import { loginApi } from '@/api/user'
import { setToken, getToken, removeToken } from '@/utils//auth'
export default {
  namespaced: true,
  state: {
    token: getToken()
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setToken(token)
    },
    removeToken(state) {
      state.token = null
      removeToken()
    }
  },
  actions: {
    // 通过接口获取token
    // commit setToken
    async login({ commit }, data) {
      console.log(1)
      const res = await loginApi(data)
      console.log(res)
      commit('setToken', res)
    }
  }
}
