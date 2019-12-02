import Vue from 'vue'
import App from './App.vue'
import router from "./router"
Vue.config.productionTip = false
import "./assets/css/common.css"
import "./assets/js/common.js"
import 'vant/lib/index.css';
import axios from 'axios';
Vue.prototype.mainUrl= "http://llf.zjqqbdf.cn/nongfu/app/";
Vue.prototype.ajax= axios;
Vue.prototype.qs= qs;
import qs from 'qs';
Vue.use(axios)
Vue.use(qs)
import "./assets/css/iconfont.css"
import { Area } from 'vant';
import { Popup } from 'vant';
Vue.use(Area);
Vue.use(Popup);
import 'swiper/css/swiper.css';
import { Picker } from 'vant';
Vue.use(Picker);
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth) { // 判断该路由是否需要登录权限

       if(sessionStorage.getItem("userId")){
         next();
       }else{
         next('/login');

       }

  }else {
        next();

   }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
