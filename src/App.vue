<template>
  <v-app>
    <AppBar/>

    <v-content>
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
import AppBar from './components/AppBar';

export default {
  name: 'App',
  components: {
    AppBar,
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
