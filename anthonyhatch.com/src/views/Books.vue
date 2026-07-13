<template>
   <div>
      <h1 class="title-main">Books</h1>
      <div class="row">
         <div class="col-sm-12">
            <BooksWidget></BooksWidget>
         </div>
      </div>
      <Footer></Footer>
   </div>
</template>

<script setup lang="ts">
   import BooksWidget from "@/components/Books.vue" // @ is an alias to /src
   import Footer from "@/components/Footer.vue"
</script>

<style scoped>


</style>
