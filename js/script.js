let encriptar = document.getElementById("encriptar");
let desencriptar = document.getElementById("desencriptar");
let entrada = document.getElementById("entrada");
let resultado = document.getElementById("resultado")

let codigo = ["enter","imes","ai","ober","ufat"];
let mensaje;

encriptar.addEventListener("click", (event)=>{
    event.preventDefault();
    mensaje = entrada.value;
})

/*
desencriptar.addEventListener("click", (event)=>{
    event.preventDefault(); 
    resultado.value = mensaje;
})
*/