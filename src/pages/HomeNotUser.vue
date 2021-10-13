<template>
    <div class="container">
        <img alt="Not User" src="../assets/not-user.png">
        <h3>Nenhum usuário pesquisado ainda... </h3>
    </div>
</template>

<script>
   export default {
       name: "HomeNotUser"
   }
</script>

<style scoped> 
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 5rem 0;
    }

    img{
        height: 250px;
        width: 250px;
    }
</style>