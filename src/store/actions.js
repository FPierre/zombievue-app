export default {
  socket_playerCreated: (context, players) => {
    console.log('socket_playerCreated ', players)
    context.commit('PLAYER_CREATED', players)
  },
  socket_undeadCreated: (context, undeads) => {
    console.log('socket_undeadCreated ', undeads)
    context.commit('UNDEADS', undeads)
  },
  socket_undeadsMoved: (context, undeads) => {
    console.log('socket_undeadsMoved ', undeads)
    context.commit('UNDEADS', undeads)
  }
}
