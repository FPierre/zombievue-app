import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  // connected: false,
  connected: false,
  joined: false,
  id: null,
  players: [],
  undeads: []
}

const mutations = {
  SOCKET_CONNECT: state => {
    console.log('SOCKET_CONNECT')

    state.connected = true
  },

  HERO_CREATED: (state, { id, players, undeads }) => {
    console.log('HERO_CREATED, id:', id)

    state.joined = true

    state.id = id
    state.players = players
    state.undeads = undeads
  },

  PLAYERS: (state, players) => {
    // console.log('PLAYERS', players)

    state.players = players
  },

  UNDEADS: (state, undeads) => {
    // console.log('UNDEADS', undeads)

    state.undeads = undeads
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug
})
