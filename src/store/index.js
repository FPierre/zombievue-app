import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import actions from './actions'
import getters from './getters'
import player from './modules/player'
// import undeads from './modules/undeads'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  connected: false,
  players: [],
  undeads: []
}

const mutations = {
  SOCKET_CONNECT: (state) => {
    console.log('SOCKET_CONNECT')
    state.connected = true
  },
  JOIN: (state, { players, player, undeads }) => {
    console.log('JOIN ', players)
    state.players = players
    state.undeads = undeads
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
  modules: {
    player
    // undeads
  },
  strict: debug
})
