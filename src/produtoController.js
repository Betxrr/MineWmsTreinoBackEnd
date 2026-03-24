import { produtos } from "./banco.js";

export function atualizarProduto(req, res) {
    // 1. DADOS DE ENTRADA: Pegamos o ID da URL e os dados do Postman
    const idDaUrl = Number(req.params.id);
    const dadosNovos = req.body;

    // 2. BUSCA: Descobrimos em qual POSIÇÃO (índice 0, 1, 2...) o produto está na lista
    const indexDoProduto = produtos.findIndex((p) => p.id === idDaUrl);

    // 3. VALIDAÇÃO: Se o índice for -1, significa que a busca falhou
    if (indexDoProduto === -1) {
        return res.status(404).json({ mensagem: "Produto não encontrado!" });
    }

    // 4. SEPARAÇÃO: Pegamos o produto antigo usando a posição dele
    const produtoAntigo = produtos[indexDoProduto];

    // 5. A MESCLA (MERGE): Construímos um objeto novo cruzando o que veio do Postman com o que já existia
    const produtoAtualizado = {
        id: produtoAntigo.id, // O ID nunca muda
        
        // Lê-se: Se o Postman mandou um nome, use ele. Se não mandou, mantenha o antigo.
        nome: dadosNovos.nome !== undefined ? dadosNovos.nome : produtoAntigo.nome,
        quantidade: dadosNovos.quantidade !== undefined ? dadosNovos.quantidade : produtoAntigo.quantidade,
        preco: dadosNovos.preco !== undefined ? dadosNovos.preco : produtoAntigo.preco
    };

    // 6. O SALVAMENTO: Pegamos a lista velha e substituímos a gaveta inteira pelo produto mesclado
    produtos[indexDoProduto] = produtoAtualizado;

    // 7. SAÍDA: Avisamos o Postman que deu tudo certo
    return res.status(200).json({
        mensagem: "Produto atualizado com sucesso!",
        produto: produtoAtualizado,
    });
}