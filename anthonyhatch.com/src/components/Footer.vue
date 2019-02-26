<template>
    <div class="card" style="margin-top:10px;">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-3">
                    <a class="footer-link" href="https://stackoverflow.com/users/108894/anthony/" target="_blank"><font-awesome-icon :icon="['fab', 'stack-overflow']" size="2x" /> </a>
                    <a class="footer-link" href="https://github.com/ahatch1490" target="_blank"> <font-awesome-icon :icon="['fab', 'github']" size="2x" /></a>
                    <a class="footer-link" href="https://www.linkedin.com/in/anthony-hatch-8481b613" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" size="2x" /></a>
                </div>
                <div class="col-sm-9 ">
                    <h6 class="float-md-right">Powered By <a href="https://vuejs.org/" target="_blank"><span style="color:#4fc08d;" ><font-awesome-icon :icon="['fab', 'vuejs']" size="2x" /></span></a></h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>