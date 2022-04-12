import { render, addNavBarFunctions } from '../others/utils.js';
import { trackingTables, navbar, headerListaVenta, buscarClientesNav, tablaVentas } from '../views/templates.js'

export function listaVentas(view, model, state) {

    view = {};
    view.navbar = navbar();
    view.header = headerListaVenta();
    view.buscarClientesNav = buscarClientesNav();
    view.tablaVentas = tablaVentas();

    render(view, true);
    addNavBarFunctions();

} 