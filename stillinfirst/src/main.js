import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import App from './App.vue'


import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue-3/dist/bootstrap-vue-3.css'
import './assets/scss/custom.scss'

const app = createApp(App)
app.use(BootstrapVue3)
app.mount('#app')
