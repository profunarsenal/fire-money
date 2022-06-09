import { createApp } from 'vue'
import App from './App.vue'

import reset from '@/assets/style/reset.scss'
import base from '@/assets/style/base.scss'
import store from '@/store/index'

const app = createApp(App)

app.use(store).mount('#app')

