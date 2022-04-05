import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddBookView from '../views/AddBookView.vue'
import EditBookView from '../views/EditBookView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addBook',
    name: 'addBook',
    component: AddBookView
  },
  {
    path: '/editBook/:id',
    name: 'editBook',
    component: EditBookView
  }
]

const router = new VueRouter({
  routes
})

export default router
