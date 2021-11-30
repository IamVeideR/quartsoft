import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        name: 'Film',
        path: 'films/:id',
        component: () => import(/* webpackChunkName: "film" */ '../components/Film.vue')
      },
      {
        name: 'People',
        path: 'people/:id',
        component: () => import(/* webpackChunkName: "people" */ '../components/People.vue')
      },
      {
        name: 'Planet',
        path: 'planets/:id',
        component: () => import(/* webpackChunkName: "planet" */ '../components/Planet.vue')
      },
      {
        name: 'Starship',
        path: 'starships/:id',
        component: () => import(/* webpackChunkName: "starship" */ '../components/Starship.vue')
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
