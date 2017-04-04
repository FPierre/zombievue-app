// import player from '../../api/player'
// import * as types from '../mutation-types'

const state = {
  id: null,
  x: null,
  health: null,
  color: null
}

const getters = {
  id: state => state.id,
  x: state => state.x,
  health: state => state.health,
  color: state => state.color
}

const mutations = {
  HERO_CREATED: (state, { rootState, hero, players, undeads }) => {
    console.log('HERO_CREATED, players:', players)
    state.id = hero.id
    state.x = hero.x
    state.health = hero.health
    state.color = hero.color

    rootState.players = players
    rootState.undeads = undeads
    rootState.connected = true
  },
  POSITION: (state, position) => {
    console.log('POSITION')
    state.x = position
  }
}

const actions = {
  // From server
  socket_heroCreated: ({ commit, rootState }, { hero, players, undeads }) => {
    console.log('socket_heroCreated', hero)
    commit('HERO_CREATED', { rootState, hero, players, undeads })
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
