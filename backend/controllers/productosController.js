const Product = require('../models/Product');

// Obtener todos los productos
exports.getProductos = async (req, res) => {
    try {
        const productos = await Product.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos' });
    }
};

// Agregar un producto
exports.addProducto = async (req, res) => {
    try {
        const { nombre, precio, descripcion } = req.body;
        const nuevoProducto = new Product({ nombre, precio, descripcion });
        await nuevoProducto.save();
        res.status(201).json({ message: 'Producto agregado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar producto' });
    }
};
