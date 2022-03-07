import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card'
import Button from 'primevue/button'
import ChipComp from 'primevue/chip';
import Menubar from 'primevue/menubar';

import 'primevue/resources/themes/vela-green/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

const app = createApp(App);
app.use(PrimeVue);
app.component('InputText',InputText);
app.component('CardComp',Card);
app.component('ButtonComp',Button);
app.component('MenuBar',Menubar);
app.component('ChipComp',ChipComp);
app.use(store);
app.use(router);
app.mount('#app');
