<template>
    <div class="card-container">
        <RepoCard repositoryName="study-vue-repo" repositoryLink="warleys14/study-vue-repo"/>
        <RepoCard repositoryName="study-react-repo" repositoryLink="warleys14/study-react-repo"/>
        <RepoCard repositoryName="study-go-repo" repositoryLink="warleys14/study-go-repo"/>
        <RepoCard repositoryName="study-js-repo" repositoryLink="warleys14/study-js-repo"/>
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