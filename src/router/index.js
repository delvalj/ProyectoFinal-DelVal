import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRegister from "@/Views/LoginRegister";
import InformacionProductos from "@/components/InformacionProductos";
import Listado from "@/components/Listado";
import Carrito from "@/components/Carrito";
import probando from "@/components/probando";

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

  {
    path: '/listado',
    name: 'Listado',
    component: Listado
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: Carrito
  },

  {
    path: '/probando',
    name: 'probando',
    component: probando
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
