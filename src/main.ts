import { createApp } from 'vue'
import App from './App.vue'

import element, { useTheme } from './components'

useTheme('dark')

const app = createApp(App)
app.use(element)
app.mount('#app')
