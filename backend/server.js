const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Importa CORS
const productController = require('./controllers/productController');

const app = express();
const port = 5000;

// **Habilitar CORS**
app.use(cors());

app.use(express.json()); // Habilita JSON

// Rutas
app.get('/productos', productController.getProductos);
app.get('/productos/:id', productController.getProductoById);
app.post('/productos', productController.createProducto);
app.put('/productos/:id', productController.updateProducto);
app.delete('/productos/:id', productController.deleteProducto);

// Conexión a MongoDB y arranque del servidor
mongoose.connect('mongodb://localhost:27017/productosDB')
.then(() => {
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Error de conexión a MongoDB:', err);
});
