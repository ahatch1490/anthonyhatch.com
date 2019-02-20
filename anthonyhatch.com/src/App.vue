<template>
  <div id="app">
    <div class="container">
      <b-navbar  toggleable="lg" type="light" variant="light" sticky="true">
          <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav_collapse" />
        <b-collapse is-nav id="nav_collapse">
          <!-- As a link -->
          <b-navbar variant="faded" type="light">
            <b-nav-item> <router-link to="/" class="nav-link">Home</router-link></b-nav-item>
          </b-navbar>
          <b-navbar variant="faded" type="light">
            <b-nav-item>   <router-link to="/the_codes" class="nav-link">The Codes</router-link></b-nav-item>
          </b-navbar>
          <b-navbar variant="faded" type="light">
            <b-nav-item> <router-link to="/about"  class="nav-link">About</router-link></b-nav-item>
          </b-navbar>
      </b-collapse>
      </b-navbar>
      <div class="container">
      <div class="row">
        <div class="col-sm">
          <router-view/>
        </div>
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
