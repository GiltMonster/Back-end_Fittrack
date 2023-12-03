const usuarioModel = require('../models/usuarioModel');
const con = require('../database/conexao');

async function getUser(req, res) {
    try {
        const query = 'SELECT * FROM usuario';
        con.execute(query, (err, results) => {
            if (err) {
                console.error('Erro ao obter usuários:', error);
                res.status(500).send('Erro interno do servidor');
            } else {
                res.status(200).json(results);
            }
        });
    } catch (error) {
        console.error('Erro ao obter usuários:', error);
        res.status(500).send('Erro interno do servidor');
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
        res.status(201).send('Usuário inserido com sucesso');
    } catch (error) {
        console.error('Erro ao inserir novo usuário:', error);
        res.status(500).send('Erro interno do servidor');
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
    getUser,
    cadastrarUsuario,
    deletarUsuario,
    atualizarUsuario
};