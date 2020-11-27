const express = require ('express');
const router = express.Router();
const MedicoController = require("../controllers/MedicoController.js");

router.get("/listar", MedicoController.Listar);
router.post("/cadastrar", MedicoController.Cadastrar);

module.exports = router;