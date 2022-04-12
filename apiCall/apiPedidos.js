export async function crearPedido(data) {

    console.log(`Api Crear Producto, la data recib.: ${data}`);

    let result = new Promise((resolve, reject) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({

            "client": {
                id: data.client.id,
                nombre: data.client.nombre,
                telefono: data.client.telefono,
                ciudad: data.client.ciudad,
                provincia: data.client.provincia
            },
            "pedido": {

                producto: data.pedido.producto,
                cantidad: data.pedido.cantidad,
                precio: data.pedido.precio,
                codigoProdu: data.pedido.codigoProdu,
                montoPagado: data.pedido.montoPagado,
                montoSaldo: data.pedido.montoSaldo
            },

            "tracking": {

                empresa: data.tracking.empresa,
                telefono: data.tracking.telefono,
                whatsapp: data.tracking.whatsapp,
                empRecep: data.tracking.empRecep,
                empDestino: data.tracking.empDestino,
                facturaNro: data.tracking.facturaNro,
                envioNro: data.tracking.envioNro,
                pagoDesti: data.tracking.pagoDesti

            }

        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/pedido/", requestOptions)
            .then(response => response.text())
            .then(result => { resolve(result) })
            .catch(error => {
                reject(error);
            });
    });

    // return the promise
    return result;
}

export async function getPedidoById(data) {

    console.log(`Api Get Pedidos ${data}`);

    let result = new Promise((resolve, reject) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://localhost:8080/api/pedido/${data}`, requestOptions)
            .then(response => response.text())
            .then(result => { resolve(result) })
            .catch(error => {
                reject(error);
            });

    });

    // return the promise
    return result;
    
}