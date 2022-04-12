import { navBarPrincipal } from "../views/templates.js";
import { render } from "../others/utils.js";

export function home(view, model) {
    // clear view
	view = {};

    view.navbarPrinc = navBarPrincipal(); //templates.js //almacena en un nuevo objeto el nav principal
    
    render(view, true); //utils.js

    addButtonsFunction() 
    
    //mientras la funcion del navbar queda aca pq o sino hendy
    function addButtonsFunction() {
        document.querySelector('#listaVenta').onclick = event => {
            console.log('ListaVentas button');
            let customEvent = new CustomEvent('ready', { detail: 'listaVenta' }); 
            document.dispatchEvent(customEvent);
        };
        document.querySelector('#newEnvioBtn').onclick = event => {
            console.log('nuevoEnvio button');
            let customEvent = new CustomEvent('ready', { detail: 'nuevoEnvio' }); 
            document.dispatchEvent(customEvent);
        };
        document.querySelector('#stateEnvioBtn').onclick = event => {
            console.log('stateEnvio button');
            let customEvent = new CustomEvent('ready', { detail: 'stateEnvio' }); 
            document.dispatchEvent(customEvent);
        };
        document.querySelector('#systBtn').onclick = event => {
            console.log('sistema button');
            let customEvent = new CustomEvent('ready', { detail: 'sistema' });
            document.dispatchEvent(customEvent);
        };
        document.querySelector('#logoutBtn').onclick = event => {
            console.log('logout button');
            let customEvent = new CustomEvent('ready', { detail: 'logout' }); 
            document.dispatchEvent(customEvent);
        };
    }
}


