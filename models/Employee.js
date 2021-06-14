const { Schema, model } = require("mongoose");

const EmployeeSchema = Schema({
    _id: {
        type: String,
        required: true,
        unique: true,
    },
    nameFull: {
        type: String,
        required: true,
    },
    puesto: {
        type: String,
        required: true,
    },
    area: {
        type: String,
        required: true,
    },
    jefeInmediato: {
        type: String,
        required: true,
    }
}, {_id: false});

// EmployeeSchema.method('toJSON', function() {

// });

module.exports = model('Employee', EmployeeSchema);