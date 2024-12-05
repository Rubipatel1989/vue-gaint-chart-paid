import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; 
import '@bryntum/gantt/gantt.stockholm.css';


const app = createApp(App);
app.use(router); // Use the router
app.mount('#app');
