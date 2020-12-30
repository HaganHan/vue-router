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
        const beforeEachCallback = this.beforeEachCallback
        const target = {
          path: window.location.hash.slice(1)
        }
        const current = {
          path: ''
        }
        const next = () => {
          this.current = target.path
        }
        if (beforeEachCallback instanceof Function) {
          return beforeEachCallback(target, current, next)
        }
        next()
      }
      window.addEventListener('load', initCurrent)
      window.addEventListener('hashchange', initCurrent)
    }

    if (options.mode === 'history') {
      const initCurrent = () => {
        const beforeEachCallback = this.beforeEachCallback
        const current = {
          path: '/'
        }
        const target = {
          path: window.location.pathname
        }
        const next = () => {
          this.current = target.path
        }
        if (beforeEachCallback instanceof Function) {
          return beforeEachCallback(target, current, next)
        }
        next()
      }
      window.addEventListener('load', initCurrent)
      window.addEventListener('popstate', initCurrent)
    }
  }

  beforeEach (callback) {
    Vue.util.defineReactive(this, 'beforeEachCallback', callback)
    console.log('2')
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
