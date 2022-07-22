import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import piniaPersist from "pinia-plugin-persist";
import router from "./router/index";
// import { globalRegister } from "./global";
import "@/assets/style/index.scss";
import "@/assets/iconfont/index.scss";

import Axios from "axios";
import directive from "@/directives";
import "@/utils/interceptors";
import AppFooter from "./views/common/Footer.vue";
import i18n from "@/locales/index";

const app = createApp(App);
app.component("AppFooter", AppFooter);

store.use(piniaPersist);
app.use(store);

// app.use(globalRegister);
app.use(router);
app.use(directive);
app.use(i18n);
app.mount("#app");
