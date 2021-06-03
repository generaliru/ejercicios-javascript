//crear objetoPersona(nombre,apellidos,edad,saludar(),decirEdad())

function setImgOfDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(function(data){
            console.log(data.message)
            document.getElementById('main').innerHTML="<img src='" + data.message + "'>"
        })
}


    