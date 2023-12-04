const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const router = express.Router();

router.get('/teste', usuarioController.teste);
router.get('/usuario', usuarioController.getUser);
router.post('/cadastrarUsuario', usuarioController.cadastrarUsuario);
router.delete('/deletarUsuario/:id', usuarioController.deletarUsuario);
router.put('/atualizarUsuario/:id', usuarioController.atualizarUsuario);

module.exports = router;