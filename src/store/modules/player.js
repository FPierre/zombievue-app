import player from '../../api/player'
import * as types from '../mutation-types'

const state = {
  connected: false,
  x: 100
}

const getters = {
  x: state => state.x
}

const mutations = {
  [SOCKET_CONNECT]: (state) => {
    state.connected = true
  },
  [SOCKET_DISCONNECT]: (state) => {
    state.connected = false
  },
  [MOVE]: (state, xPosition) => {
    state.x = xPosition
  }
}

const actions = {
  socket_move: ({ commit, state }, xPosition) => {
    commit('MOVE', xPosition)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
