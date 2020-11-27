const { model } = require("../models/MedicoSchema.js");
const Medico = require("../models/MedicoSchema.js");

class MedicoController{
    async Cadastrar(req, res){
        try{
        var result = await Medico.create(req.body);
        res.status(201).json(result);
    }
    catch (error){
        res.status(500).json(error);
    }}

 async Listar(req, res){
        var result = await Medico.find({});
        res.status(200).json(result);
    }
    
}


module.exports = new MedicoController();
