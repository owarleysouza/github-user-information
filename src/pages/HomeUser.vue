<template>
    <Profile
        userName="Warley Souza"
        userLogin="warleys14"
        :userFollowers="20"
        :userFollowings="10"
        :userRepos="15"
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