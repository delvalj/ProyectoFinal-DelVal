import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import LoginRegister from "@/Views/LoginRegister";
import InformacionProductos from "@/components/InformacionProductos";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginRegister
  },

  {
    path: '/productos',
    name: 'Productos',
    component: InformacionProductos
  },
  // {
  //   path: '/productos',
  //   name: 'InformacionProductos',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
