import { produtos } from "./banco.js";

export function atualizarProduto(req, res) {
    const { id } = req.params;
    const { nome, quantidade, preco } = req.body ?? {};

    const produto = produtos.find((p) => p.id === Number(id));
    if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    produto.nome = nome ?? produto.nome;
    produto.quantidade = quantidade ?? produto.quantidade;
    produto.preco = preco ?? produto.preco;

    return res.status(200).json({
        mensagem: "Produto atualizado com sucesso!",
        produto,
    });
}
