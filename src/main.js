import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* 自动导入 import ElementPlus from 'element-plus'
    import 'element-plus/dist/index.css' 
*/
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
