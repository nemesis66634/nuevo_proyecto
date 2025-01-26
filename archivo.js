function mostrar() {
    const input1 = document.getElementById("input1");
    const div1 = document.getElementById("div1");

    function actualizarDiv() {
        const valor = input1.value;
        if (valor === "nombre") {
            div1.innerHTML = `<p>Tu nombre es: ${valor}</p>`;
        } else {
            div1.innerHTML = `<p>vaya nombre de m... ${valor} jaja</p>`;
        }
    }

    input1.addEventListener("input", actualizarDiv);

    input1.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            actualizarDiv();
        }
    });
}