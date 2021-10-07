<template>
    <div class="user-profile">
        <img alt="Not User" src="../assets/not-user.png">
        <div class="user-infos">
            <h1>Warley Souza</h1>
            <span>@warleys14</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserCard"
    }
</script>


<style>
    .user-profile{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 50px;  
    }
    .user-infos{
        display: flex;
        flex-direction: column;
    }

    img{
        height: 150px;
        width: 150px;
    }
</style>