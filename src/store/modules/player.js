import player from '../../api/player'
import * as types from '../mutation-types'

// Initial state
const state = {
  x: 100
}

// Getters
const getters = {
  x: state => state.x
}

// Actions
const actions = {}

// Mutations
const mutations = {
  [types.MOVE] (state, { id }) {
    // ...
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
