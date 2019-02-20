<template>
    <div class="card">
        <div class="card-header ">
            <h3 class="alignleft"> {{ skill.title }}</h3>
        </div>
        <div class="card-body">

            <div class="row">
                <div class="col-2"  v-for="img in skill.images" >
                    <img class="max_logo_height responsive-img" :src="img.url" :alt="img.title"  />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    export default {
        name: "Skills",
        props:['skill']

    }

</script>

<style scoped>
    .max_logo_height
    {
        max-height: 60px;

    }
</style>