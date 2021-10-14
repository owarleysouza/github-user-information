<template>
    <div class="card-container">
        <RepoCard 
            v-for="repo in this.$store.state.repos"
            :key="repo.id"
            :repositoryName="repo.name"
            :repositoryLink="repo.full_name"/>
    </div>
    <p>{{reposData}}</p>
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
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 600px){
        .card-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    @media (min-width: 600px) and (max-width: 1080px) {
        .card-container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            justify-content: center;
        }
    }
</style>