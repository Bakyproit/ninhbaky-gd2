import { createApp } from "vue";
import App from "./App.vue";
import router from './router/index.js';
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";

createApp(App).use(router).mount("#app");
