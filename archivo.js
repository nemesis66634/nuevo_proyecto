

function empezar(){
    
    let nombre = document.getElementById('input1').value;
    let mostrar = document.getElementById('div1');

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


