<template>
    <div class="card card-padding">
        <div class="card-header">
            <h5 class="alignleft"> {{ skill.title }}</h5>
        </div>
        <div class="card-body">

            <div class="row">
                <div class="col-2" v-for="img in skill.images" >
                    <img class="max_logo_height img-fluid" :src="img.url" :alt="img.title" v-b-tooltip.hover :title="img.title"/>
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
    .card-padding {
        margin: 15px 0px;
    }
</style>