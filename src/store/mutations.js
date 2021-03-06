import { SET_TOKEN, LOGOUT, GET_USER } from './mutation-types';
import Vue from "vue";


export default {
  //将token保存到sessionStorage里，token表示登陆状态
  [SET_TOKEN]: (state, data) => {
    state.token = data
    window.sessionStorage.setItem('token', data)
  },
  //获取用户名
  [GET_USER]: (state, data) => {
    // 把用户名存起来
    state.user = data
    window.sessionStorage.setItem('user', data)
  },
  //登出
  [LOGOUT]: (state) => {
    // 登出的时候要清除token
    state.token = null
    state.user = null
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')
  }

}
