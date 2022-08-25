import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import App from './App.vue'
import BaseballAPI from './components/BaseballAPI.vue'
import { createPinia } from 'pinia'


import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue-3/dist/bootstrap-vue-3.css'
import './assets/scss/custom.scss'

const pinia = createPinia()
const app = createApp(App)
app.use(BootstrapVue3)
app.use(BaseballAPI)
app.use(pinia)
app.mount('#app')
