import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Maestros from '../views/Maestros.vue'
import Alumnos from '../views/Alumnos.vue'
import Materias from '../views/Materias.vue'
import Grupos from '../views/Grupos.vue'
import DetalleMaes from '@/components/DetalleMaes.vue'
import DetalleAlum from '@/components/DetalleAlum.vue'
import DetalleMate from '@/components/DetalleMate.vue'
import DetalleGrup from '@/components/DetalleGrup.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/maestros',
    name: 'maestros',
    component: Maestros
  },
  {
    path: '/detallemaes',
    name: 'detallemaes',
    component: DetalleMaes,
    props: true
  },
  {
    path: '/alumnos',
    name: 'alumnos',
    component: Alumnos
  },
  {
    path: '/detallealum',
    name: 'detallealum',
    component: DetalleAlum,
    props: true
  },
  {
    path: '/materias',
    name: 'materias',
    component: Materias
  },
  {
    path: '/detallemate',
    name: 'detallemate',
    component: DetalleMate,
    props: true
  },
  {
    path: '/grupos',
    name: 'grupos',
    component: Grupos
  },
  {
    path: '/detallegrup',
    name: 'detallegrup',
    component: DetalleGrup,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
