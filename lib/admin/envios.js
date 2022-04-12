import { render, addNavBarFunctions } from '../others/utils.js';
import { trackingTables, navbar, headerListaTrack } from '../views/templates.js'

export function envios(view, model, state) {

    view = {};
    view.navbar = navbar();
    view.header = headerListaTrack();
    view.trackingTables = trackingTables(); 

    render(view, true);
    addNavBarFunctions();

} 