<template>
    <v-container>
        <v-row justify="center">
            <v-col>
                <h2 class="text-center text-primary fw-bold">
                    LOGIN
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
            <!-- <v-col cols="10">
                <v-icon x-large>
                    far fa-user
                </v-icon>
            </v-col> -->
            <v-col cols="12">
                <v-form
                @submit.prevent="login"
                ref="form"
                lazy-validation>
                    <v-row justify="center">
                        <v-col cols="12" sm="9" md="6">
                            <v-text-field
                            v-model="user.email"
                            :rules="[
                                v => !!v || 'E-mail reqerido',
                                v => /.+@.+\..+/.test(v) || 'E-mail debe ser válido',
                            ]"
                            label="E-mail"
                            required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" sm="9" md="6">
                            <v-text-field
                                v-model="user.password"
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="show ? 'text' : 'password'"
                                name="input-10-1"
                                label="Contraseña"
                                hint="At least 8 characters"
                                @click:append="show = !show"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="9" sm="6">
                            <v-btn
                            class="w-100"
                            type="submit"
                            color="primary"
                            >
                                INGRESAR
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            user:{
                email: '',
                password: ''
            },
            show: false,
            rules:{
                required: value => !!value || 'Contraseña requerida.',
                min: v => v.length >= 8 || 'Minimo 8 carácteres'
            },
            message:{ text: "", color: "success", visible: false},
        }
    },
    methods: {
        ...mapActions('specie', ['readSpecies']),
        ...mapActions('client', ['readClients']),
        ...mapActions('mascot', ['readMascots']),
        ...mapActions('user',['saveUser']),
        login: async function(){
            if(this.$refs.form.validate()){
                const userDB = await this.saveUser(this.user)
                if(userDB.data.message){
                    return this.showAlert(userDB.data.message, 'error')
                }
                await this.readSpecies();
                await this.readMascots();
                await this.readClients();
                this.$router.push({name: 'Clients'})
            }
        },
        showAlert: function(text, color){
            this.message.text = text
            this.message.color = color
            this.message.visible = true
            setTimeout(()=>{
                this.message.visible = false
            }, 2500)
        },
        reset: function(){
            this.user = {
                email: '',
                password: ''
            }
            this.$refs.form.resetValidation()
        }
    }
}
</script>