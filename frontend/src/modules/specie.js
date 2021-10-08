//ts-check
import axios from 'axios'
const url = 'http://localhost:4000/api'
axios.defaults.baseURL = url

export default {
    namespaced: true,
    state: {
        species: [],
        speFiltered: [],
        loading: false,
    },
    mutations:{
        setLoading: function(state, payload){
            state.loading = payload
        },
        setSpecies: function(state, payload){
            state.species = payload
            state.speFiltered = payload
        },
        setSpecie: function(state, payload){
            state.species.push(payload);
            state.speFiltered.push(payload);
        },

        updateSpecie: function(state, payload){
            const _id = payload._id;
            state.species.forEach(item => {
                if(item._id === _id) {
                    return item = payload;
                }
            });
            state.speFiltered.forEach(item => {
                if(item._id === _id) {
                    return item = payload;
                }
            });
        },
        deleteSpecie: function(state, payload){
            const _id = payload._id;
            state.species = state.species.filter(item => item._id !== _id);
            state.speFiltered = state.speFiltered.filter(item => item._id !== _id);
        },

        filterSpecies: function(state, payload) {
            state.speFiltered = state.species.filter(item =>{
                const name = item.name.toLowerCase();
                payload = payload.toLowerCase();
                if(name.startsWith(payload)){
                    return item;
                }
            })
        }
    },
    actions:{
        readSpecies: async function({commit}){
            try {
                commit('setLoading', true)
                const res = await axios.get('/species')
                commit('setSpecies', res.data)
            } catch (error) {
                console.log(error);
            } finally {
                commit('setLoading', false)
            }
        },
        createSpecie: async function({commit}, item){
            try {
                const res = await axios.post('/species', item)
                commit('setSpecie', res.data)
                return res
            } catch (error) {
                return error.response;
            }
        },
        updateSpecie: async function({commit}, item){
            try {
                const res = await axios.put(`/species/${item._id}`, item);
                commit('updateSpecie', res.data)
                return res
            } catch (error) {
                return error.response;
            }
        },
        deleteSpecie: async function({commit}, item){
            try {
                const res = await axios.delete(`/species/${item._id}`)
                commit('deleteSpecie', item)
                return res
            } catch (error) {
                return error.response
            }
        },
    },
    getters:{
        
    }
}