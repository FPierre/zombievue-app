// import player from '../../api/player'
// import * as types from '../mutation-types'

const state = {
  x: 100,
  color: null
}

const getters = {
  x: state => state.x,
  color: state => state.color
}

const mutations = {
  JOIN: (state, { players, player }) => {
    console.log('JOIN ', players)
    state.x = player.x
    state.color = player.color
  },
  PLAYERS: (state, players) => {
    console.log('PLAYERS, ', players)
    // state.players = players
  },
  MOVE: (state, xPosition) => {
    console.log('MOVE')
    state.x = xPosition
  }
}

const actions = {
  // From server
  socket_quit: (context, players) => {
    console.log('quit ', players)
    context.commit('PLAYERS', players)
  },
  // From server
  socket_move: (context, xPosition) => {
    console.log('socket_move ', xPosition)
    context.commit('MOVE', xPosition)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
