import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/css/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faAddressCard, faBook, faBuilding, faLaptopCode, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faStackOverflow, faVuejs, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faBook, faAddressCard, faGithub, faLinkedin, faStackOverflow, faVuejs, faTwitter, faBuilding, faLaptopCode, faUser)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
