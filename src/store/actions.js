export default {
  connected: ({ commit }) => {
    console.log('Store: connected action')

    commit('CONNECTED')
  },

  disconnected: ({ commit }) => {
    console.log('Store: disconnected action')

    commit('DISCONNECTED')
  },

  join: ({ state, commit }) => {
    console.log('Store: join action')

    const { client } = state

    if (state.connected && client.readyState === client.OPEN) {
      client.send(JSON.stringify({ event: 'join' }))
    }
  },

  joined: ({ state, commit }) => {
    commit('JOINED')
  },

  heroCreated: (context, { id, players, undeads }) => {
    console.log('heroCreated')

    context.commit('HERO_CREATED', { id, players, undeads })
  },

  playerCreated: (context, { players }) => {
    console.log('playerCreated')

    context.commit('PLAYERS', { players })
  },

  moveLeft: ({ state }, id) => {
    console.log('Store: moveLeft action')

    const { client } = state

    if (state.joined && client.readyState === client.OPEN) {
      client.send(JSON.stringify({ event: 'moveLeft', data: { id } }))
    }
  },

  moveRight: ({ state }, id) => {
    console.log('Store: moveRight action')

    const { client } = state

    if (state.joined && client.readyState === client.OPEN) {
      client.send(JSON.stringify({ event: 'moveRight', data: { id } }))
    }
  },

  // idle: ({ state }, id) => {
  //   console.log('Store: idle action')
  //
  // },

  playerMoved: (context, { players }) => {
    context.commit('PLAYERS', { players })
  }

  // socket_undeadCreated: (context, undeads) => {
  //   console.log('socket_undeadCreated', undeads)
  //
  //   context.commit('UNDEADS', undeads)
  // },
  //
  // socket_undeadsMoved: (context, undeads) => {
  //   console.log('socket_undeadsMoved', undeads)
  //
  //   context.commit('UNDEADS', undeads)
  // }
}
