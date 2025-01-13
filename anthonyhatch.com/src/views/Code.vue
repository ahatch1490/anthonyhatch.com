<template>
   <div>
      <h1 class="title-main">The Codes</h1>
      <div class="row">
         <div class="col-sm-12 ">
            <Skills
                    v-for="skill in skillGroups"
                    v-bind:key="skill.title"
                    v-bind:skill="skill"
            ></Skills>
         </div>
      </div>
      <Footer></Footer>
   </div>
</template>

<script lang="ts">
   import Footer from "@/components/Footer.vue"
   import Skills from "@/components/Skills.vue"; // @ is an alias to /src
   import { Component, Vue } from 'vue-property-decorator';
    @Component({
       components: {
          Footer,
          Skills
       },
       data: () => {
          return {
             skillGroups: [
                {
                   title: "Languages",
                   images: [
                      {
                         title:'c#',
                         url: "languages/csharp.svg"
                      },
                      {
                         title:'ruby',
                         url: "languages/ruby.png"
                      },
                      {
                         title: "visual basic",
                         url: "languages/vb.svg"
                      },
                      {
                         title:'coffeescript',
                         url: "languages/coffeescript.svg"
                      },
                      {
                         title: 'javascript',
                         url: "languages/javascript.svg"
                      },
                      {
                         title: 'typescript',
                         url: "languages/typescript.svg"
                      }

                   ]
                },
                {
                   title: "Frameworks",
                   images: [
                      {
                         title: '.netcore',
                         url: "/frameworks/netcore.svg"
                      },
                      {
                         title: '.net',
                         url: "/frameworks/net.svg"
                      },
                      {
                         title: 'angular',
                         url: "/frameworks/angular.svg"
                      },
                      {
                         title: 'backbonejs',
                         url: "/frameworks/backbone-icon.svg"
                      },
                      {
                         title: 'ruby on rails',
                         url: "/frameworks/ror.svg"
                      },
                      {
                         title: 'vue',
                         url: "/frameworks/Vue.js_Logo.svg"
                      }

                   ]
                },
                {
                   title: "Layout",
                   images: [
                      {
                         title: 'html5',
                         url: "/layout/html5.svg"
                      },
                      {
                         title: 'css',
                         url: "/layout/css3.svg"
                      },
                      {
                         title: 'sass',
                         url: "/layout/sass.svg"
                      },
                      {
                         title: 'haml',
                         url: "/layout/haml.svg"
                      },
                      {
                         title: 'materialize-css',
                         url: "/layout/materialize.svg"
                      },
                      {
                         title: 'bootstrap',
                         url: "/layout/Bootstrap.svg"
                      }

                   ]
                },
                {
                   title: "Data / Cloud",
                   images: [
                      {
                         title: 'ms-sql',
                         url: "/data/mssql.svg"
                      },
                      {
                         title: 'postgres',
                         url: "/data/postgressql.svg"
                      },
                      {
                         title: 'heroku',
                         url: "/data/heroku.svg"
                      },
                      {
                         title: 'azure',
                         url: "/data/azure.svg"
                      },
                      {
                         title: 'azure functions',
                         url: "/data/azurefunctions.svg"
                      },
                     {
                       title: 'terraform',
                       url: "/data/HashiCorpTerraform.svg"
                     },



                   ]
                },
                {
                   title: "Tools",
                   images: [
                      {
                         title: 'visual studio',
                         url: "/tools/vs.svg"
                      },
                      {
                         title: 'vim',
                         url: "/tools/vim.svg"
                      },
                      {
                         title: 'rider',
                         url: "/tools/rider.svg"
                      },
                      {
                         title: 'rubymine',
                         url: "/tools/rubymine.svg"
                      },
                      {
                         title: 'datagrip',
                         url: "/tools/datagrip.svg"
                      },
                      {
                         title: 'webstorm',
                         url: "/tools/webstorm.svg"
                      }

                   ]
                },
                {
                   title: "Interests",
                   images: [
                      {
                         title: 'kotlin',
                         url: "/interests/kotlin.svg"
                      },
                      {
                         title: 'spring-boot',
                         url: "/interests/spring-boot.svg"
                      },
                      {
                         title: 'martin',
                         url: "/interests/marten.png"
                      },
                      {
                         title: 'flutter',
                         url: "/interests/flutter.svg"
                      }
                   ]
                },

             ]
          }

       }

    })
    export default class Code extends Vue {}
</script>

<style scoped>


</style>
