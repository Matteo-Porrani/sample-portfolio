import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// global components
import BaseButton from "@/UI/BaseButton";
import ProjectLink from "@/UI/ProjectLink";

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('project-link', ProjectLink);

app.use(router);

app.mount('#app')
