const connected = state => state.connected
const joined = state => state.joined
const id = state => state.id
const players = state => state.players
const undeads = state => state.undeads

const playersCount = state => {
  return state.players.length
}

export default {
  connected,
  joined,
  id,
  players,
  playersCount,
  undeads
}
