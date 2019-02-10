<template>
  <div class="home">
    <Hero/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Hero from "@/components/Hero.vue"; // @ is an alias to /src
import Footer from "@/components/Footer.vue"; // @ is an alias to /src
@Component({
  components: {
    Hero,
    Footer,
  },
})
export default class Home extends Vue {}
</script>
