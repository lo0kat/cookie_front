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
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';
import Badge from 'primevue/badge';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';

import 'primevue/resources/themes/vela-green/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import '/node_modules/primeflex/primeflex.css'


const app = createApp(App);
app.use(PrimeVue);
app.component('InputText',InputText);
app.component('CardComp',Card);
app.component('ButtonComp',Button);
app.component('MenuBar',Menubar);
app.component('ChipComp',ChipComp);
app.component('DialogComp',Dialog);
app.component('DividerComp',Divider);
app.component('TagComp',Tag);
app.component('BadgeComp',Badge);
app.component('ToastComp',Toast);

app.use(ToastService)
app.use(store);
app.use(router);
app.mount('#app');
