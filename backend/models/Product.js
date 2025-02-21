const mongoose = require('mongoose');

// Definir el esquema del producto
const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
});

// Crear el modelo basado en el esquema
const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
