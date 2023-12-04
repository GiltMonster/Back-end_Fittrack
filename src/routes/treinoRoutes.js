const express = require('express');
const treinoController = require('../controllers/treinoController');

const router = express.Router();

router.get('/teste', treinoController.teste);
router.get('/getTreino', treinoController.getTreino);
router.post('/cadastrarTreino', treinoController.cadastraTreino);
router.delete('/deletarTreino/:id', treinoController.deletarTreino);
router.put('/atualizarTreino/:id', treinoController.atualizarTreino);

module.exports = router;