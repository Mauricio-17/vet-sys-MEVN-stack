<template>
    <v-form
    @submit.prevent="action"
    ref="form"
    lazy-validation>
        <v-row justify="center">
            <v-col cols="12" sm="9" md="6">
                <v-text-field
                v-model.trim="specie.name"
                :rules="[(v) => !!v || 'Nombre requerido']"
                label="Nombre"
                required
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" sm="9" md="6">
                <v-textarea
                v-model.trim="specie.description"
                :rules="[(v) => !!v || 'Descripción requerida']"
                label="Descripción"
                rows= 3
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" sm="9" md="6">
                <v-textarea
                v-model.trim="specie.type"
                label="Tipos (use una coma para separar)"
                rows= 2
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row justify="center"
        v-if="!show">
            <v-col cols="12" sm="9" md="6">
                <v-btn class="w-100" type="submit" color="primary">
                    {{text}}
                </v-btn>
            </v-col>
        </v-row>
        <v-row justify="center"
        v-else>
            <v-col cols="6" sm="4" md="3">
                <v-btn class="w-100" type="submit" color="primary">
                    {{text}}
                </v-btn>
            </v-col>
            <v-col cols="6" sm="4" md="3">
                <v-btn class="w-100 mx-1" 
                @click="cancel"
                color="warning">
                    Cancelar
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>
<script>
export default {
    props:{
        specie: Object,
        text: String,
        show: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            
        }
    },
    methods:{
        action: async function(){
            if(this.$refs.form.validate()){
                await this.$emit('action');
                this.cancel()
            }
        },
        cancel: function(){
            this.$emit('cancel')
            this.$refs.form.resetValidation();
        }
    }
}
</script>