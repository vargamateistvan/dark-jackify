import { createApp } from "vue";
import "./style.css";
import "./components/dark-jackify/dark-jackify.scss";
import App from "./App.vue";
import store from "./store";

createApp(App).use(store).mount("#app");
