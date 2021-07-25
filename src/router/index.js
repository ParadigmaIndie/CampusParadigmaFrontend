import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LogIn from '../views/LogIn.vue'
import Courses from '../views/Courses.vue'
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
    path: '/courses/:coursestyp',
    name: 'Courses',
    component: Courses,
    meta: { rutaProtegida: true }
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
      next('/login')
    }
  } else {
    next();
  }
})

export default router
