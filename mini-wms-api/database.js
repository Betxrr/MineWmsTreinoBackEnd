import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const sql = require('mssql/msnodesqlv8');

// Aqui é o mapa de onde o banco está
const config = {
    server: 'localhost\\SQLEXPRESS01', // Nome do seu servidor (as duas barras \\ são obrigatórias no JavaScript)
    database: 'MiniWMS',               // O nome do banco que criamos
    options: {
        trustedConnection: true        // Essa é a mágica que avisa que estamos usando a Autenticação do Windows (sem senha)
    }
};

// Função para testar se a porta do galpão abre

async function testarConexao() {
    try {
        console.log('⏳ Tentando conectar ao SQL Server...');
        const conexao = await sql.connect(config);
        console.log('✅ AEEE! Conectado com sucesso ao MiniWMS!');
        
        // Se conectou, a gente já faz um teste e pede pra ler a tabela de Produtos!
        const resultado = await conexao.request().query('SELECT * FROM Produtos');
        console.log('📦 Produtos no Banco:', resultado.recordset);

    } catch (erro) {
        console.error('❌ Deu ruim na conexão:', erro);
    }
}

// Manda rodar a função
testarConexao();











