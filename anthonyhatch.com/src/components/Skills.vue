<template>
    <div class="card">
        <div class="card-header ">
            <h3 class="alignleft"> {{ skill.title }}</h3>
        </div>
        <div class="card-body">

            <div class="row">
                <div class="col-2"  v-for="img in skill.images" >
                    <img class="max_logo_height responsive-img" :src="publicPath + img.url" alt="C#"  />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    export default {
        name: "Skills",
        props:['skill'],
        publicPath: process.env.BASE_URL,
        methods: {
             GetImageUrl(url: string) {
                return  require(url);
            }
        }

    }

</script>

<style scoped>

</style>