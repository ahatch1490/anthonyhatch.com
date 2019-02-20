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
                         url: "skills/csharp.svg"
                      },
                      {
                         title:'ruby',
                         url: "skills/ruby.png"
                      },
                      {
                         title: "visual basic",
                         url: "skills/vb.svg"
                      },
                      {
                         title:'coffeescript',
                         url: "skills/coffeescript.svg"
                      },
                      {
                         title: 'javascript',
                         url: "skills/javascript.svg"
                      },
                      {
                         title: 'typescript',
                         url: "skills/typescript.svg"
                      }

                   ]
                },
                {
                   title: "Frameworks",
                   images: [
                      {
                         url: "/skills/vb.svg"
                      },
                      {
                         url: "/skills/csharp.svg"
                      },
                      {
                         url: "/skills/ruby.svg"
                      },
                      {
                         url: "/skills/python.svg"
                      },
                      {
                         url: "/skills/coffeescript.svg"
                      },
                      {
                         url: "/skills/javascript.svg"
                      },
                      {
                         url: "/skills/typescript.svg"
                      }

                   ]
                }
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