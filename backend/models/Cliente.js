const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true,
    unique: true
  },
  direccion: String,
  telefono: String,
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
