import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Auth from '../views/Auth.vue'
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import UpdateProfile from '@/components/UpdateProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: LoginForm,
      },
      {
        path: '/register',
        name: 'Register',
        component: RegisterForm,
      },
      {
        path: '/update',
        name: 'Update',
        component: UpdateProfile,
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    let jwt = localStorage.getItem('jwt')
    if ((to.fullPath == '/login' && jwt != null) || (to.fullPath == '/register' && jwt != null)) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
})

export default router
