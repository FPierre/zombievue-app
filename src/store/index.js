import Vue from 'vue'
import Vuex from 'vuex'
import Ws from 'websocket'

import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const W3CWebSocket = Ws.w3cwebsocket

const state = {
  client: new W3CWebSocket(`ws://localhost:8083/`, 'echo-protocol'),
  connected: false,
  hit: false,
  id: null,
  joined: false,
  players: [],
  playerType: null,
  undeads: []
}

const mutations = {
  CONNECTED: state => {
    state.connected = true
  },

  DISCONNECTED: state => {
    state.connected = false
  },

  JOINED: state => {
    state.joined = true
  },

  PLAYER_TYPE: (state, playerType) => {
    state.playerType = playerType
  },

  HERO_CREATED: (state, { id, players, undeads }) => {
    state.id = id
    state.players = players
    state.undeads = undeads
  },

  PLAYERS: (state, { players }) => {
    state.players = players
  },

  UNDEADS: (state, { undeads }) => {
    state.undeads = undeads
  },

  HIT: state => {
    state.hit = true
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
