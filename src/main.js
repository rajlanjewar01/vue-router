import { createApp } from 'vue'
import { router } from './router'; // import
import App from './App.vue'

const app = createApp(App);
app.use(router); // use
// app.mount('#app').use(router);
app.mount('#app');
