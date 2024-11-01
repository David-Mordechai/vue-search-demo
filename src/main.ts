import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'
import vueDebounce from 'vue-debounce'
import { createPinia } from 'pinia'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark'
    }
  })
  
  createApp(App)
  .use(vuetify)
  .use(createPinia())
  .directive('debounce', vueDebounce({lock: true}))
  .mount('#app')
