import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'LoginPage',
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: () => import('../views/HomePage.vue'),
    children: [
      {
        path: '/MakeWishPage',
        name: 'MakeWishPage',
        component: () => import('../views/MakeWishPage.vue')
      },
      {
        path: '/WishListPage',
        name: 'WishListPage',
        component: () => import('../views/WishListPage.vue')
      },
      {
        path: '/MyWishPage',
        name: 'MyWishPage',
        component: () => import('../views/MyWishPage.vue')
      },
      {
        path: '/PersonalizePage',
        name: 'PersonalizePage',
        component: () => import('../views/PersonalizePage.vue')
      },
    ]
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: () => import('../views/LoginPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
