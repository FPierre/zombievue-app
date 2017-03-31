import * as types from './mutation-types'

export const move = ({ commit }, player) => {
  commit(types.MOVE, { id: player.id })
}
