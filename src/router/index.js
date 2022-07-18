import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Idioms from '../views/Idioms.vue'
import Auth from '../components/Auth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/idioms',
    name: 'Idioms',
    component: Idioms,
    props: true
  },
  {
    path: '/main_page',
    name: 'MainPage',
    component: MainPage,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
