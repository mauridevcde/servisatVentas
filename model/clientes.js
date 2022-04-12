var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = new Schema({
    cliente: {
        idCliente: { type: int32 },
        direccion: { type: String },
        cel: { type: String },
        cobrador: { type: String },
        nombreEmpresa: { type: String },
        correo: { type: String },
        fechaInicio: { type: Number },
        nombre: { type: String },
        obs: { type: String },
        nroCelular: { type: String },
        rucEmpresa: { type: String },
        vendedor: { type: String },
        apellido: { type: String },
        pais: { type: String },
        provincia: {type: String},
        ciudad: {type: String},
        estado: { type: Boolean }
    },
    contacto: {
        cIdContacto: { type: String },
        cDireccion: { type: String },
        cCel: { type: String },
        cDoc: { type: String },
        cCorreo: { type: String },
        cNombre: { type: String },
        cObs: { type: String },
        cNroCelular: { type: String },
        cApellido: { type: String }
    }
});
module.exports = Clientes = mongoose.model('Cliente', ClienteSchema);