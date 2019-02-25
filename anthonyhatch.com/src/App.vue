<template>
  <div id="app">
    <div class="container">
      <b-navbar  toggleable="lg" type="light" variant="light" :sticky="true" >
        <b-navbar-toggle target="nav_text_collapse" />

          <b-collapse is-nav id="nav_text_collapse">
            <b-navbar-nav>
            <b-nav-item to="/" ><font-awesome-icon icon="user" /> Home</b-nav-item>
            <b-nav-item to="/the_codes"><font-awesome-icon icon="laptop-code" /> Skills</b-nav-item>
            <b-nav-item to="/about"><font-awesome-icon icon="address-card" /> About</b-nav-item>
              </b-navbar-nav>

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
