<template>
    <div class="jumbotron hero">
        <div class="row">
            <div class="col-6">
               <img class="img-fluid rounded"  alt="Anthony Hatch" src="../assets/me.jpg">
            </div>
            <div class="col-6">
                <h6>Me</h6>
                <p class="text-left">I love to code, nothing is more satisfying then deleting a hundred lines of code and replacing it with three. I enjoy learning new tools, frameworks and languages as well. Thomas and Hunts Pragmatic Programmer and Robert Martin's Clean Code, changed how I think about and write software. I strongly believe in practical and easy to under stand solutions to problems. But most of all I enjoy writing good quality clean code.</p>
                <h6>Favorite quote</h6>
                <p class="text-left">
                    There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.
                </p>
                <p class="text-left">-<a href="https://en.wikipedia.org/wiki/Tony_Hoare" target="_blank">Sir Charles Antony Richard Hoare</a></p>
                <div class="row">
                    <div class="col">
                        <a href="https://stackoverflow.com/users/108894/anthony/" target="_blank"><font-awesome-icon :icon="['fab', 'stack-overflow']" size="4x" /> </a>
                    </div>
                    <div class="col">
                        <a href="https://github.com/ahatch1490" target="_blank"> <font-awesome-icon :icon="['fab', 'github']" size="4x" /></a>
                    </div>
                    <div class="col">
                        <a href="https://www.linkedin.com/in/anthony-hatch-8481b613" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" size="4x" /></a>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "Hero"
    }
</script>

<style scoped>
    .hero > img{max-height: 500px;  max-width: 500px;}
</style>