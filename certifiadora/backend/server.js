const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Altere se você tiver senha
  database: 'sistema_login' // Seu banco atual
});

// Verificar conexão com o banco
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL!');
  }
});

// Rota de login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  db.query(
    'SELECT * FROM usuarios WHERE email = ? AND senha = ?',
    [email, senha],
    (err, result) => {
      if (err) {
        console.error('Erro ao fazer login:', err);
        res.status(500).json({ sucesso: false, mensagem: 'Erro no servidor' });
      } else {
        if (result.length > 0) {
          res.json({ sucesso: true });
        } else {
          res.json({ sucesso: false, mensagem: 'Email ou senha inválidos' });
        }
      }
    }
  );
});

// Rota para buscar todas as doações
app.get('/doacoes', (req, res) => {
  db.query('SELECT * FROM doacoes', (err, result) => {
    if (err) {
      console.error('Erro ao buscar doações:', err);
      res.status(500).json({ sucesso: false, mensagem: 'Erro ao buscar doações' });
    } else {
      res.json(result);
    }
  });
});

// Rota para registrar nova doação
app.post('/doacoes', (req, res) => {
  const { origem, tipo, nota_fiscal, quantidade, validade } = req.body;

  db.query(
    'INSERT INTO doacoes (origem, tipo, nota_fiscal, quantidade, validade) VALUES (?, ?, ?, ?, ?)',
    [origem, tipo, nota_fiscal, quantidade, validade],
    (err, result) => {
      if (err) {
        console.error('Erro ao inserir doação:', err);
        res.status(500).json({ sucesso: false, mensagem: 'Erro ao registrar doação' });
      } else {
        res.json({ sucesso: true, mensagem: 'Doação registrada com sucesso!' });
      }
    }
  );
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
