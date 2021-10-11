<template>
    <div class="info-container">
        <span class="title">{{title}}</span>
        <span class="quantity">{{quantity}}</span>
    </div>
</template>


<script>
    export default{
        name: "InfoCard",
        props: {
            title: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            }
        }
    }
</script>


<style scoped>
    .info-container{
        display: flex;
        flex-direction: column;
        padding: 5px 0px;
        padding-right: 10px;
        gap: 5px 0px;
    }

    .title{
        color: #42B883;
        font-weight: bolder;
        font-size: 0.8rem;
    }

    .quantity{
        font-size: 1.2rem;
        font-weight: bolder;
        color: #42B883;
    }
</style>