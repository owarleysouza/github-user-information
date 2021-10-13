<template>
    <Profile
        userName="Warley Souza"
        userLogin="warleys14"
        :userFollowers="$store.state.user.followers"
        :userFollowings="$store.state.user.following"
        :userRepos="$store.state.user.public_repos"
    />
    <UserRepos/>
</template>


<script>
    import Profile from '../components/Profile/Profile.vue';
    import UserRepos from '../components/Repos/UserRepos.vue';

    export default{
        name: "HomeUser",
        components:{
            Profile,
            UserRepos,
        }
    }
</script>