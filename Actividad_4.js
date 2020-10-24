//Autor: Pablo Sanchez (Codigo: 2018214003)

let regex= /^[A-ZÑ]\d{3}[a-zñ]{3}[^A-ZÑa-zñ\d\s]{3}$/

function evaluar(a){
    let str=a.trim();
    let check=regex.test(str);
    if(check){return "La contraseña es válida y ha sido aceptada."}
    return "La contraseña es inválida y ha sido rechazada."
}

function validar(){
    let password=document.getElementById("contraseña").value;
    document.getElementById("mensaje").value=evaluar(password);
}
