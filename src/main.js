import { createApp } from 'vue'
import { createRouterInstance } from './router/index.js';
import App from './App.vue'

const app = createApp(App);
app.use(createRouterInstance());
app.mount('#app');
