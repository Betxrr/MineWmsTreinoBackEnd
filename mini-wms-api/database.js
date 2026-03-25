import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const sql = require('mssql/msnodesqlv8');

const servidor = 'localhost\\SQLEXPRESS01';
const banco = 'MiniWMS';

// Aqui é o mapa de onde o banco está
const config = {
    connectionString: `Driver={ODBC Driver 18 for SQL Server};Server=${servidor};Database=${banco};Trusted_Connection=Yes;TrustServerCertificate=Yes;`,
    options: {
        trustedConnection: true        // Essa é a mágica que avisa que estamos usando a Autenticação do Windows (sem senha)
    }
};

// Função 1: Buscar a lista (GET)

export async function buscarProdutos() {
    let conexao;
    try {
        conexao = await sql.connect(config);
        const resultado = await conexao.request().query('SELECT * FROM Produtos');
        return resultado.recordset; // Aqui é onde os dados realmente estão
    } catch (erro) {
        console.error('❌ Deu ruim ao buscar produtos:', erro);
        throw erro;
    } finally {
        if (conexao) {
            await conexao.close();
        }
    }
}

// Função 2: Salvar um novo (POST)
export async function salvarProduto(dados) {
    let conexao;
    try {
        conexao = await sql.connect(config);
        const request = conexao.request();
        
        // Passando os dados com segurança para o SQL
        request.input('nome', sql.VarChar, dados.nome);
        request.input('codigo', sql.VarChar, dados.codigo_barras);
        request.input('cat', sql.VarChar, dados.categoria);
        request.input('qtd', sql.Int, dados.quantidade);
        request.input('preco', sql.Decimal(10,2), dados.preco);

        const query = `
            INSERT INTO Produtos (nome, codigo_barras, categoria, quantidade, preco, ativo)
            VALUES (@nome, @codigo, @cat, @qtd, @preco, 1)
        `;
        
        await request.query(query);
        return { mensagem: "Produto cadastrado com sucesso no SQL!" };
    } catch (erro) {
        console.error('❌ Erro no SQL (Salvar):', erro);
        throw erro;
    } finally {
        if (conexao) await conexao.close();
    }
}