<template>
    <v-container>
        <v-row justify="center">
            <v-col>
                <h2 class="text-center text-primary fw-bold">
                    ESPECIES
                </h2>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" sm="6" 
            v-if="message.visible">
                <v-alert
                dense
                :type="message.color"
                >
                    {{ message.text }}
                </v-alert>
            </v-col>
            <v-col cols="12">
                <specie-form 
                v-if="!toggleUpdate"
                :specie="specie" 
                text="Registrar"
                @action="registerSpecie"
                @cancel="hideUpdate"/>
                <specie-form 
                v-else
                :show="toggleUpdate"
                :specie="specie" 
                text="Actualizar"
                @action="refreshSpecie"
                @cancel="hideUpdate"/>
            </v-col>
        </v-row>
        <hr>
        <v-row 
        v-if="loading"
        justify="center">
            <v-col cols="10" sm="6" md="4">
                <v-text-field
                    color="success"
                    loading
                    disabled
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row 
        v-else
        justify="center">
            <v-col cols="12" sm="9" md="6">
                <v-text-field
                v-model.trim="search"
                label="Buscar especie por nombre"
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-simple-table
                    fixed-header
                    height="300px"
                >
                    <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">
                                NOMBRE
                            </th>
                            <th class="text-left">
                                DESCRIPCIÓN
                            </th>
                            <th class="text-left">
                                TIPOS
                            </th>
                            <th class="text-left">
                                OPCIONES
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(item, index) in speFiltered"
                        :key="index"
                        >
                            <td>{{ item.name }}</td>
                            <td >
                                <p>
                                    {{ item.description }}
                                </p>
                            </td>
                            <td>
                                <p>
                                    {{ specieTypes[index] }}
                                </p>
                            </td>
                            <td>
                                <v-btn
                                @click="setSpecie(item)"
                                color="warning"
                                class="mx-1">
                                    <v-icon>
                                        {{icons.mdiPencil}}
                                    </v-icon>
                                </v-btn>
                                <v-btn
                                @click="dialogValidate = true"
                                color="error">
                                    <delete-validate 
                                    :item="item"
                                    :dialog="dialogValidate"
                                    @remove="removeSpecie"
                                    @close="closeValidate"/>
                                    <v-icon>
                                        {{icons.mdiDelete}}
                                    </v-icon>
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
//@ts-check
import { mapActions, mapMutations, mapState } from 'vuex'
import DeleteValidate from '../components/DeleteValidate.vue'
import SpecieForm from '../components/SpecieForm.vue'
import {
    mdiPencil,
    mdiDelete,
  } from '@mdi/js'
export default {
  components: { SpecieForm, DeleteValidate},
    data() {
        return {
            icons: {
                mdiPencil,
                mdiDelete,
            },
            specie: {
                name: '',
                description: '',
                type: null
            },
            message:{ text: "", color: "", visible: false},
            error:{
                'Specie validation failed: name: Error, expected name to be unique': 'El nombre de especie ya existe'
            },
            toggleUpdate: false,
            dialogValidate: false,
            search: ''
        }
    },
    computed: {
        ...mapState('specie', ['speFiltered', 'loading']),
        specieTypes: function(){
            let array = []
            this.speFiltered.forEach(item => {
                if((typeof item.type) === 'undefined'){
                    array.push('')
                }else if((typeof item.type) === 'object'){
                    let words = item.type.join(', ');
                    array.push(words)
                }else{
                    array.push(item.type)
                }
            })
            return array
        }
    },
    methods: {
        ...mapActions('specie', ['createSpecie','updateSpecie','deleteSpecie']),
        ...mapMutations('specie', ['filterSpecies']),
        registerSpecie: async function(){
            // Adecuando los valores
            this.specie.name = this.specie.name.toUpperCase();
            if (this.specie.type && this.specie.type.includes(',') ){
                this.validateData()
            }

            const res = await this.createSpecie(this.specie)
            if(res.data.error){
                return this.showAlert(this.error[res.data.error.message], 'error')
            }
            this.showAlert('Registro exitoso','success');
        },
        refreshSpecie: async function(){
            // Adecuando los valores
            this.specie.name = this.specie.name.toUpperCase();
            if (this.specie.type && this.specie.type.includes(',') ){
                this.validateData()
            }

            const res = await this.updateSpecie(this.specie)
            if(res.data.error){
                return console.log(res)
            }
            this.showAlert('Actualización exitosa','success');
        },
        setSpecie: function(item){
            this.specie = {...item}
            this.toggleUpdate = true
        },
        removeSpecie: async function(item){
            const res = await this.deleteSpecie(item)
            if(res.data.error){
                return console.log(res)
            }
            this.showAlert('Eliminación exitosa','success');
            this.reset();
        },
        hideUpdate: function(){
            this.reset();
            this.toggleUpdate= false
        },
        showAlert: function(text, color){
            this.message.text = text
            this.message.color = color
            this.message.visible = true
            setTimeout(()=>{
                this.message.visible = false
            }, 3000)
        }, 
        reset: function (){
            this.specie = {
                name: '',
                description: '',
                type: null
            };
        },
        closeValidate: function (){
            this.dialogValidate = false
        },
        validateData: function(){
            this.specie.type = this.specie.type.split(',')
            this.specie.type = this.specie.type.map(item => item.trim())
            this.specie.type = this.specie.type.map(item => item.toUpperCase())
        }
    },
    watch:{
        search: function(){
            this.filterSpecies(this.search)
        }
    }
}
</script>