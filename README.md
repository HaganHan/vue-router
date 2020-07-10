# @hagan/vue-router

根据 `vue-router` 源码，自己实现的一个 `vue-router` 库

## 开发

## 安装依赖

```
yarn install
```

### 开发环境
```
yarn serve
```

### 编译@hagan/vue-router

```
yarn build:rollup
```

## 使用方法

```shell
yarn add @hagan/vue-router
```

```js
import Vue from 'vue'
import VueRouter from '@hagan/vue-router'
import App from '@/App.vue'
import Hagan from '@/views/Hagan.vue'
import Rita from '@/views/Rita.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/hagan',
    component: Hagan
  },
  {
    path: '/rita',
    component: Rita
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const vm = new Vue({
  router,
  render: h => h(App)
})
vm.$mount('#app')
```

App.vue

```vue
<template>
  <div id="app">
    <nav>
      <router-link class="router-link" to="/hagan">hagan</router-link> |
      <router-link class="router-link" to="/rita">rita</router-link> |
      <router-link class="router-link" to="/rita/son">ritaSon</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link {
  color: #ccc;
  font-size: 20px;
  font-weight: 800;
}

.router-link-active {
  color: #666;
}

.router-link-exact-active {
  color: blue;
}
</style>
```
