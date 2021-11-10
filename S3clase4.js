
/*var nombre = 'Ana':
if (nombre.length >7) {
    console.log('Qué nombre tan largo tienes!');
    alert('Qué nombre tan largo tienes!');
} else {
    console.log('Tu nombre no es muy largo');
    alert('Tu nombre no es muy largo');
}*/

/*varios if y else:
var num = parseInt(prompt('Ingresa un numero'));
if (num <10) {
    alert('diste un numero pequeño');
} else if (num <100) {
    alert('diste un numero mediano');
} else {
    alert('diste un numero grande');
}*/

//if anidados:

var temperatura = parseInt(prompt('Ingresa una temperatura'));
if (temperatura > 10){
    if (temperatura < 26){
        alert('temperatura moderada');
    } else if (temperatura > 26) {
        alert('temperatura alta');
    }
} else {
    alert('Hace frio en la ciudad')
}
