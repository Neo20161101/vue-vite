import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import 'ant-design-vue/dist/antd.less';

const originalReplace = router.replace;
router.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
const app = createApp(App);
app.config.productionTip = false
app.use(router)
app.mount('#app')
