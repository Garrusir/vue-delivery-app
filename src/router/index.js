import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vendor/:id',
    name: 'Vendor',
    component: () => import('../views/Vendor.vue'),
  },
  {
    path: '/checkout',
    name: 'Order',
    component: () => import('../views/Order.vue'),
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration.vue'),
  },
  {
      path: '/history',
      name: 'History',
      component: () => import('../views/OrderHistory.vue'),
  },
  {
      path: '/admin/:resId',
      name: 'Admin',
      meta: {
        role: 1,
      },
      component: () => import('../views/Admin/index.vue'),
      // children: [
      //   {
      //     path: ':id',
      //     component: () => import('../views/Admin/AdminEditItem.vue')
      //   },
      // ]
  },
  {
    path: '/admin/:resId/:id',
    name: 'EditDish',
    meta: {
      role: 1,
    },
    component: () => import('../views/Admin/AdminEditItem.vue'),
  },
  {
    path: '/admin/:resId/edit',
    name: 'EditVendor',
    meta: {
      role: 1,
    },
    component: () => import('../views/Admin/AdminEditVendor.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.name === 'History' && !store.getters.isAuthenticated) next({ name: 'Home' })
  // else next()

  else if (to.meta.role && store.getters.getUser && store.getters.getUser.role  !== to.meta.role) next({ name: 'Home' })
  // else next()

  else if (to.params.resId && !store.getters.getUser) next({ name: 'Home' })  
  else next()  
})

export default router
