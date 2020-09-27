import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import Register from '@/components/Register.vue'
import Submit from '@/components/Submit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/register/:eventId',
    name: 'Register',
    component: Register
  },
  { 
    path: '/submit',
    name: 'Submit',
    component: Submit
  }
]

const router = new VueRouter({
  routes
})

export default router
