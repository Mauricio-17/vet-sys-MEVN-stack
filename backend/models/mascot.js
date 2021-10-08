//@ts-check
import mongoose from 'mongoose'

const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const mascotSchema = new Schema({
    name: {type: String, required: [true, 'Nombre requerido']},
    genre: {type: Boolean, required: [true, 'Genero requerido']},
    dateBorn: {type: Date, required: false},
    specie: {type: String, required: [true, 'Especie requerida']},
    owner: {type: String},
    breed: {type: String, required: false}
})

const Mascot = mongoose.model('Mascot', mascotSchema);

export default Mascot;
