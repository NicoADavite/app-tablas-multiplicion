const fs = require('fs');

const crearArchivoTabla = async ( base = 5, hasta = 10, l = false ) => {

    try {

        let salida = `==================================\n`;
        salida += `          TABLA DEL ${base}\n`;
        salida += `==================================\n`;
    
        for(let i = 1; i <= hasta; i++){
            salida += `${base} X ${i} = ${base * i}\n`;
        }

        ( l === true ) ? console.log(salida) : null;
    
        fs.writeFileSync(`./tablas/tablaDel${base}.txt`, salida, 'utf8');
    
        return `tablaDel${base}.txt`;

    } catch (error) {
        
        throw error;

    }
}

module.exports = {
    crearArchivoTabla
};