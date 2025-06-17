const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Conexão com o banco de dados MySQL
const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // ou o usuário que você estiver usando
  password: '1337',          // sua senha do MySQL
  database: 'sistema_login'
});

// Testa conexão com o banco
conexao.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

// Rota de login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ sucesso: false, mensagem: 'Email e senha são obrigatórios.' });
  }

  const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
  conexao.query(query, [email, senha], (err, resultados) => {
    if (err) {
      console.error('Erro ao consultar o banco:', err);
      return res.status(500).json({ sucesso: false, mensagem: 'Erro no servidor.' });
    }

    if (resultados.length > 0) {
      return res.json({ sucesso: true });
    } else {
      return res.status(401).json({ sucesso: false, mensagem: 'Email ou senha inválidos.' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
