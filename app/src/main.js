import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/tailwind.css'
import store from './store' // <-- Import the store object

const app = createApp(App)
    .use(router)
    .use(store)


router.isReady().then(() => {
    app.mount('#app')
})



