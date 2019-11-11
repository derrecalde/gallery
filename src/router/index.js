import Vue from 'vue'
import Router from 'vue-router'
import { firebase } from '@/config'

// Import views
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Admin from '@/views/Admin.vue'
import Details from '@/views/Details.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/details/:img',
      name: 'Details',
      component: Details,
      props: true
    }
  ]
})

// ----  This part is to check if the current is connected before go in a requested view ---- //
router.beforeEach( (to, from, next)=>{
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some( record => record.meta.requiresAuth );
  
  if ( requiresAuth && !currentUser ) { 
    next('login') 
  } else if ( !requiresAuth && currentUser ) {
    next('admin')
  } else {
    next()
  }

})

export default router