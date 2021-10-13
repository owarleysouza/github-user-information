<template>
    <div class="header-container">
        <h2>GitInfo</h2>
        <div>
            <input v-model.trim="userLoginSearch" placeholder="Digite um usuário" @keyup.enter="searchUser(userLoginSearch)"/>
            <button type="button" @click="searchUser(userLoginSearch)">Pesquisar</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        name: "Header",
        data(){
            return {
                user: {},
                repos: [],
                userLoginSearch: '',
            }
        },
        methods:{
            async searchUser(userLogin){
                const responseUser = await axios.get(`https://api.github.com/users/${userLogin}`);
                this.user = responseUser.data;
                this.$store.commit('loadUser', this.user);

                const responseRepos = await axios.get(`https://api.github.com/users/${userLogin}/repos`);
                this.repos = responseRepos.data;
                this.$store.commit('loadRepos', this.repos);
                console.log(this.$store.state.repos)
            },
            
        }
    }
</script>

<style>
    .header-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 0 6.4rem 0 4.4rem;
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
        width: 18rem;
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
        cursor: pointer;
    }

    p{
        color: #fff;
    }
</style>