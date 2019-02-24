import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faAddressCard, faBook, faBuilding} from '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin,faStackOverflow,faVuejs,faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



library.add(faCoffee,faBook,faAddressCard,faGithub,faLinkedin,faStackOverflow,faVuejs,faTwitter,faBuilding);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(bootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
