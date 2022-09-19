import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from '@/components/HomeComponent'
import LoginComponent from '@/components/LoginComponent'
import SignupComponent from '@/components/SignupComponent'
import TaskComponent from '@/components/TaskComponent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: HomeComponent
  },
  {
    path: '/login', component: LoginComponent
  },
  {
    path: '/register', component: SignupComponent
  },
  {
    path: '/tasks', component: TaskComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
