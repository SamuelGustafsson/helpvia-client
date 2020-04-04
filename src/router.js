import Vue from "vue";
import Router from "vue-router";

import homeRoutes from "./home/routes";
import loginRoutes from "./login/routes";
import registerRoutes from "./register/routes";
import missionsRoutes from "./missions/routes";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        ...homeRoutes,
        ...loginRoutes,
        ...registerRoutes,
        ...missionsRoutes
    ],
});
