//@ts-check
import mongoose from 'mongoose'

const Schema = mongoose.Schema
// const uniqueValidator = require('mongoose-unique-validator')

const clientSchema = new Schema({
    name: {type: String, required: [true, 'Nombre requerido']},
    lastName: {type: String, required: [true, 'Apellido requerido']},
    cellphone: {
        type: String, 
        required: [true, 'Nro de celular requerido'],
        minLength: [6, 'Numero telefónico mínimo de 6 carácteres'],
        maxLenght: [15, 'Numero telefónico mínimo de 15 carácteres']
    }
})
const Client = mongoose.model('Client', clientSchema)

export default Client