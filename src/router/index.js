import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    path: '/employees/:id',
    name: 'employee-details',
    component: () => import('../views/EmployeeDetail'),
    meta: {
      auth: true
    }
  },
  {
    path: '/add-employees',
    name: 'employee-create',
    component: () => import('../views/AddEmployee'),
    meta: {
      auth: true
    }
  },
  {
    path: '/edit-employees',
    name: 'employee-edit',
    component: () => import('../views/EditEmployee'),
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.auth) {
    if (localStorage.token) {
      next()
    }
  } else {
    if (to.name !== 'Login') {
      next('/login')
    } else {
      next('/')
    }
  }
  next()
})

export default router
