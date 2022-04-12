var Cliente = require('../model/clientes');

exports.cliente_create = async function (req, res) {
    console.log("REQ Body Client", req.body.client);

    const cliente = new Cliente({
        client: {
            id: req.body.client.id,
            direccion: req.body.client.direccion,
            telefono: req.body.client.telefono,
            nombre: req.body.client.nombre,
            ciudad: req.body.client.ciudad,
            provincia: req.body.client.provincia,
            state: req.body.client.state
        }
    })

    cliente.save(function (err) {

        if (err) {
            console.log("cliente:", cliente);
            console.log("Error:", err);
            // return next(err)
        }

        res.send({ 'message': "ok" })
    });

}

