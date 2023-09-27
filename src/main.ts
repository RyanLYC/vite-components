import { createApp } from 'vue'
import App from './App.vue'

import element from './components'

const app = createApp(App)
app.use(element)
app.mount('#app')
