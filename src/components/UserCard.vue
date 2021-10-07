<template>
    <div class="user-profile">
        <img alt="User Photo" src="../assets/blank-avatar.png">
        <div class="user-infos">
            <span class="user-name">Warley Souza</span>
            <span class="user-login">warleys14</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserCard"
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