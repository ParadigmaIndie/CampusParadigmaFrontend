import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LogIn from '../views/LogIn.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { rutaProtegida: true }
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.rutaProtegida) {
    if (store.getters.usuarioAutenticado) {
      next();
    }
    else {
      next('/ingreso')
    }
  } else {
    next();
  }
})

export default router
