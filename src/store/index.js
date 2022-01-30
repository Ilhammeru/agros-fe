import Vue from 'vue'
import Vuex from 'vuex'

// modules
import auth from './modules/auth'
import global from './modules/global'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: auth,
    global: global
  }
})
