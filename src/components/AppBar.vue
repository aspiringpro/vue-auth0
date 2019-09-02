<template>
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
</template>

<script>
export default {
};
</script>
