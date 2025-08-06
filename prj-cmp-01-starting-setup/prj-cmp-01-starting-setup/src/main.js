import { createApp } from 'vue';

import App from './Vue.vue';
import Container from './components/slots/Container.vue';
const app = createApp(App)
app.component('container',Container)
app.mount('#app');
