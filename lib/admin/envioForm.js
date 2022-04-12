import { render, addNavBarFunctions } from '../others/utils.js';
import { navbar, headerForm, envioForm } from '../views/templates.js'
import { crearPedido, getPedidoById } from '../../apiCall/apiPedidos.js';


export function enviosForm(view, model, state) {
    
    view.navbar = navbar();  //templates.js
    view.header = headerForm(); //templates.js 
    view.envioForm = envioForm(); //templates.js

    render(view, true); //util.js

    addNavBarFunctions(); //utils.js

    let client = {
        id: "", 
        nombre: "",
        telefono: "",
        ciudad: "",
        provincia: ""
    };
    let pedido = {
        producto: "",
        cantidad: "",
        precio: "",
        codigoProdu: "",
        montoPagado: "",
        montoSaldo: ""
    }
    let tracking = {
        empresa: "",
        telefono: "",
        whatsapp: "",
        empRecep: "",
        empDestino: "",
        facturaNro: "",
        envioNro: "",
        pagoDesti: false
    }
    
    // BTN Guardar
    let btnGuardar = document.getElementById('btnGuardarEnvioForm');

    btnGuardar.addEventListener('click', () => {

        //datos del cliente 
        client.id = document.getElementById('idCliForm').value;
        client.telefono = document.getElementById('cliTelForm').value;
        client.nombre = document.getElementById('clienteForm').value;
        client.ciudad = document.getElementById('ciudadForm').value;
        client.provincia = document.getElementById('provinciaForm').value;
        //Mostrar datos como cliente
        console.log(`Cliente: ${client.nombre}, ciudad: ${client.ciudad}, provincia: ${client.provincia}`);

        //datos del producto 
        pedido.producto = document.getElementById('productoForm').value;
        pedido.cantidad = document.getElementById('cantidadForm').value;
        pedido.precio = document.getElementById('precioForm').value;
        pedido.codigoProdu = document.getElementById('codProduForm').value;
        pedido.montoPagado = document.getElementById('pagoForm').value;
        pedido.montoSaldo = document.getElementById('saldoForm').value;
        //Mostrar datos como pedido
        console.log(`Producto: ${pedido.producto}, cantidad: ${pedido.cantidad}, precio: ${pedido.precio}`);
        console.log(`codigo: ${pedido.codigoProdu}, pago: ${pedido.montoPagado}, saldo: ${pedido.montoSaldo}`);

        //datos del tracking
        tracking.empresa = document.getElementById('empresaForm').value;
        tracking.telefono = document.getElementById('telefonoForm').value;
        tracking.whatsapp = document.getElementById('whatsappForm').value;
        tracking.empRecep = document.getElementById('recepForm').value;
        tracking.empDestino = document.getElementById('destinoForm').value;
        tracking.facturaNro = document.getElementById('facturaNroForm').value;
        tracking.envioNro = document.getElementById('envioNroForm').value;
        tracking.pagoDesti = document.getElementById('inlineRadio1').checked;

        //Muestra los del tracking
        console.log(`empresa: ${tracking.empresa}, telefono: ${tracking.telefono},whatsapp ${tracking.whatsapp}, empRecep: ${tracking.empRecep}`);
        console.log(`empDestino: ${tracking.empDestino}, facturaNro: ${tracking.facturaNro}, envioNro: ${tracking.facturaNro}`);
        console.log(`envioNro: ${tracking.envioNro}, radioBtn: ${tracking.pagoDesti}`);

        let envio = {
            client,
            pedido,
            tracking
        };

        console.log("El envio", envio);
        crearPedido(envio);

    })

    //BTN Cancelar
    let btnCancelar = document.getElementById('btnCancelarEnvioForm');
    btnCancelar.addEventListener('click', () => {

        let id = document.getElementById('idCliForm').value;
        console.log(`el id cliente: ${id}`);
        getPedidoById(id);
    })


    // Aqui comienzan las funciones de tratamiento de imagenes
    document.getElementById('image').onchange = event => {
        image_select()
    }

    document.getElementById('selectIMG').onclick = () => {
        document.getElementById('image').click();
    }

    var images = [];
    function image_select() {
        var image = document.getElementById('image').files;

        for (let i = 0; i < image.length; i++) {

            if (check_duplicate(image[i].name)) {
                images.push({
                    "name": image[i].name,
                    "url": URL.createObjectURL(image[i]),
                    "file": image[i],
                })
            } else {
                alert(image[i].name + " Esta imágen ya existe");
            }
        }

        document.getElementById('form').reset();
        document.getElementById('container').innerHTML = image_show();
        var deleteBtn = document.querySelectorAll('.deleteImg');

        deleteBtn.forEach(btn => {
            console.log(btn);
            btn.onclick = event => {

                delete_image(btn.id)
            }
        })
    }

    function image_show() {
        var image = "";
        images.forEach((i) => {
            image += /* html */`<div class="image_container d-flex justify-content-center position-relative">
                    <img src="`+ i.url + `" alt="Image">
                    <span class="position-absolute deleteImg" id="${images.indexOf(i)}" >&times;</span>
              </div>`;
        })
        return image;
    }

    function delete_image(e) {
        images.splice(e, 1);
        document.getElementById('container').innerHTML = image_show();
    }
 
    function check_duplicate(name) {
        var image = true;
        if (images.length > 0) {
            for (let e = 0; e < images.length; e++) {
                if (images[e].name == name) {
                    image = false;
                    break;
                }
            }
        }
        return image;
    }

    function get_image_data() {
        var form = new FormData()
        for (let index = 0; index < images.length; index++) {
            form.append("file[" + index + "]", images[index]['file']);
        }
        return form;
    }
}