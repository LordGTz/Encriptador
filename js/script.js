let encriptar = document.getElementById("encriptar");
let desencriptar = document.getElementById("desencriptar");
let copiar = document.getElementById("copiar")
let entrada = document.getElementById("entrada");
let resultado = document.getElementById("resultado")

let codigo = ["enter","imes","ai","ober","ufat"];
let mensaje;
let revision = [];
encriptar.addEventListener("click", (event)=>{
    event.preventDefault();
    mensaje = entrada.value
    revision = [];
    for(letras of mensaje){
    switch(letras){
        case "a": revision.push(codigo[0]);break;
        case "e": revision.push(codigo[1]);break;
        case "i": revision.push(codigo[2]);break;
        case "o": revision.push(codigo[3]);break;
        case "u": revision.push(codigo[4]);break;
        default : revision.push(letras)
    }
    resultado.value = revision.join("")
}})
entrada.addEventListener("keyup",()=>{
    if(entrada.value.length > 0){
        document.getElementById("con-resultado").style.display = "block"
        document.getElementById("sin-resultado").style.display = "none"
    }else{
        resultado.value = ""
        document.getElementById("con-resultado").style.display = "none"
        document.getElementById("sin-resultado").style.display = "block"
    }
})