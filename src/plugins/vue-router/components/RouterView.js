export default {
  name: 'RouterView',
  render (h) {
    const { current, routeMap } = this.$router
    return h(routeMap[current])
  }
}
