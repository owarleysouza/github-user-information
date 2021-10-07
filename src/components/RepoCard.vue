<template>
    <div class="repo-container">
        <img alt="repo-icon" src="../assets/folder.png"/>
        <span>study-vue-repo</span>
        <a>warleys14/study-vue-repo</a>
    </div>
</template>

<script>
    export default{
        name: "RepoCard",
    }
</script>


<style scoped>
    .repo-container{
        border: none;
        border-radius: 10px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 9rem;
        width: 15rem;
        background-color: #fff;
        margin: 3rem 4.5rem;
        gap: 5px;
    }

    img{
        height: 40px;
        width: 40px;
    }

    span{
        color: #42B883;
        font-weight: bolder;
    }

    a{
        color: #0440c0;
        text-decoration: underline blue;
    }

</style>