<template>
  <v-app>
    <v-app-bar app>

      <v-toolbar-title class="headline text-uppercase">
        <span>VUE + </span>
        <span class="font-weight-light">Auth0</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" class="mr-2">Home</v-btn>
      <v-btn to="/about" class="mr-2">About</v-btn>
      <v-btn to="/contact" class="mr-2">Contact</v-btn>
      <v-btn to="/members" class="mr-2">Members Only</v-btn>
      <v-btn class="mr-2" @click="login" v-if="!this.$store.state.userIsAuthorized" color="primary">Signup/Login</v-btn>
      <v-btn class="mr-2" @click="logout" v-if="this.$store.state.userIsAuthorized">Logout</v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => {
    return {
      clientId: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID
    }
  },
  methods: {
    logout(){
      console.log('Logging Out');
      this.$store.dispatch('auth0Logout');

    },
    login(){
      this.$store.dispatch('auth0Login');
      console.log('Logging In');
    },
  },
  beforeCreate(){

  }
};
</script>
