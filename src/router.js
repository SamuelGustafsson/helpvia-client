import Vue from "vue";
import Router from "vue-router";

import startpage from "./components/startpage.vue";
import missions from "./components/missions.vue";

import loginRoutes from "./login/routes"
Vue.use(Router);

export default  new Router({
    mode:"history",
    routes: [
        { 
            path: "/", 
            name: "home", 
            component: startpage 
        },
        { 
            path: "/missions", 
            name: "missions", 
            component: missions 
        },
        ...loginRoutes,
    ]
})

  