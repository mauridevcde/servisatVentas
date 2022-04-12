const express = require('express');

const pedidoController = require('../controller/dbPedidos');

const route = express.Router();

route.post('/api/pedido/', pedidoController.pedido_create);
route.get('/api/pedido/:id?', pedidoController.pedido_get_one);

module.exports = route;