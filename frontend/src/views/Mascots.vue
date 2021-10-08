<template>
    <v-container>
        <v-row justify="center">
            <v-col>
                <h2 class="text-center text-primary fw-bold">
                    MASCOTAS
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
                <mascot-form 
                v-if="!toggleUpdate"
                :mascot="mascot" 
                text="Registrar"
                :items="namesSpecie"
                :itemsType="itemsType"
                :itemsClient="namesClient"
                @cancel="hideUpdate"
                @action="registerMascot"/>
                <mascot-form 
                v-else
                :mascot="mascot" 
                text="Actualizar"
                :items="namesSpecie"
                :itemsType="itemsType"
                :itemsClient="namesClient"
                @action="refreshMascot"
                @cancel="hideUpdate"
                :show="toggleUpdate"/>
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
            <v-col cols="12" sm="7" md="4">
                <v-select
                v-model.trim="property"
                :items="items"
                filled
                label="Buscar por:"
                ></v-select>
            </v-col>
            <v-col cols="12" sm="7" md="4">
                <v-text-field
                v-model.trim="value"
                label="Buscar mascota "
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
                                DUEÑO (A)
                            </th>
                            <th class="text-left">
                                ESPECIE
                            </th>
                            <th class="text-left">
                                TIPO
                            </th>
                            <th class="text-left">
                                GÉNERO
                            </th>
                            <th class="text-left">
                                FECHA NAC.
                            </th>
                            <th class="text-left">
                                OPCIONES
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(item, index) in masFiltered"
                        :key="index"
                        >
                            <td>{{ item.name }}</td>
                            <td>
                                {{ item.owner }}
                            </td>
                            <td>
                                {{ item.specie }}
                            </td>
                            <td>
                                {{ item.breed}}
                            </td>
                            <td>
                                {{ item.genre ? 'Macho': 'Hembra'}}
                            </td>
                            <td>
                                {{ item.dateBorn}}
                            </td>
                            <td>
                                <v-btn
                                @click="setMascot(item)"
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
                                    @remove="removeMascot"
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
import MascotForm from '../components/MascotForm.vue'
import {
    mdiPencil,
    mdiDelete,
  } from '@mdi/js'
export default {
  components: { MascotForm, DeleteValidate },
    data() {
        return {
            icons: {
                mdiPencil,
                mdiDelete,
            },
            mascot:{
                specie: '',
                breed: '',
                genre: '',
                owner: '',
                name: '',
                dateBorn: '',
            },
            message:{ text: "", color: "", visible: false},
            toggleUpdate: false,
            dialogValidate: false,
            value: '',
            property: '',
            items: ['ESPECIE', 'NOMBRE', 'DUEÑO (A)'],
            translate: {
                'ESPECIE' : 'specie',
                'NOMBRE' : 'name',
                'DUEÑO (A)': 'owner'
            }
        }
    },
    computed:{
        ...mapState('mascot', ['masFiltered', 'loading']),
        ...mapState('specie', ['species']),
        ...mapState('client', ['clients']),
        namesSpecie: function(){
            let names = [];
            this.species.forEach(item=>{
                names.push(item.name)
            })
            return names;
        },
        namesClient: function(){
            let names = [];
            this.clients.forEach(item=>{
                names.push(`${item.name} ${item.lastName}`)
            })
            return names;
        },
        itemsType: function(){
            let itemsType = [];
            this.species.forEach(item => {
                if(item.name === this.mascot.specie){
                    if(typeof item.type === 'object'){
                        item.type.forEach(obj => {
                            itemsType.push(obj)
                        })
                    }
                    else if(typeof item.type === 'string'){
                        itemsType.push(item.type)
                    }
                    else{
                        itemsType.push('')
                    }
                }
            })
            return itemsType
        }
    },
    methods:{
        ...mapActions('mascot', ['createMascot', 'updateMascot', 'deleteMascot']),
        ...mapMutations('mascot', ['filterMascots']),
        registerMascot: async function(){
            let config = {
                headers:{
                    token: this.token
                }
            }

            this.mascot.name = this.mascot.name.toUpperCase();
            const res = await this.createMascot(this.mascot)
            if(res.data.error){
                return console.log(res.data)
            }
            this.showAlert('Registro exitoso','success');
            this.reset();
        },
        refreshMascot: async function(){
            this.mascot.name = this.mascot.name.toUpperCase();
            const res = await this.updateMascot(this.mascot)
            if(res.data.error){
                return console.log(res.data)
            }
            this.showAlert('Actualización exitosa','success');
        },
        setMascot: function(item){
            this.mascot = {...item}
            this.toggleUpdate = true
        },
        removeMascot: async function(item){
            const res = await this.deleteMascot(item)
            if(res.data.error){
                return console.log(res.data)
            }
            this.showAlert('Eliminación exitosa','success');
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
            this.mascot = {
                specie: '',
                breed: '',
                genre: '',
                name: '',
                dateBorn: ''
            };
        },
        closeValidate: function (){
            this.dialogValidate = false
        }
    },
    watch:{
        value: function(){
            if(this.property){
                this.filterMascots({property: this.translate[this.property], value: this.value})
            }
        },
    }
}
</script>