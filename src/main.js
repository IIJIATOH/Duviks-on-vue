import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import DocumentPage from "./components/Pages/DocumentPage.vue";
import FrontPage from "./components/Pages/FrontPage.vue";
import AboutPage from "./components/Pages/AboutPage.vue";
import Popupform from "./components/popup/PopupForm.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: FrontPage },
    { path: "/doc", component: DocumentPage },
    { path: "/about", component: AboutPage }
  ]
});

const app = createApp(App);
app.component("popup-form", Popupform);
app.use(router);
app.mount("#app");
