import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Members from './views/Members.vue'
import Login from './views/Login.vue'
import Store from './store'
import Callback from './views/Callback.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/members',
      name: 'members',
      component: Members,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }

  ]
});

router.beforeEach( (to,from,next)=>{
  //Allow finishing callback url for logging in
  if(to.matched.some(record=>record.path == "/callback")){
    console.log('router.beforeEach found /callback url');
    Store.dispatch('auth0HandleAuthentication');
    next(false);
  }
  //assume the user is initially not logged in
  let routerAuthCheck = false;
  //verify all the proper local access variables are present for auth0HandleAuthentication
  if ( localStorage.getItem('access_token') && localStorage.getItem('id_token') && localStorage.getItem('expires_at')){
    console.log('found all the local storage tokens');
    //check whether the current time is past the Access Tokens expiration timeout
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    //set localAuthTokenCheck true if unexpires / false if expired
    routerAuthCheck = new Date().getTime() < expiresAt;
  }




    Store.commit('setUserIsAuthenticated', routerAuthCheck); //updates State setUserIsAuthenticated to either True or False

  // if a user if trying to go "to" a route it's going to check and see if there is a meta property on that record of "requiresAuth"
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if user is Authenticated
    if (routerAuthCheck) {
      //user is Authenticated
      next();
    }
    else {
      //user is NOT authenticated
      router.replace('/');
    }
  }
  else {
    //if it's not a protected page, then we allow it to load by calling next
    next();
  }
});

export default router;
