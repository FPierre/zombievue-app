export default {
  socket_join: (context, players) => {
    console.log('socket_join ', players)
    context.commit('JOIN', players)
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
