
function actualizarDiv() {
    const valor = document.getElementById("input1").value;
    const div1 = document.getElementById("div1");
    if (valor === "nombre") {
        div1.innerHTML = `<p>Tu nombre es: ${valor}</p>`;
    } else {
        div1.innerHTML = `<p>vaya nombre de m... ${valor} jaja</p>`;
    }
}


function mostrar() {
    actualizarDiv();
}


const valor = document.getElementById("input1");
valor.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        actualizarDiv();
    }
});

