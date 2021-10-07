<template>
    <div class="card-container">
        <InfoCard/>
        <InfoCard/>
        <InfoCard/>
        <InfoCard/>
    </div>
</template>


<script>
    import InfoCard from './InfoCard.vue';

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