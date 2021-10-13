import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
    strict: true,
    state: {
        user: {},
        repos: [],
        searchedUser: false
    },
    mutations: {
        loadUser(state, payload){
            state.user = payload;
            state.searchedUser = true;
        },
        loadRepos(state, payload){
            state.repos = payload;
        }
    },
})
