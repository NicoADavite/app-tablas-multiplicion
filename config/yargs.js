const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base sobre la cual se armará la tabla de multiplicación'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Número hasta el cual multiplicaremos nuestra base'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla de multiplicación por consola'
                })
                .check((argv, options) => {
                    if( isNaN(argv.b)){
                        throw 'La base ingresada por consola debe ser un número';
                    }
                    return true;
                })
                .argv

module.exports = argv;