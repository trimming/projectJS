import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '../views/CatalogView.vue'
import CartView from '../views/CartView.vue'
const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: CatalogView
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
