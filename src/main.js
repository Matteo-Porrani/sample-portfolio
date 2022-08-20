import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// global components
import BaseButton from "@/UI/BaseButton";

const app = createApp(App);

app.component('base-button', BaseButton);

app.use(router);

app.mount('#app')
