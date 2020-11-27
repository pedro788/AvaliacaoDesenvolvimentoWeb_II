const mongoose = require("mongoose");

const MedicoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O campo nome do médico é obrigatório"]
    },
    crm: {
        type: String,
        required: [true, "O campo crm do médico é obrigatório"]
    },
    especialidade: {
        type: String,
        required: [true, "O campo especialidade do médico é obrigatório"]
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("medicos", MedicoSchema);