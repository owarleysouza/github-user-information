<template>
    <div class="header-container">
        <h2>GitInfo</h2>
        <div>
            <input v-model.trim="userLogin" placeholder="Digite um usuário"/>
            <button type="button" @click="searchUser(userLogin)">Pesquisar</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        name: "Header",
        data(){
            return {
                userLogin: '',
                userData: {}
            }
        },
        methods:{
            async searchUser(userLogin){
                const response = await axios.get(`https://api.github.com/users/${userLogin}`);
                this.userData = response.data;
                console.log(this.userData);
            }
        }
    }
</script>

<style>
    .header-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 0 4.8rem;
    }

    h2{
        color: #42B883;
        font-weight: bolder;
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }

    input{
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-weight: bold;
        border: none;
        border-radius: 5px 0px 0px 5px;
        height: 2rem;
        width: 20rem;
        padding-left: 10px;
    }

    button{
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-weight: bolder;
        border: none;
        border-radius: 0px 5px 5px 0px;
        height: 2.1rem;
        background-color: #42B883;
        color: white;
        padding: 8px;
    }

    p{
        color: #fff;
    }
</style>