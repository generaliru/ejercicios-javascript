//alert('Hola Mundo');

var nombre = 'Uriel German';
var apellidos = 'Camacho Ayala';
var edad = 30;

console.log(nombre,apellidos)
console.log(nombre + ' ' + apellidos);
console.log('Mi edad es: ' + 23);

var numero = 11;
var otroNumero = '11';
var bin = true && false;


console.log('numero: ' + typeof(numero));
console.log('otroNumero: ' + typeof(otroNumero));
console.log('numero + otroNumero: ' + typeof(numero + otroNumero));
console.log('numero - otroNumero: ' + typeof(numero - otroNumero));
console.log('numero * otroNumero: ' + typeof(numero * otroNumero));
console.log('numero / otroNumero: ' + typeof(numero / otroNumero));
console.log('bin: ' + bin);


var base = parseInt(prompt('Escribir la base del triangulo'));
var altura = parseInt(prompt('Escribir la altura del triangulo'));
var resultado = (base * altura)/2;

alert('El área del triangulo es: ' + resultado);
