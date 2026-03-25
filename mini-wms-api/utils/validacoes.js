// utils/validacoes.js

export function validarNovoProduto(dados) {
    // Regra 1: Nome é obrigatório
    if (!dados.nome || dados.nome.trim() === "") {
        throw new Error("O nome do produto é obrigatório!"); // 🚨 Puxou o alarme!
    }

    // Regra 2: Código de barras precisa ter 13 dígitos (Padrão EAN-13)
    if (!dados.codigo_barras || dados.codigo_barras.length !== 13) {
        throw new Error("O código de barras deve ter exatamente 13 números."); // 🚨 Puxou o alarme!
    }

    // Regra 3: Quantidade faz sentido?
    if (dados.quantidade < 0) {
        throw new Error("A quantidade em estoque não pode ser negativa."); // 🚨 Puxou o alarme!
    }

    // Se o código chegou até aqui sem bater em nenhum 'throw', 
    // significa que a carga está 100% aprovada. A função termina em silêncio.
}