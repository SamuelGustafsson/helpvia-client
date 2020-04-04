import Vue from "vue";
import Router from "vue-router";

import startpage from "./components/startpage.vue";

import loginRoutes from "./login/routes"
import RegisterRoutes from "./register/routes"
import MissionsRoutes from "./missions/routes"

Vue.use(Router);

export default new Router({
    mode:"history",
    routes: [
        { 
            path: "/", 
            name: "home", 
            component: startpage 
        },
        ...loginRoutes,
        ...RegisterRoutes,
        ...MissionsRoutes
    ]
})

  