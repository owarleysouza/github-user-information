<template>
    <UserCard userName="Warley Souza" userLogin="warleys14" />
    <UserInfos/>
    <UserRepos/>
</template>


<script>
    import UserCard from './User/UserCard.vue';
    import UserInfos from './User/UserInfos.vue';
    import UserRepos from './Repos/UserRepos.vue';

    export default{
        name: "HomeUser",
        components:{
            UserCard,
            UserInfos,
            UserRepos,
        }
    }
</script>