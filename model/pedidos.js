const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PedidoSchema = new Schema({

    //Datos del cliente
    client: [{
        id: { type: String },           //id interno
        nombre: { type: String },
        telefono: { type: String },
        ciudad: { type: String },
        provincia: { type: String }
    }],
    //datos del producto
    pedido: [{
        producto: { type: String },
        cantidad: { type: String },
        precio: { type: String },
        codigoProdu: { type: String },
        montoPagado: { type: String },
        montoSaldo: { type: String }
    }],
    //Datos del tracking
    tracking: [{
        empresa: { type: String },
        telefono: { type: String },
        whatsapp: { type: String },
        empRecep: { type: String },
        empDestino: { type: String },
        facturaNro: { type: String },
        envioNro: { type: String },
        pagoDesti: { type: Boolean }, //true pago destino //false otras vias de pago
        imagenes: [{ image: { type: String } }]
    }]

});

module.exports = Pedidos = mongoose.model('Pedido', PedidoSchema);