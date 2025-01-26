function mostra(){
    const input1 = document.getElementById("input1").value;
    const div1 = document.getElementById("div1");
    if(input1 == "nombre"){
        innerHTML = `
            <p>Tu nombre es : ${input1}</p>
        `
    }else{
        innerHTML = `
        <p>valla nombre de m...  ${input1}  jaja</p>
        `
    }
}


