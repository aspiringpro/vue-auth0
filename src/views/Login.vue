<template>
  <v-container><v-btn @click="login">Login</v-btn></v-container>

</template>
<script>
export default {
  name: 'Login',
  methods: {
    login(){
      //this.$store.dispatch('auth0Login');
      console.log('Logging In')
    },
  },
}
</script>
