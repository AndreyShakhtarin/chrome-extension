import './assets/main.css'

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Clipboard from 'v-clipboard'

const app = createApp(App)

app.use(Clipboard)
app.mount('#app')
