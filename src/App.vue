<template>
  <Header/>
  <HomeNotUser v-if="!searchedUser"/>
  <HomeUser v-if="searchedUser"/>
</template>

<script>
import Header from './components/Header.vue';
import HomeNotUser from './pages/HomeNotUser.vue';
import HomeUser from './pages/HomeUser.vue';

export default {
  name: 'App',
  data() {
    return {
      searchedUser: true
    } 
  },
  components: {
    Header,
    HomeNotUser,
    HomeUser,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #24292D;
  height: 100vh;
}
</style>
