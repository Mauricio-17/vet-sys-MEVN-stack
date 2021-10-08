//ts-check
import axios from 'axios'
const url = 'http://localhost:4000/api'
axios.defaults.baseURL = url

export default {
    namespaced: true,
    state: {
        clients: [],
        cliFiltered: [],
        loading: false,
    },
    mutations:{
        setLoading: function(state, payload){
            state.loading = payload
        },
        setClients: function(state, payload){
            state.clients = payload
            state.cliFiltered = payload
        },
        setClient: function(state, payload){
            state.clients.push(payload);
            state.cliFiltered.push(payload);
        },

        updateClient: function(state, payload){
            const _id = payload._id;
            state.clients.forEach(item => {
                if(item._id === _id) {
                    return item = payload;
                }
            });
            state.cliFiltered.forEach(item => {
                if(item._id === _id) {
                    return item = payload;
                }
            });
        },
        deleteClient: function(state, payload){
            const _id = payload._id;
            state.clients = state.clients.filter(item => item._id !== _id);
            state.cliFiltered = state.cliFiltered.filter(item => item._id !== _id);
        },

        filterClients: function(state, payload) {
            state.cliFiltered = state.clients.filter(item =>{
                const name = item.name.toLowerCase();
                payload = payload.toLowerCase();
                if(name.startsWith(payload)){
                    return item;
                }
            })
        }
    },
    actions:{
        readClients: async function({commit}){
            try {
                commit('setLoading', true)
                const res = await axios.get('/clients')
                commit('setClients', res.data)
            } catch (error) {
                console.log(error);
            } finally {
                commit('setLoading', false)
            }
        },
        createClient: async function({commit}, item){
            try {
                const res = await axios.post('/clients', item)
                commit('setClient', res.data)
                return res
            } catch (error) {
                return error.response
            }
        },
        updateClient: async function({commit}, item){
            try {
                const res = await axios.put(`/clients/${item._id}`, item);
                commit('updateClient', res.data)
                return res
            } catch (error) {
                return error.response
            }
        },
        deleteClient: async function({commit}, item){
            try {
                const res = await axios.delete(`/clients/${item._id}`)
                commit('deleteClient', item)
                return res
            } catch (error) {
                return error.response
            }
        },
    },
    getters:{
        
    }
}