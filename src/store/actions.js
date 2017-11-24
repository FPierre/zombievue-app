export default {
  connected: ({ commit }) => commit('CONNECTED'),

  disconnected: ({ commit }) => commit('DISCONNECTED'),

  join: ({ getters, state }) => {
    // console.log('Store: join action')

    const { playerType } = state

    if (state.connected && state.client.readyState === state.client.OPEN) {
      state.client.send(JSON.stringify({ event: 'join', data: { playerType } }))
    }
  },

  joined: ({ commit }) => {
    commit('JOINED')
  },

  playerType: ({ commit }, playerType) => {
    commit('PLAYER_TYPE', playerType)
  },

  heroCreated: ({ commit, getters }, { id, players, undeads }) => {
    // console.log('heroCreated')

    if (getters.ready) {
      commit('HERO_CREATED', { id, players, undeads })
    }
  },

  playerCreated: ({ commit, getters }, { players }) => {
    // console.log('playerCreated')

    if (getters.ready) {
      commit('PLAYERS', { players })
    }
  },

  moveLeft: ({ getters, state }, id) => {
    // console.log('Store: moveLeft action')

    if (getters.ready) {
      state.client.send(JSON.stringify({ event: 'moveLeft', data: { id } }))
    }
  },

  moveRight: ({ getters, state }, id) => {
    // console.log('Store: moveRight action')

    if (getters.ready) {
      state.client.send(JSON.stringify({ event: 'moveRight', data: { id } }))
    }
  },

  idle: ({ getters, state }, id) => {
    // console.log('Store: idle action')

    if (getters.ready) {
      state.client.send(JSON.stringify({ event: 'idle', data: { id } }))
    }
  },

  attack: ({ getters, state }, id) => {
    // console.log('Store: attack action')

    if (getters.ready) {
      state.client.send(JSON.stringify({ event: 'attack', data: { id } }))
    }
  },

  playerMoved: ({ commit, getters }, { players }) => {
    if (getters.ready) {
      commit('PLAYERS', { players })
    }
  },

  undeadCreated: ({ commit, getters }, { undeads }) => {
    if (getters.ready) {
      commit('UNDEADS', { undeads })
    }
  },

  undeadsMoved: ({ commit, getters }, { undeads }) => {
    if (getters.ready) {
      commit('UNDEADS', { undeads })
    }
  }
}
