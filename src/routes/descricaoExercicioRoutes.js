const express = require('express');
const descricaoExercicioController = require('../controllers/descricaoExercicioControler');

const router = express.Router();

router.get('/teste', descricaoExercicioController.teste);
router.get('/getDescricaoExercicio', descricaoExercicioController.getDescricaoExercicio);
router.post('/cadastrarDescricaoExercicio', descricaoExercicioController.cadastrarDescricaoExercicio);
router.delete('/deletarDescricaoExercicio/:id', descricaoExercicioController.deletarDescricaoExercicio);
router.put('/atualizarDescricaoExercicio/:id', descricaoExercicioController.atualizarDescricaoExercicio);

module.exports = router;