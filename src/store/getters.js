const connected = (state) => {
  return state.connected
}

const id = (state) => {
  return state.id
}

const players = (state) => {
  return state.players
}

const playersCount = (state) => {
  return Object.keys(state.players).length
}

const undeads = (state) => {
  return state.undeads
}

export default {
  connected,
  id,
  players,
  playersCount,
  undeads
}
