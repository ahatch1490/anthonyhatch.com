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

<script setup lang="ts">
   import Footer from "@/components/Footer.vue"
   import Skills from "@/components/Skills.vue"; // @ is an alias to /src
   import type { SkillGroup } from '@/models/SkillGroup'

   const skillGroups: SkillGroup[] = [
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
                         title: 'google cloud',
                         url: "/data/googlecloud.svg"
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
                   title: "IDE's",
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
                   title: "LLM",
                   images: [
                      {
                         title: 'claude',
                         url: "/llm/claude.svg"
                      },
                      {
                         title: 'ollama',
                         url: "/llm/ollama.svg"
                      },
                      {
                         title: 'cmux',
                         url: "/llm/cmux.png"
                      },
                      {
                         title: 'open mono agent',
                         url: "/llm/openmonoagent.svg"
                      },
                      {
                         title: 'pi',
                         url: "/llm/pi.svg"
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
</script>

<style scoped>


</style>
