const heroHealth = state => {
  return state.hero.health
}

const connected = state => {
  return state.connected
}

const players = state => {
  return state.players
}

const undeads = state => {
  return state.undeads
}

export default {
  heroHealth,
  connected,
  players,
  undeads
}
