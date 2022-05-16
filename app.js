const {crearArchivoTabla} = require('./helpers/multiplicar');
const argv = require('./config/yargs.js');                

console.clear();

const base = argv.b;
const hasta = argv.h;
const listar = argv.l;

crearArchivoTabla(base, hasta, listar)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado!'))
    .catch( err => console.log(err));




