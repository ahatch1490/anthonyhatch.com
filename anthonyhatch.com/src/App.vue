<template>
  <div id="app">
    <div class="container">
      <!-- TODO(stage 2): restore bootstrap-vue-next navbar collapse + Books modal -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav_text_collapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="nav_text_collapse" class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/"><font-awesome-icon icon="user" /> Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/the_codes"><font-awesome-icon icon="laptop-code" /> Skills</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about"><font-awesome-icon icon="address-card" /> About</router-link>
              </li>
              <li class="nav-item">
                <button class="btn btn-link nav-link" @click="showBooks = !showBooks">
                  <font-awesome-icon icon="book" /> books
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Temporary inline books panel until modal is restored in stage 2 -->
      <div v-if="showBooks" class="container my-3">
        <Books />
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Books from '@/components/Books.vue'

const showBooks = ref(false)
</script>

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
