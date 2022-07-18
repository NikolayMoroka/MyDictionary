import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import addNewInfo from './modules/addNewInfo'
import getData from './modules/getData'

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
    auth,
    addNewInfo,
    getData
  }
})
