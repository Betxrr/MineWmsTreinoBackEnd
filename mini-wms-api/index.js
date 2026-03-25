import express from 'express';
import produtoRouter from './routes/produto.js';

const app = express();
const PORT = 3000;

// ==========================================
// 1. MIDDLEWARES (Os Tradutores)
// ==========================================

// Permite que o Express entenda requisições com corpo no formato JSON
app.use(express.json());








// ==========================================
// 2. ROTAS (Os Endpoints da nossa API)
// ==========================================

app.use('/produtos', produtoRouter);
















// ==========================================
// 3. INICIALIZAÇÃO DO SERVIDOR (O Ouvinte)
// ==========================================

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint não encontrado' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
