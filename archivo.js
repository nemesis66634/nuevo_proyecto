
let nombre = document.getElementById('input1').value;
let mostrar = document.getElementById('div1');

function empezar(){
    if(nombre == "jhon"){
      mostrar.innerHTML = `
        <p>Hola Jhon</p>
      `
    } else {
      mostrar.innerHTML = `
        <p>Hola y ya</p>
      `
    }

}


