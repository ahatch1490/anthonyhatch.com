<template>
   <div>
      <h1>The Codes</h1>
      <div class="row">
         <div class="col-sm-12">
            <Skills
                    v-for="skill in skillGroups"
                    v-bind:key="skill.title"
                    v-bind:skill="skill"
            ></Skills>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
   import Skills from "@/components/Skills.vue"; // @ is an alias to /src
   import { Component, Vue } from 'vue-property-decorator';
    @Component({
       components: {
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
                         title: 'netcore',
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
                         title: 'typescript',
                         url: "/frameworks/backbone-icon.svg"
                      },
                      {
                         title: 'backbone',
                         url: "/frameworks/ror.svg"
                      },
                      {
                         title: 'Vue',
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
                         title: 'Bootstrap',
                         url: "/layout/Bootstrap.svg"
                      }

                   ]
                },
                {
                   title: "Data",
                   images: [
                      {
                         title: 'MSSQL',
                         url: "/data/mssql.svg"
                      },
                      {
                         title: 'Postgres',
                         url: "/data/postgressql.svg"
                      }
                   ]
                },
                {
                   title: "Tools",
                   images: [
                      {
                         title: 'Visual Studio',
                         url: "/tools/vs.svg"
                      },
                      {
                         title: 'Vim',
                         url: "/tools/Vim.svg"
                      },
                      {
                         title: 'Rider',
                         url: "/tools/rider.svg"
                      },
                      {
                         title: 'Rubymine',
                         url: "/tools/rubymine.svg"
                      },
                      {
                         title: 'DataGrip',
                         url: "/tools/datagrip.svg"
                      },
                      {
                         title: 'WebStorm',
                         url: "/tools/webstorm.svg"
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
.max_logo_height
{
   max-height: 60px;

}
</style>