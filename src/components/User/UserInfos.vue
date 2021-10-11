<template>
    <div class="card-container">
        <InfoCard title= "Followers" :quantity="10"/>
        <InfoCard title= "Following" :quantity="20"/>
        <InfoCard title= "Gists" :quantity="15"/>
        <InfoCard title= "Repos" :quantity="30"/>
    </div>
</template>


<script>
    import InfoCard from '../User/InfoCard.vue';

    export default {
        name: "UserInfos",
        components:{
            InfoCard,
        }
    }
</script>


<style scoped>
    .card-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
</style>