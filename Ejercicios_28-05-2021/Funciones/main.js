
console.log('Suma de numeros:')
function sumaNumeros(num1,num2){
    return num1+num2;
}

for(var j = 1; j < 10; j++){
    console.log(j+'+'+(j+1)+'='+sumaNumeros(j,j+1))
}

console.log('Nombre de los meses del año:')
//Arreglo por meses
var meses = ['Enero','Frebrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Ocutbre','Noviembre','Diciembre'];
//Imprimir Arreglo
let i = 0;
while(meses[i]){
    console.log(meses[i])
    i++
}
