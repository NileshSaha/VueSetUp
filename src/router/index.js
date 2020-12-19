import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


// function guardMyroute(to, from, next)
// {
//   var isAuthenticated= false;

//   if(localStorage.getItem('userId'))
//     isAuthenticated = true;
//   else
//     isAuthenticated= false;
//   if(isAuthenticated)
//   {
//     next(); // allow to enter route
//   }
//   else
//   {
//     next({name: 'login'}); // go to '/login';
//   }
// }

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("@/views/auth/login.vue"),
    meta: {
      rule: "editor"
    }
  },
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/pages/Home.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
