import express from 'express';

const app = express();
const PORT = 3000;

// ==========================================
// 1. MIDDLEWARES (Os Tradutores)
// ==========================================
// Permite que o Express entenda requisições com corpo no formato JSON
app.use(express.json());

// ==========================================
// 2. BANCO DE DADOS EM MEMÓRIA (Mock)
// ==========================================
const produtos = [
  { id: 1, nome: 'Pallet de Madeira', quantidade: 50, preco: 120.50 },
  { id: 2, nome: 'Empilhadeira Elétrica', quantidade: 2, preco: 85000.00 }
];

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
  const { nome, quantidade, preco } = req.body;

  // Validação básica
  if (!nome || !quantidade || !preco) {
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
  res.json({ mensagem: "Produto removido com sucesso!" });

  res.status(200).json({ mensagem: "Produto removido com sucesso!" });

});

// ==========================================
// 4. INICIALIZAÇÃO DO SERVIDOR (O Ouvinte)
// ==========================================
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});