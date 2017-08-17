export default {
  socket_Joined: context => {
    console.log('socket_Joined')

    context.commit('JOINED')
  },

  socket_heroCreated: (context, { id, undeads }) => {
    console.log('socket_heroCreated')

    context.commit('HERO_CREATED', { id, undeads })
  },

  socket_playerCreated: (context, players) => {
    console.log('socket_playerCreated', players)

    context.commit('PLAYERS', players)
  },

  socket_playerMoved: (context, players) => {
    console.log('socket_playerMoved', players)

    context.commit('PLAYERS', players)
  },

  socket_undeadCreated: (context, undeads) => {
    console.log('socket_undeadCreated', undeads)

    context.commit('UNDEADS', undeads)
  },

  socket_undeadsMoved: (context, undeads) => {
    console.log('socket_undeadsMoved', undeads)

    context.commit('UNDEADS', undeads)
  }
}
