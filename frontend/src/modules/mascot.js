//ts-check
import axios from 'axios'
const url = 'http://localhost:4000/api'
axios.defaults.baseURL = url
export default {
    namespaced: true,
    state: {
        mascots:[],
        masFiltered: [],
        loading: false,
        
    },
    mutations:{
        setLoading: function(state, payload){
            state.loading = payload
        },
        setMascots: function(state, payload){
            state.mascots = payload
            state.masFiltered = payload
        },
        setMascot: function(state, payload){
            state.mascots.push(payload);
            state.masFiltered.push(payload);
        },

        updateMascot: function(state, payload){
            const _id = payload._id;
            state.mascots.forEach(item => {
                if(item._id === _id) {
                    return item = payload;
                }
            })
            state.masFiltered.forEach(item => {
                if(item._id === _id) {
                    return item = payload;
                }
            })
        },
        deleteMascot: function(state, payload){
            const _id = payload._id;
            state.mascots = state.mascots.filter(item => item._id !== _id);
            state.masFiltered = state.mascots.filter(item => item._id !== _id);
        },

        filterMascots: function(state, payload){
            state.masFiltered = state.mascots.filter(item =>{
                const property = item[payload.property].toLowerCase();
                payload.value = payload.value.toLowerCase();
                if(property.startsWith(payload.value) ){
                    return item;
                }
            })
        }
    },
    actions:{
        readMascots: async function({commit}){
            try {
                commit('setLoading', true)
                const res = await axios.get('/mascots');
                commit('setMascots', res.data);
            } catch (error) {
                console.log(error);
            } finally {
                commit('setLoading', false)
            }

        },
        createMascot: async function({commit}, item){
            try {
                const res = await axios.post('/mascots', item);
                commit('setMascot', res.data);
                return res
            } catch (error) {
                return error.response;
            };

        },
        updateMascot: async function(item){
            try {
                const res = await axios.put(`/mascots/${item._id}`, item);
                commit('updateMascot', res.data);
                return res;
            } catch (error) {
                return error.response
            }
        },
        deleteMascot: async function(item){
            try {
                const res = await axios.delete(`mascots/${item._id}`,  item);
                commit('deleteMascot', item);
                return res;
            } catch (error) {
                return error.response
            }
        }
    },
    getters:{
        
    }
}