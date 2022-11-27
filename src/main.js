import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

import { createApp } from 'vue';
import App from './App.vue'; /* root component */
import router from './router';

// global components
import SectionIntro from '@/components/layout/SectionIntro';
import SectionContent from '@/components/layout/SectionContent';
import MasterCard from '@/components/layout/MasterCard';

const app = createApp(App);

app.component('SectionIntro', SectionIntro);
app.component('SectionContent', SectionContent);
app.component('MasterCard', MasterCard);

app.use(router);

app.mount('#app');

import "/node_modules/bootstrap/dist/js/bootstrap.bundle";
