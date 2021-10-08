<template>
    <v-container>
        <v-row justify="center">
            <v-col>
                <h2 class="text-center text-primary fw-bold">
                    CLIENTES
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
                <client-form 
                v-if="!toggleUpdate"
                :client="client" 
                @action="registerClient"
                @cancel="hideUpdate"
                text="Registrar"/>
                <client-form 
                v-else
                :client="client" 
                @action="refreshClient"
                @cancel="hideUpdate"
                :show="toggleUpdate"
                text="Actualizar"/>
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
                label="Buscar cliente por nombre"
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
                                APELLIDO
                            </th>
                            <th class="text-left">
                                NRO CELULAR
                            </th>
                            <th class="text-left">
                                OPCIONES
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(item, index) in cliFiltered"
                        :key="index"
                        >
                            <td>{{ item.name }}</td>
                            <td>
                                {{ item.lastName }}
                            </td>
                            <td>
                                {{ item.cellphone}}
                            </td>
                            <td>
                                <v-btn
                                @click="setClient(item)"
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
                                    @remove="removeClient"
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
import ClientForm from '../components/ClientForm.vue'
import DeleteValidate from '../components/DeleteValidate.vue'
import {
    mdiPencil,
    mdiDelete,
  } from '@mdi/js'
export default {
  components: { ClientForm, DeleteValidate },
    data() {
        return {
            icons: {
                mdiPencil,
                mdiDelete,
            },
            client: {
                name: '', 
                lastName: '', 
                cellphone: '', 
            },
            message:{ text: "", color: "", visible: false},
            toggleUpdate: false,
            dialogValidate: false,
            search: ''
        }
    },
    computed:{
        ...mapState('client', ['cliFiltered', 'loading'])
    },
    methods:{
        ...mapActions('client', ['createClient','updateClient','deleteClient']),
        ...mapMutations('client', ['filterClients']),
        registerClient: async function(){
            this.validateData();
            const res = await this.createClient(this.client)
            if(res.data.error){
                return console.log(res)
            }
            this.showAlert('Registro exitoso','success');
        },
        refreshClient: async function(){
            this.validateData();
            const res = await this.updateClient(this.client)
            if(res.data.error){
                return console.log(res)
            }
            this.showAlert('Actualización exitosa','success');
        },
        setClient: function(item){
            this.client = {...item}
            this.toggleUpdate = true
        },
        removeClient: async function(item){
            const res = await this.deleteClient(item)
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
            this.client = {
                name: '', 
                lastName: '', 
                cellphone: '', 
            };
        },
        validateData: function () {
            this.client.name = this.client.name.toUpperCase();
            this.client.lastName = this.client.lastName.toUpperCase();
        },
        closeValidate: function (){
            this.dialogValidate = false
        }
    },
    watch: {
        search: function (){
            this.filterClients(this.search)
        }
    }
}
</script>