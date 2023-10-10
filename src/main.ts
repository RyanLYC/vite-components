import { createApp } from 'vue'
import App from './App.vue'

import zgui from 'vite-components-last'
import 'vite-components-last/dist/style.css'

const app = createApp(App)
app.use(zgui)
app.mount('#app')
