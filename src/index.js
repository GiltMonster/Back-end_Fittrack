const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/usuario', usuarioRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});