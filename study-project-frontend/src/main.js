import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import axios from "axios";

const app = createApp(App)
axios.defaults.baseURL = 'http://192.168.10.101:8080'

app.use(createPinia())
app.use(router)

app.mount('#app')
