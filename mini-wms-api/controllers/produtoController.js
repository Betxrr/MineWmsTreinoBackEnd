// Lembre-se de colocar a extensão .js no final do import!
import { buscarProdutos, salvarProduto } from '../database.js';

// Controller Consulta (GET)
export const listarProdutos = async (req, res) => {
    try {
        const produtos = await buscarProdutos();
        res.status(200).json(produtos); // Receita de sucesso!
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar os pallets no galpão." });
    }
};

// Controller Cadastro (POST)
export const criarProduto = async (req, res) => {
    try {
        // Pega a ficha do paciente (o JSON que vem do Front-end)
        const fichaDoProduto = req.body; 

        // Manda o laboratório salvar
        const resultado = await salvarProduto(fichaDoProduto);
        
        res.status(201).json(resultado); // 201 = Criado com sucesso!
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao cadastrar novo pallet." });
    }
};