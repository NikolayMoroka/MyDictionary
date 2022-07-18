<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    pathname: "",
  }),

  watch: {
    'window.location.pathname': function() {
      this.pathname = window.location.pathname
    }
  },

  // mounted() {
  //  this.pathname = window.location.pathname
  // }
};
</script>

<style>
  body {
    width: 100vw;
  }
</style>
