<template>
  <Header/>
  <HomeNotUser v-if="!searchedUser"/>
  <UserCard v-if="searchedUser"/>
  <UserInfos/>
  <UserRepos/>
</template>

<script>
import Header from './components/Header.vue';
import HomeNotUser from './components/HomeNotUser.vue';
import UserCard from './components/UserCard.vue';
import UserInfos from './components/UserInfos.vue';
import UserRepos from './components/UserRepos.vue'

export default {
  name: 'App',
  data() {
    return {
      searchedUser: true
    } 
  },
  components: {
    HomeNotUser,
    Header,
    UserCard,
    UserInfos,
    UserRepos
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
