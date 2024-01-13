import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ItemDetail from '@/views/ItemDetail.vue'
import AllWords from '@/views/AllWords.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import EmptyRouterView from '@/components/EmptyRouterView.vue'
import Error from '@/views/Error.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/words',
    component: EmptyRouterView,
    children: [
      {
        name: 'words',
        path: '',
        component: AllWords
      },
      {
        name: 'words:id',
        path: ':id',
        component: ItemDetail
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/*',
    name: 'Error',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
