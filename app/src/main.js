import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/tailwind.css'
import store from './store'
import axios from "axios"; // <-- Import the store object

import '../src/styles/style.css'

const app = createApp(App)
    .use(router)
    .use(store)
    axios.defaults.baseURL = process.env.VUE_APP_AXIOS_URL;
    app.config.globalProperties.$axios = axios;


router.isReady().then(() => {
    app.mount('#app')
})



