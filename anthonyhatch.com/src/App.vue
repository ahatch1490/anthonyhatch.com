<template>
  <div id="app">
    <div class="container">
      <BNavbar toggleable="lg" type="light" variant="light" sticky="top">
        <BNavbarToggle target="nav_text_collapse" />
        <BCollapse id="nav_text_collapse" is-nav>
          <BNavbarNav>
            <BNavItem to="/"><font-awesome-icon icon="user" /> Home</BNavItem>
            <BNavItem to="/the_codes"><font-awesome-icon icon="laptop-code" /> Skills</BNavItem>
            <BNavItem to="/about"><font-awesome-icon icon="address-card" /> About</BNavItem>
            <BButton style="padding: 0;" variant="link" @click="showBooks = true">
              <font-awesome-icon icon="book" /> books
            </BButton>
            <BModal v-model="showBooks" title="books" no-footer>
              <Books />
            </BModal>
          </BNavbarNav>
        </BCollapse>
      </BNavbar>

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
import {
  BNavbar,
  BNavbarToggle,
  BNavbarNav,
  BNavItem,
  BCollapse,
  BButton,
  BModal,
} from 'bootstrap-vue-next'
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
