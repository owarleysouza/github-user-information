<template>
    <div class="card-container">
        <InfoCard title= "Followers" :quantity="userFollowers"/>
        <InfoCard title= "Following" :quantity="userFollowings"/>
        <InfoCard title= "Repositories" :quantity="userRepos"/>
    </div>
</template>


<script>
    import InfoCard from './InfoCard.vue';

    export default {
        name: "UserStats",
        components:{
            InfoCard,
        },
        props:{
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
    .card-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;
        margin-top: 0.8rem;
    }
</style>