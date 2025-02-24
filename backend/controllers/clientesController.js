// controllers/clientesController.js
const Cliente = require('../models/Cliente');

// Agregar un nuevo cliente
exports.addCliente = async (req, res) => {
    try {
        const { nombre, correo, direccion, telefono } = req.body;

      
        if (!nombre || !correo) {
            return res.status(400).json({ message: 'Nombre y correo son obligatorios' });
        }

        // Crear una nueva instancia de Cliente
        const nuevoCliente = new Cliente({ nombre, correo, direccion, telefono });

        // Guardar el nuevo cliente en la base de datos
        await nuevoCliente.save();

        // Responder con un mensaje de éxito
        res.status(201).json({ message: 'Cliente agregado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al agregar cliente' });
    }
};
