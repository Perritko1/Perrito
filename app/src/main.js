import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/tailwind.css'
import store from './store' // <-- Import the store object




createApp(App).use(router).use(store).mount('#app')



