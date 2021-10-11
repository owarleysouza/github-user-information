<template>
    <div class="user-profile">
        <img alt="User Photo" src="https://avatars.githubusercontent.com/u/29213158?v=4">
        <div class="user-infos">
            <span class="user-name">{{userName}}</span>
            <span class="user-login">{{userLogin}}</span>
            <UserStats 
                :userFollowers="userFollowers"
                :userFollowings="userFollowings"
                :userRepos="userRepos"
            />
        </div>
    </div>
</template>


<script>
    import UserStats from './components/UserStats.vue';

    export default {
        name: "UserCard",
        components:{
            UserStats
        },
        props: {
            userName:{
                type: String,
                required: true
            },
            userLogin:{
                type: String,
                required: true
            },
            userFollowers:{
                type: Number,
                required: true
            },
            userFollowings:{
                type: Number,
                required: true
            },
            userRepos:{
                type: Number,
                required: true
            }     
        }

    }
</script>


<style scoped>
    .user-profile{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 30px;  
    }
    .user-infos{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .user-name{
        font-size: 2rem;
        font-weight: bolder;
        color: #42B883;
    }

    .user-login{
        font-size: 1.5rem;
        color: #42B883;
        font-weight: bolder;
    }

    img{
        height: 150px;
        width: 150px;
        border-radius: 2rem;
        border: #42B883 solid;
    }
</style>