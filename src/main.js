import './assets/main.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App)
const vuetify = createVuetify({
    components: { ...components},
    directives,
})

app.use(vuetify)
app.use(router)


app.mount('#app')
// createApp(App).mount('#app')
