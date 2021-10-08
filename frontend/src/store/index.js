//@ts-check
import Vue from 'vue'
import Vuex from 'vuex'
import user from '../modules/user'
import mascot from '../modules/mascot'
import client from '../modules/client'
import specie from '../modules/specie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user, client, mascot, specie
  }
})
