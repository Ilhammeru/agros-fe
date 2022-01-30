<template>
  <div id="app">
    <Navbar />
    <loading :active="isLoading"
                 :can-cancel="false"
                 :is-full-page="true"/>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import './assets/css/general.scss'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  computed: {
    isLoading() {
      return this.$store.getters["global/isLoading"]
    }
  }
}
</script>

<style lang="scss">
// font
@font-face {
  font-family: "inter-regular";
  src: local("inter-regular"),
   url(./assets/font/inter/Inter-Regular.woff) format("truetype");
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'inter-regular'
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
