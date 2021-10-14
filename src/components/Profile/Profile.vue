<template>
    <div class="user-profile-container">
        <img alt="User Photo" :src="$store.state.user.avatar_url">
        <div class="user-infos">
            <span class="user-name">{{$store.state.user.name}}</span>
            <span class="user-login">{{$store.state.user.login}}</span>
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
    .user-profile-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 30px;
        margin-top: 1.5rem;  
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
        margin-left: 0.3rem;
    }

    .user-login{
        font-size: 1.5rem;
        color: #42B883;
        font-weight: bolder;
        margin-left: 0.3rem;
    }

    img{
        height: 150px;
        width: 150px;
        border-radius: 2rem;
        border: #42B883 solid;
    }

    @media (max-width: 500px){
        .user-profile-container{
            display: flex;
            flex-direction: column;
        }

        .user-infos{
            display: flex;
            flex-direction: column;
            align-items: center;
    }
    }

</style>