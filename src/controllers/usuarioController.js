const usuarioModel = require('../models/usuarioModel');

async function teste(req, res) {
    console.log('Teste de rota');
    return res.status(200).send('Teste de rota de usuario acessado com sucesso');
}

async function getUser(req, res) {
    try {
        const resultado = await usuarioModel.getUser();
        return res.status(200).json(resultado);
    } catch (error) {
        console.error('Erro ao inserir novo usuário:', error);
        return res.status(500).send('Erro interno do servidor');
    }
}

async function cadastrarUsuario(req, res) {
    const usuario = req.body;

    // Validação dos campos obrigatórios
    if (!usuario.nome || !usuario.sexo || !usuario.peso || !usuario.altura || !usuario.objetivo) {
        res.status(400).send('Todos os campos são obrigatórios');
        return;
    }

    try {
        const resultado = await usuarioModel.cadastrarUsuario(usuario);
        console.log('Novo usuário inserido com sucesso. ID:', resultado.insertId);
        res.status(201).send({result:'Usuário inserido com sucesso'});
    } catch (error) {
        console.error('Erro ao inserir novo usuário:', error);
        res.status(500).send({result:'Erro interno do servidor'});
    }
}

async function deletarUsuario(req, res) {
    const id = req.params.id;

    // Validação dos campos obrigatórios
    if (!id) {
        res.status(400).send('Passar o ID do usuário é obrigatório para deletá-lo');
        return;
    }

    try {
        const resultado = await usuarioModel.deletarUsuario(id);
        res.status(201).send('Usuário deletado com sucesso');
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        res.status(500).send('Erro interno do servidor');
    }
}

async function atualizarUsuario(req, res) {
    const id = req.params.id;
    const novosDados = req.body;

    // Validação dos campos obrigatórios
    if (!id) {
        res.status(400).send('Passar o ID do usuário é obrigatório para atualizá-lo');
        return;
    }

    try {
        const resultado = await usuarioModel.atualizarUsuario(id, novosDados);
        res.status(201).send('Usuário atualizado com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).send('Erro interno do servidor');
    }
}

module.exports = {
    teste,
    getUser,
    cadastrarUsuario,
    deletarUsuario,
    atualizarUsuario
};