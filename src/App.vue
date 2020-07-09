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
