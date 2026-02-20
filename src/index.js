const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nonesRoutes = require('./routes/nones.routes');

// Carga variables de entorno desde .env (si existe)
dotenv.config();

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Rutas de la API de NONES
app.use('/api/nones', nonesRoutes);

// Endpoint simple para probar que el backend está vivo
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'nones-backend' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`NONES backend escuchando en el puerto ${PORT}`);
});
