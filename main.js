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

       if(localStorage.getItem("userId")){
         next();
       }else{
         next('/login');

       }

  }else {
        next();

   }
})
//
// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     console.log(config);
//     config.data.mermer = "3"
//     return config
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error)
// });
//
// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     return response
// }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error)
// });
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
