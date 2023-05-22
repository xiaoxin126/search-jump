// import { createApp } from 'vue'
// import App from './App.vue'
// import './registerServiceWorker'
// import router from './router'
// import store from './store'
// import Toast from "@/components/Toast.vue";
// createApp(App).use(store).use(router).component("Toast", Toast).mount('#app')
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/button.less";
import '@/assets/css/nav.less';
import '../node_modules/reset-css/less/reset.less';
import Toast from "@/components/Toast.vue";
const app = createApp(App);
app.use(router).use(store).component("Toast", Toast);
app.mount("#app");
