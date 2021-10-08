<template>
    <v-form
    @submit.prevent="action"
    ref="form"
    lazy-validation>
        <v-row justify="center">
            <v-col cols="12" sm="9" md="6">
                <v-select
                v-model.trim="mascot.owner"
                :items="itemsClient"
                filled
                label="Dueño (a)"
                ></v-select>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" sm="9" md="6">
                <v-text-field
                v-model.trim="mascot.name"
                :rules="[(v) => !!v || 'Nombre reqerido']"
                label="Nombre"
                required
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" sm="9" md="6">
                <v-select
                v-model.trim="mascot.specie"
                :items="items"
                :rules="[v => !!v || 'Item requerido']"
                filled
                label="Especie"
                ></v-select>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" sm="9" md="6">
                <v-select
                v-model.trim="mascot.breed"
                :items="itemsType"
                filled
                label="Tipo"
                ></v-select>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" sm="9" md="6">
                <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                    v-model="mascot.dateBorn"
                    label="Fecha de nacimiento"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker
                    v-model="mascot.dateBorn"
                    :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                    min="1950-01-01"
                ></v-date-picker>
                </v-menu>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" sm="9" md="6">
                <v-radio-group
                row
                v-model="mascot.genre">
                <v-radio
                    label="MACHO"
                    value= true
                ></v-radio>
                <v-radio
                    label="HEMBRA"
                    value= false
                ></v-radio>
                </v-radio-group>
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
        text: String,
        items: Array,
        itemsType: [Object, Array],
        itemsClient: Array,
        mascot: Object,
        show: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            menu: false
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