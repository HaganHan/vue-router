export default {
  name: 'RouterLink',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      classes: {
        'router-link': true
      }
    }
  },
  render (h) {
    const { options } = this.$router
    const { mode } = options
    const { to } = this

    const classActive = options.linkActiveClass || 'router-link-active'
    const classActiveExact = options.linkExactActiveClass || 'router-link-exact-active'

    let href = ''
    if (mode === 'hash') href = `#${to}`
    if (mode === 'history') href = to

    const classes = {}

    const isActive = new RegExp(to).test(this.$router.current)
    if (isActive) {
      classes[classActive] = true
    } else {
      classes[classActive] = false
    }

    const isExactActive = this.$router.current === to
    if (isExactActive) {
      classes[classActiveExact] = true
    } else {
      classes[classActiveExact] = false
    }

    const click = event => {
      if (!event.defaultPrevented) {
        event.preventDefault()
      }
      if (this.$router.current === to) return
      if (mode === 'hash') window.location.hash = href
      if (mode === 'history') window.history.pushState(null, null, href)
      this.$router.current = to
    }

    return h('a', {
      attrs: { href, ...this.$attrs },
      class: classes,
      on: { click }
    }, this.$slots.default)
  }
}
