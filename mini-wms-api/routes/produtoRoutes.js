import express from 'express';
import { listarProdutos, criarProduto } from '../controllers/produtoController.js';

const router = express.Router();

// Se o cliente pedir GET na raiz das rotas de produto, manda pro médico listar
router.get('/', listarProdutos);

// Se pedir POST, manda pro médico criar
router.post('/', criarProduto);

export default router;