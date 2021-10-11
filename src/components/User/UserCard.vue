<template>
    <div class="user-profile">
        <img alt="User Photo" src="../../assets/blank-avatar.png">
        <div class="user-infos">
            <span class="user-name">{{userName}}</span>
            <span class="user-login">{{userLogin}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserCard",
        props: {
            userName:{
                type: String,
                required: true
            },
            userLogin:{
                type: String,
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
    }

    img{
        height: 150px;
        width: 150px;
    }
</style>