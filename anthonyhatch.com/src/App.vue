<template>
  <div id="app">
    <div class="container">
    <nav  class="nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/the_codes" class="nav-link">The Codes</router-link>
      <router-link to="/about"  class="nav-link">About</router-link>
    </nav>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
