<template>
    <div class="jumbotron hero">
        <div class="row">
            <div class="col-md-6 col-sm-12">
               <img class="img-fluid rounded"  alt="Anthony Hatch" src="../assets/me.jpg">
            </div>
            <div class="col-md-6  col-sm-12">
                <h6>Me</h6>
                <p class="text-left">I love to code, nothing is more satisfying then deleting a hundred lines of code and replacing it with three. I enjoy learning new tools, frameworks and languages as well. Thomas and Hunts Pragmatic Programmer and Robert Martin's Clean Code, changed how I think about and write software. I strongly believe in practical and easy to under stand solutions to problems. But most of all I enjoy writing good quality clean code.</p>

                <div class="d-none d-md-block">
                    <h6>Favorite quote</h6>
                    <p class="text-left ">
                        There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.
                    </p>
                    <p class="text-left">-<a href="https://en.wikipedia.org/wiki/Tony_Hoare" target="_blank">Sir Charles Antony Richard Hoare</a></p>

                </div>

                <div class="col">
                    <b-btn style="padding: 0;" v-b-modal.modal1  variant="link" ><font-awesome-icon icon="book" size="3x" /></b-btn>
                    <div>
                        <!-- Modal Component -->
                        <b-modal id="modal1" title="Reading">
                            <Books></Books>
                        </b-modal>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script lang="ts">

    import Books from "@/components/Books.vue"; // @ is an alias to /src
    export default {
        name: "Hero",
        components: {Books}
    }
</script>

<style scoped>
    .hero > img{max-height: 500px;  max-width: 500px;}
</style>