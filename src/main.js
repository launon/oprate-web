import { createApp } from 'vue'
import App from './App.vue'
import router from '../router/index.js'
import ElementUI from 'element-ui'

const app = createApp(App)
app.use(ElementUI, { zIndex: 3000 });
app.use(router)
app.mount('#app')

