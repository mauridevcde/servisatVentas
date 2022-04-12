var Pedido = require('../model/pedidos');

exports.pedido_create = async function (req, res) {
    console.log("el req de pedido_create:", req.body);
    const pedido = new Pedido({

        client: {

            id: req.body.client.id,
            nombre: req.body.client.nombre,
            telefono: req.body.client.telefono,
            ciudad: req.body.client.ciudad,
            provincia: req.body.client.provincia

        },
        pedido: {

            producto: req.body.pedido.producto,
            cantidad: req.body.pedido.cantidad,
            precio: req.body.pedido.precio,
            codigoProdu: req.body.pedido.codigoProdu,
            montoPagado: req.body.pedido.montoPagado,
            montoSaldo: req.body.pedido.montoSaldo,

        },

        tracking: {
            empresa: req.body.tracking.empresa,
            telefono: req.body.tracking.telefono,
            whatsapp: req.body.tracking.whatsapp,
            empRecep: req.body.tracking.empRecep,
            empDestino: req.body.tracking.empDestino,
            facturaNro: req.body.tracking.facturaNro,
            envioNro: req.body.tracking.envioNro,
            pagoDesti: req.body.tracking.pagoDesti,
            //   imagenes: [{ image: req.imagenes.imagen }]
        }

    })

    pedido.save(pedido).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algo ocurrió mientras se realizaba la carga"
        });
    });
}

//export function getPedidos(req, res) {
//    Pedido.find({}).then(data => {
//        res.send(data);
//    }).catch(err => {
//        res.status(500).send({
//            message: err.message || "Algo ocurrió mientras se realizaba la carga"
//        });
//    });
//}

exports.pedido_get_one = function (req, res) {
    let id = req.params.id;

    Pedido.find({ "client.id": id }, (err, pedido) => {
        if (err) {
            console.log(
                "Ha ocurrido un error al intentar obtener el pedido: " + err
            );
            return res.status(500).send({ message: 'Error al devolver los datos' });
        }

        if (!pedido) {
            return res.status(404).send({ message: 'El elemento no existe' });
        }

        return res.status(200).send({
            pedido
        });
    })
}

exports.pedido_update = function (req, res) {
    console.log("el req de pedido_update:", req.body);
    Pedido.findByIdAndUpdate(req.body.client.id, {
        $set: {
            client: {
                id: req.body.client.id,
                nombre: req.body.client.nombre,
                telefono: req.body.client.telefono,
                ciudad: req.body.client.ciudad,
                provincia: req.body.client.provincia

            },
            pedido: {
                producto: req.body.pedido.producto,
                cantidad: req.body.pedido.cantidad,
                precio: req.body.pedido.precio,
                codigoProdu: req.body.pedido.codigoProdu,
                montoPagado: req.body.pedido.montoPagado,
                montoSaldo: req.body.pedido.montoSaldo,

            },
            tracking: {
                empresa: req.body.tracking.empresa,
                telefono: req.body.tracking.telefono,
                whatsapp: req.body.tracking.whatsapp,
                empRecep: req.body.tracking.empRecep,
                empDestino: req.body.tracking.empDestino,
                facturaNro: req.body.tracking.facturaNro,
                envioNro: req.body.tracking.envioNro,
                pagoDesti: req.body.tracking.pagoDesti,
                //   imagenes: [{ image: req.imagenes.imagen }]
            }
        }
    })

    return res.status(200).send({ pedido: req.body });
}

