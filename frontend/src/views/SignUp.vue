<template>
    <v-container>
        <v-row justify="center">
        <v-col>
            <h2 class="text-center text-primary fw-bold">
                REGISTRO
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
                <v-form 
                @submit.prevent ="registerUser"
                ref="form" 
                lazy-validation>
                    <v-row justify="center">
                        <v-col cols="12" sm="9" md="6">
                            <v-text-field
                            v-model="user.name"
                            :rules="[
                                (v) => !!v || ' requerido',
                            ]"
                            label="Nombre"
                            required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" sm="9" md="6">
                            <v-text-field
                            v-model="user.lastName"
                            :rules="[
                                (v) => !!v || 'Apellido reqerido'
                            ]"
                            label="Apellido"
                            required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" sm="9" md="6">
                            <v-text-field
                            v-model="user.email"
                            :rules="[
                                (v) => !!v || 'E-mail requerido',
                                (v) => /.+@.+\..+/.test(v) || 'E-mail debe ser válido',
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
                        <v-col cols="12" sm="9" md="6">
                            <v-text-field
                            v-model="psw"
                            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[value => !!value || 'Contraseña requerida.']"
                            :type="show2 ? 'text' : 'password'"
                            name="input-10-1"
                            label="Repetir contraseña"
                            @click:append="show2 = !show2"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="9" sm="6">
                            <v-btn class="w-100" type="submit" color="primary">
                                REGISTRAR
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
            show: false,
            show2: false,
            user: {
                name: '',
                lastName: '',
                email: '',
                password: '',
            },
            psw: '',
            rules:{
                required: value => !!value || 'Contraseña requerida.',
                min: v => v.length >= 8 || 'Minimo 8 carácteres'
            },
            message:{ text: "", color: "success", visible: false},
            error:{
                'User validation failed: email: Error, expected email to be unique': 'El usuario ya existe'
            }
        };
    },
    methods: {
        ...mapActions('user', ['createUser']),
        registerUser: async function(){
            if(this.$refs.form.validate()){
                if(this.user.password === this.psw){
                    const userDB = await this.createUser(this.user);
                    if (userDB.data.error) {
                        return this.showAlert(this.error[userDB.data.error.message], 'error')
                    }
                    this.showAlert('Registro exitoso', 'success')
                    this.reset()
                }else{
                    this.showAlert('Contraseñas diferentes', 'error')
                }
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
                name: '',
                lastName: '',
                email: '',
                password: ''
            }
            this.psw =  '';
            this.$refs.form.resetValidation()
        }
    }
};
</script>
