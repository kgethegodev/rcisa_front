import './assets/main.css'
import VueFeather from 'vue-feather';


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
if(VueFeather.name) {
  app.component(VueFeather.name, VueFeather)
}

app.mount('#app')
