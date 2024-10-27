
import { createApp } from 'vue'
import App from './App.vue'

// main.js yoki App.vue faylida
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

createApp(App).mount('#app')
