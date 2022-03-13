import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Explore from '../views/Explore.vue'
import Library from '../views/Library.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/library',
    name: 'Library',
    component: Library
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
