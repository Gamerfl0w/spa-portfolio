import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
