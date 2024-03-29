/// esquema 
const { Schema, model } = require('mongoose')

const collection = 'usuarios'

const userSchema = new Schema({// nomnre 
    first_name: {
        type: String,
        index: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        optional: true
    }
})

const userModel = model(collection, userSchema)

module.exports = {
    userModel
}