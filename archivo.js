function mostra(){
    const input1 = document.getElementById("input1").value;
    const div1 = document.getElementById("div1");
    if(input1 == "nombre"){
        input1.innerHTML = `
            <p>Tu nombre es : ${input1}</p>
        `
    }else{
        input1.innerHTML = `
        <p>valla nombre de m...  ${input1}  jaja</p>
        `
    }
}


