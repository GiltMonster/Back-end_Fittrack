const express = require('express');
const exercicioController = require('../controllers/exercicioController');

const router = express.Router();

router.get('/teste', exercicioController.teste);
router.get('/getExercicio', exercicioController.getExercicio);
router.post('/cadastrarExercicio', exercicioController.cadastrarExercicio);
router.delete('/deletarExercicio/:id', exercicioController.deletarExercicio);
router.put('/atualizarExercicio/:id', exercicioController.atualizarExercicio);

module.exports = router;