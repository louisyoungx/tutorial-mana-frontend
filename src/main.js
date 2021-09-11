import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css' // tailwind.css
import api from './http/index'

window.api = api
window.store = store
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
