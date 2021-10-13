import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
    strict: true,
    state: {
        user: {},
        repos: []
    },
    mutations: {
        loadUser(state, payload){
            state.user = payload;
        },
        loadRepos(state, payload){
            state.repos = payload;
        }
    },
})
