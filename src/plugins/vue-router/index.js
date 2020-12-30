import RouterLink from './components/RouterLink'
import RouterView from './components/RouterView'

let Vue

class VueRouter {
  constructor (options) {
    this.options = options
    this.routeMap = []
    this.callback = null
    options.routes.forEach(route => {
      this.routeMap[route.path] = route.component
    })
    Vue.util.defineReactive(this, 'current', '/')

    if (options.mode === 'hash') {
      const initCurrent = () => {
        this.current = window.location.hash.slice(1)
      }
      window.addEventListener('load', initCurrent)
      window.addEventListener('hashchange', initCurrent)
    }

    if (options.mode === 'history') {
      const initCurrent = () => {
        this.current = window.location.pathname
      }
      window.addEventListener('load', initCurrent)
      window.addEventListener('popstate', initCurrent)
    }
  }

  beforeEach (callback) {
    Vue.util.defineReactive(this, 'beforeEachCallback', callback)
  }
}

VueRouter.install = function install (_Vue) {
  if (install.installed && Vue === _Vue) return
  install.installed = true
  Vue = _Vue

  Vue.mixin({
    created () {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  Vue.component('RouterLink', RouterLink)
  Vue.component('RouterView', RouterView)
}

export default VueRouter
