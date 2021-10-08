//@ts-check
import mongoose from 'mongoose'

const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const validateEmail = function(email) {
    return (email.includes('@') && email.endsWith('.com'))
};

const userSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Nombre requerido'],
    },
    lastName: {type: String, required: [true, 'Apellido requerido']},
    email:{
        type: String, 
        required: [true, 'Email requerido'],
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address']
    },
    password: {
        type: String, 
        required: [true, 'Contraseña requerida'],
        minlength: [8, 'Minimo 8 carácteres']
    },
})
userSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique' })

userSchema.methods.toJSON = function (){
    const obj = this.toObject()
    delete obj.password
    return obj
}

const User = mongoose.model('User', userSchema);

export default User;
