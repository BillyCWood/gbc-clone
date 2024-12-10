import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About/AboutView.vue'),
    },
    {
      path: '/welcome',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About/NewToGraceView.vue'),
    },
    {
      path: '/about/radio',
      name: 'radio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About/RadioView.vue'),
    },
    {
      path: '/sermons',
      name: 'sermons',
      component: () => import('../views/SermonsView.vue'),
    },
    {
      path: '/ministries',
      name: 'ministries',
      component: () => import('../views/Ministries/MinistriesView.vue'),
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventViews/EventsView.vue'),
    },
    {
      path: '/facility-use-request',
      name: 'facility',
      component: () => import('../views/EventViews/FacilityView.vue'),
    },
    {
      path: '/give',
      name: 'give',
      component: () => import('../views/GiveView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router
