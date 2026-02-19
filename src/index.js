const express = require('express');
const app = express();
const port = 3000;

// Importamos las rutas de NONES
const nonesRoutes = require('./routes/nones.routes');

app.use(express.json());

// Montamos las rutas bajo la raíz /
app.use('/', nonesRoutes);

app.listen(port, () => {
  console.log(`Servidor NONES escuchando en http://localhost:${port}`);
});
