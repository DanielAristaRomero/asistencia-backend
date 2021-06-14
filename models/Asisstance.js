const { Schema, model } = require("mongoose");

const AsisstanceSchema = Schema({
    date: {
        type: String,
        required: true
    },
    entrada: {
        type: Number,
        required: false
    },
    comida: {
        type: Number,
        required: false
    },
    salida: {
        type: Number,
        required: false
    },
    employeeId: {
        type: String,
        required: true
    }
})

module.exports = model('Asisstance', AsisstanceSchema);