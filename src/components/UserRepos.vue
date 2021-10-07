<template>
    <div class="card-container">
        <RepoCard/>
        <RepoCard/>
        <RepoCard/>
        <RepoCard/>
    </div>
</template>


<script>
    import RepoCard from './RepoCard.vue';

    export default {
        name: "UserRepos",
        components:{
            RepoCard,
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