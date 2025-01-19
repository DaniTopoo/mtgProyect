import { createApp } from "vue";
import router from "/src/router/router.js";
import App from "./App.vue";
import "./style.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
