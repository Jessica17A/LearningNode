const express = require('express');
const Cliente = require('../models/Cliente'); // Asegúrate de que la ruta al modelo sea correcta

const router = express.Router();

// Ruta para agregar un cliente
router.post('/', async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    console.log('Cliente agregado:', nuevoCliente);  // Verifica en consola si el cliente se agrega
    res.status(201).json({ message: 'Cliente agregado exitosamente' });
  } catch (error) {
    console.error('Error al agregar cliente:', error);
    res.status(500).json({ message: 'Error al agregar cliente' });
  }
});

module.exports = router;
