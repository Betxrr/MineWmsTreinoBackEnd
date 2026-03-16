import express from 'express';
import { produtos } from '../src/banco.js';
import { atualizarProduto } from '../src/produtoController.js';

const app = express();
const PORT = 3000;

// ==========================================
// 1. MIDDLEWARES (Os Tradutores)
// ==========================================
// Permite que o Express entenda requisições com corpo no formato JSON
app.use(express.json());

// ==========================================
// Rota de PUT (Agora apontando para o arquivo externo!)
// ==========================================

app.put('/produtos/:id', atualizarProduto);

// ==========================================
// 3. ROTAS (Os Endpoints da nossa API)
// ==========================================

// Rota para Listar todos os produtos (GET /produtos)
app.get('/produtos', (req, res) => {
  res.json(produtos); 
});

// Rota para Buscar um produto específico pelo ID (GET /produtos/:id)
app.get('/produtos/:id', (req, res) => {
  const { id } = req.params; 
  const produto = produtos.find(p => p.id === Number(id));

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado!" });
  }

  res.json(produto);
});

// Rota para Adicionar um novo produto (POST /produtos)
app.post('/produtos', (req, res) => {
  const { nome, quantidade, preco } = req.body ?? {};

  // Validação básica
  if (nome === undefined || quantidade === undefined || preco === undefined) {
    return res.status(400).json({ mensagem: "Nome, quantidade e preço são obrigatórios!" });
  }

  // Gera um novo ID baseado no último item do array
  const novoId = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;

  const novoProduto = {
    id: novoId,
    nome,
    quantidade,
    preco
  };

  produtos.push(novoProduto);

  // 201 Created
  res.status(201).json(novoProduto);
});


app.delete('/produtos/:id', (req, res) => {
  const { id } = req.params;
  const index = produtos.findIndex(p => p.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ mensagem: "Produto não encontrado!" });
  }

  produtos.splice(index, 1);
  res.status(200).json({ mensagem: "Produto removido com sucesso!" });

});

// ==========================================
// 4. INICIALIZAÇÃO DO SERVIDOR (O Ouvinte)
// ==========================================
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});