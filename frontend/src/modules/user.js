//ts-check
import axios from 'axios'
import decode from "jwt-decode";
import router from "../router/index"

const url = 'http://localhost:4000/api'
axios.defaults.baseURL = url

export default { 
    namespaced: true,
    state: {
        user: '',
        token: localStorage.getItem('token') || '',
        loading: false,
    },
    mutations:{
        setUser(state, payload) {
            state.token = payload
            if(payload){
                state.user = decode(payload)
            }else{
                state.user = ''
            }
        },
        
        // setLoading: function(state, payload){
        //     state.loading = payload
        // },
        // setUsers: function(state, payload){
        //     state.users = payload
        // },
        // setUser: function(state, payload){
        //     state.users.push(payload);
        // },

        // updateUser: function(state, payload){
        //     const _id = payload._id;
        //     state.users.forEach(item => {
        //         if(item._id === _id) {
        //             return item = payload;
        //         }
        //     });
        // },
        // deleteUser: function(state, payload){
        //     const _id = payload._id;
        //     state.users = state.users.filter(item => item._id !== _id);
        // },
    },
    actions:{
        saveUser: async function({commit}, item){
            try {
                const res = await axios.post('/login', item);
                const token = res.data.token;
                localStorage.setItem('token', token)
                commit('setUser', token)
                return res
                //router.push({name: 'Notes'})
            } catch (error) {
                return error.response;
            }
        },
        logOut({commit}){
            localStorage.removeItem('token')
            commit('setUser', '')
            router.push({name: 'Login'})
        },
        readToken({commit}) {
            let token = localStorage.getItem('token')
            if(token){
                commit('setUser', token)
            }else{
                commit('setUser', '')
            }
        },
        createUser: async function({commit}, item){
            try {
                const res = await axios.post('/users', item)
                return res
                // commit('setUser', res.data)
            } catch (error) {
                return error.response
            }
        },
        
    },
    getters:{
        isLogged: state => !!state.token
    }
}