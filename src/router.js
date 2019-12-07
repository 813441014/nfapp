import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/',
            redirect:"/register"
        },
        {
            path:"/mainroute",
            component:resolve => require(['./components/main/main.vue'], resolve),
            children:[
                {
                    path:"/",
                    redirect:"index"
                },
                {
                    path:"index",
                    name:"index",
                    component:resolve => require(['./components/index/index.vue'], resolve)
                },
                {
                    path:"person",
                    name:"person",
                    component:resolve => require(['./components/person/person.vue'], resolve)
                },
            ]
        },
        {
            path:"/login",
            name:"login",
            component:resolve => require(['./components/login/login.vue'], resolve)
        },
        {
            path:"/register",
            name:"register",
            component:resolve => require(['./components/register/register.vue'], resolve)
        },
        {
            path:"/register_pass",
            name:"register_pass",
            component:resolve => require(['./components/register/register_pass.vue'], resolve)
        },
        {
            path:"/register_news",
            name:"register_news",
            component:resolve => require(['./components/register/register_news.vue'], resolve)
        },
        {
            path:"/index_details",
            name:"index_details",
            component:resolve => require(['./components/index/index_details.vue'], resolve),
            meta: {
                requireAuth: true
            }
        },
        {
            path:"/publish",
            name:"publish",
            component:resolve => require(['./components/publish/publish.vue'], resolve),
            meta: {
                requireAuth: true
            }
        },
        {
            path:"/my_publish",
            name:"my_publish",
            component:resolve => require(['./components/person/publish.vue'], resolve),
            meta: {
                requireAuth: true
            }
        },
        {
            path:"/publish_edit",
            name:"publish_edit",
            component:resolve => require(['./components/person/publish_edit.vue'], resolve),
            meta: {
                requireAuth: true
            }
        },
        {
            path:"/publish_person_edit",
            name:"publish_person_edit",
            component:resolve => require(['./components/person/publish_person_edit.vue'], resolve),
            meta: {
                requireAuth: true
            }
        },
        {
            path:"/publish_person",
            name:"publish_person",
            component:resolve => require(['./components/publish/publish_person.vue'], resolve),
            meta: {
                requireAuth: true
            }
        },
        {
          path:"/search",
        name:"search",
        component:resolve => require(['./components/search/search.vue'], resolve),
        meta: {
            requireAuth: true
        },

        },
        {
            path: "/search_details",
            name: "search_details",
            component: resolve => require(['./components/search/details.vue'], resolve),
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/notice",
            name: "notice",
            component: resolve => require(['./components/notice/notice.vue'], resolve),
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/service",
            name: "service",
            component: resolve => require(['./components/service/service.vue'], resolve),
            meta: {
                requireAuth: true
            }
        },
     {
         path: "/collect",
         name: "collect",
         component: resolve => require(['./components/collect/collect.vue'], resolve),
         meta: {
             requireAuth: true
         }
     },
        {
            path: "/person_edit",
            name: "person_edit",
            component: resolve => require(['./components/person/person_edit.vue'], resolve),
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/news",
            name: "news",
            component: resolve => require(['./components/person/news.vue'], resolve),
            meta: {
                requireAuth: true
            }
        },
        {
            path: "/edit_pass",
            name: "edit_pass",
            component: resolve => require(['./components/person/edit_pass.vue'], resolve),
            meta: {
                requireAuth: true
            }
        }
    ]
})
