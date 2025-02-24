const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/tienda',{
}).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión:', err));

// Rutas para productos
const productosRoutes = require('./routes/productos');
app.use('/api/productos', productosRoutes);


// Rutas para clientes
// En server.js
const clientesRoutes = require('./routes/clientesRouters');

app.use('/api/clientes', clientesRoutes); 



// Iniciar servidor
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
