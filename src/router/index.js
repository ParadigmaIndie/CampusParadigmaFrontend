import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'


import Home from '../views/Home.vue'
import LogIn from '../views/LogIn.vue'
import Videos from '../views/Videos.vue'
import Courses from '../views/Courses.vue'
import Video from '../views/Video.vue'
import SignUp from '../views/SignUp.vue'


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
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "about" */ '../views/Perfil.vue'),
  },
  {
    path: '/courses/:coursestyp',
    name: 'Courses',
    component: Courses,
    meta: { rutaProtegida: true }
  },
  {
    path: '/videos/:courseid',
    name: 'Videos',
    component: Videos,
    //meta: { rutaProtegida: true }
  },
  {
    path: '/video/:videoid',
    name: 'Video',
    component: Video,
    //meta: { rutaProtegida: true }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { rutaProtegida: true }
  },
  {
    path: '/createCourse',
    name: 'CreateCourse',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateCourse.vue'),
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
