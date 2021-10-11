<template>
    <div class="info-container">
        <h3>{{title}}</h3>
        <span>{{quantity}}</span>
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
        border: none;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        height: 9rem;
        width: 15rem;
        background-color: #fff;
        margin: 3rem 4.5rem;
    }

    h3{
        color: #42B883;
    }

    span{
        font-size: 3.2rem;
        font-weight: bolder;
        color: #42B883;
    }
</style>