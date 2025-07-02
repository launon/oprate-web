import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// 引入公共样式文件
import './style/public.css'

const app = createApp(App)

app.use(router)
app.mount('#app')

