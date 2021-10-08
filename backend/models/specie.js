//@ts-check
import mongoose from 'mongoose'

const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const specieSchema = new Schema({
    name: {type: String, required: [true, 'Nombre requerido'], unique: true},
    description: {type: String, required: false},
    type: {type: Array, required: false}
})
specieSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique' })

const Specie = mongoose.model('Specie', specieSchema);

export default Specie;
