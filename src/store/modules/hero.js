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
  HERO_CREATED: (state, { hero, players, undeads }) => {
    console.log('HERO_CREATED')
    state.x = hero.x
    state.color = hero.color
    state.players = players
    state.undeads = undeads
  },
  POSITION: (state, position) => {
    console.log('POSITION')
    state.x = position
  }
}

const actions = {
  // From server
  socket_heroCreated: (context, { hero, players, undeads }) => {
    console.log('socket_heroCreated', hero)
    context.commit('HERO_CREATED', { hero, players, undeads })
  },
  // From server
  socket_moved: (context, position) => {
    console.log('socket_moved ', position)
    context.commit('POSITION', position)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
