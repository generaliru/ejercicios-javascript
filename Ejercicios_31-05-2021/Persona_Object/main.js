//crear objetoPersona(nombre,apellidos,edad,saludar(),decirEdad())

function crearPersona(nombres,apellidos,edad){
    Persona = {
        nombres: nombres,
        apellidos: apellidos,
        edad: edad,
        saludo: function(){
            console.log('Hola soy ' + this.nombres);
        },
        decirEdad: function(){
            console.log('Mi edad es ' + this.edad);
        }
    }
    return Persona;
}
nombre = prompt('Ingresa tu nombre')
apellidos = prompt('Hola '+nombre+ '!! tus apellidos')
edad = prompt('Ingresa tu edad')
Persona = crearPersona(nombre,apellidos,23);
Persona.saludo()
Persona.decirEdad()

