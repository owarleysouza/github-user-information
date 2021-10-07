<template>
  <Header/>
  <HomeUser v-if="!searchedUser"/>
  <UserCard v-if="searchedUser"/>
</template>

<script>
import Header from './components/Header.vue';
import HomeUser from './components/HomeUser.vue';
import UserCard from './components/UserCard.vue';


export default {
  name: 'App',
  data() {
    return {
      searchedUser: false
    } 
  },
  components: {
    HomeUser,
    Header,
    UserCard
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
}
</style>
