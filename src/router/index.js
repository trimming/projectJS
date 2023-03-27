import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '../views/CatalogView.vue'
import CartView from '../views/CartView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/catalog',
    name: 'Catalog',
    component: CatalogView
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
