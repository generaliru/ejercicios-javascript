//Ingresa valores

var salarioDiario = parseInt(prompt('Ingresa tu salario diario'));

//Calcula diferentes tipos de Salarios


var salarioMensual = salarioDiario*30
var salarioQuicenal = salarioDiario*15

//Muestra resultados    


console.log('Salario Bruto Quincenal: ' + salarioQuicenal);
console.log('Salario Bruto Mensual: ' + salarioMensual);
console.log('Salario Bruto Quincenal: ' + (salarioQuicenal*(1-.4)));
console.log('Salario Bruto Mensual: ' + (salarioMensual*(1-0.4)));
