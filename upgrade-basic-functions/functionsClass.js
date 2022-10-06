/* function comerPaella() {
    console.log ('cojer cuchara');
    console.log ('llenar cuchara de paella');
    console.log ('instertar cuchara en la boca')
}

comerPaella(); */


function comerPaella(tipo) {

    if (tipo ==='valenciana') {
        console.log('comer con mucho respeto')
    }
    console.log ('cojer cuchara');
    console.log ('llenar cuchara de paella');
    console.log ('instertar cuchara en la boca')
    console.log('Paella '+ tipo + ' terminada.')

    return 'Una buena siesta ' + tipo;
}

const comerPaellaValenciana = comerPaella('valenciana');
/* comerPaella('mixta'); */

console.log(comerPaellaValenciana);