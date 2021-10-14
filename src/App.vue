<template>
  <Header/>
  <HomeNotUser v-if="!hasSearchedUser"/>
  <HomeUser v-if="hasSearchedUser"/>
</template>

<script>
import Header from './components/Header.vue';
import HomeNotUser from './pages/HomeNotUser.vue';
import HomeUser from './pages/HomeUser.vue';

export default {
  name: 'App',
  components: {
    Header,
    HomeNotUser,
    HomeUser,
  },
  computed:{
    hasSearchedUser(){
      return this.$store.state.searchedUser //valor que está na store, e sua referência é acessada e retornada em hasSearchedUser, assim HomeUser ou HomeNotUser é renderizado
    }
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
  min-height: 100vh;
  max-height: fit-content;
  min-width: 100vw;
  max-width: fit-content;
}

html{
  background-color: #24292D;
}
</style>
