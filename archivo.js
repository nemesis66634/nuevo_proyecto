function mostrar(){
    const input1 = document.getElementById("input1").value;
    const div1 = document.getElementById("div1");

    if(input1 == "nombre"){
        div1.innerHTML = `
            <p>Tu nombre es : ${input1}</p>
        `;
    } else {
        div1.innerHTML = `
            <p>valla nombre de m...  ${input1}  jaja</p>
        `;
    }

    document.getElementById("input1").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const input1 = document.getElementById("input1").value;
            const div1 = document.getElementById("div1");
            if(input1 == "nombre"){
                div1.innerHTML = `
                    <p>Tu nombre es : ${input1}</p>
                `;
            } else {
                div1.innerHTML = `
                    <p>valla nombre de m...  ${input1}  jaja</p>
                `;
            }
        }
    });


}