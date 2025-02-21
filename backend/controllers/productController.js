const Producto = require('../models/Product');

// Obtener todos los productos
const getProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al obtener productos', error: err });
    }
};

// Obtener un producto por ID
const getProductoById = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
        res.json(producto);
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al obtener el producto', error: err });
    }
};

// Agregar un nuevo producto
const createProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto({
            nombre: req.body.nombre,
            precio: req.body.precio
        });
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al agregar el producto', error: err });
    }
};

// Actualizar un producto
const updateProducto = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });

        producto.nombre = req.body.nombre;
        producto.precio = req.body.precio;
        await producto.save();
        res.json(producto);
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al actualizar el producto', error: err });
    }
};

// Eliminar un producto
const deleteProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndDelete(req.params.id);
        if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
        res.json({ mensaje: 'Producto eliminado' });
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al eliminar el producto', error: err });
    }
};

module.exports = {
    getProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto
};
