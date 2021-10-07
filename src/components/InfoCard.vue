<template>
    <div class="info-container">
        <h4>Followers</h4>
        <span>60</span>
    </div>
</template>


<script>
    export default{
        name: "InfoCard"
    }
</script>


<style scoped>
    .info-container{
        border: none;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        height: 9rem;
        width: 11rem;
        background-color: #fff;
        margin: 3rem 4.5rem;
    }

    h4{
        color: #42B883;
    }

    span{
        font-size: 3.2rem;
        font-weight: bolder;
        color: #42B883;
    }
</style>