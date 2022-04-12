import { logIn } from "../lib/sistema/login.js";
import { home } from "../lib/sistema/home.js";
import { envios } from '../lib/admin/envios.js'
import { enviosForm } from '../lib/admin/envioForm.js'
import { listaVentas } from '../lib/admin/listaVentas.js'

let view = {};
let model = {};

console.log("render");

home(view, model) //home.js

//logIn(view, model);

document.addEventListener('ready', event => {

    if (event.detail == 'nuevoEnvio') {  
        enviosForm(view, model); //envioForm.js
    } else if (event.detail == 'stateEnvio') {
        envios(view, model); //envios.js
        
    }else if (event.detail == 'listaVenta'){
        listaVentas(view, model); //envios.js
    }else if (event.detail == 'sistema') {

    } else if (event.detail == 'logout') {

    } else if (event.detail == 'exit') {
        home(view, model);
    }

})