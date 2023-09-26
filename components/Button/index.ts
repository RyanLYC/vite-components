import { type App } from 'vue'
import Button from './Button.vue'

Button.name = 'ZgButton'
Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button
