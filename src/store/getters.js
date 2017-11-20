export default {
  ready: state => state.connected && state.joined && state.client.readyState === state.client.OPEN
}
