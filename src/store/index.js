import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import actions from './actions'
import getters from './getters'
// import hero from './modules/hero'
// import undeads from './modules/undeads'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  connected: false,
  id: null,
  players: {},
  undeads: {}
}

const mutations = {
  SOCKET_CONNECT: (state) => {
    console.log('SOCKET_CONNECT')
  },
  HERO_CREATED: (state, { id, undeads }) => {
    console.log('HERO_CREATED, id:', id)
    state.id = id
    state.undeads = undeads
    state.connected = true
  },
  PLAYERS: (state, players) => {
    console.log('PLAYERS ', players)
    state.players = players
  },
  UNDEADS: (state, undeads) => {
    console.log('UNDEADS ', undeads)
    state.undeads = undeads
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  // modules: {
    // hero
    // undeads
  // },
  strict: debug
})
