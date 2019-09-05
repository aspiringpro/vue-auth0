<template>
  <v-app-bar app>

    <v-toolbar-title class="headline text-uppercase">
      <span>VUE + </span>
      <span class="font-weight-light">Auth0</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn depressed to="/" class="mr-2 hidden-sm-and-down"><v-icon left>home</v-icon>
      <span>Home</span>
    </v-btn>
    <v-btn to="/about" class="mr-2 hidden-sm-and-down">About</v-btn>
    <v-btn to="/contact" class="mr-2 hidden-sm-and-down">Contact</v-btn>
    <v-btn to="/members" class="mr-2 hidden-sm-and-down">Members Only</v-btn>
    <v-btn class="mr-2 hidden-sm-and-down" @click="login" v-if="!this.$store.state.userIsAuthorized" color="primary">Signup/Login</v-btn>
    <v-btn class="mr-2 hidden-sm-and-down" @click="logout" v-if="this.$store.state.userIsAuthorized">Logout</v-btn>
    <v-menu open-on-hover bottom left offset-y>
            <template v-slot:activator="{ on }">
              <v-app-bar-nav-icon v-on="on" class="hidden-md-and-up"></v-app-bar-nav-icon>

            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click=""
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
      items: [
        { title: 'Home' },
        { title: 'About' },
        { title: 'Contact' },
        { title: 'Members' },
        { title: 'Signup/Login' },
      ],
      clientId: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID
    }),
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
};
</script>
