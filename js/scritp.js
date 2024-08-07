const ingresoTexto = document.getElementById ("ingresoTexto");
const botonEncriptar = document.getElementById ("botonEncriptar");
const botonDesencriptar = document.getElementById ("botonDesencriptar");
const botonCopiar = document.getElementById ("botonCopiar");
const mensajeFinal = document.getElementById ("mensajeFinal");
const munheco = document.getElementById("munheco");
const rightInfo = document.getElementById("rightInfo");
const right = document.getElementById("right");

    //La letra "e" es convertida para "enter"
    //La letra "i" es convertida para "imes"
    //La letra "a" es convertida para "ai"
    //La letra "o" es convertida para "ober"
    //La letra "u" es convertida para "ufat"

    let remplazo = [
        ["e","enter"],
        ["i","imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"],
    ]

    const remplace =(nuevoValor) =>{
        mensajeFinal.innerHTML = nuevoValor;
        munheco.classList.add = "oculto";
        ingresoTexto.value="";
        rightInfo.style.display ="none";
        botonCopiar.style.display ="block";
        right.classList.add("ajustar");
        mensajeFinal.classList.add("ajustar");
    
    }

    const reset = () => {
        mensajeFinal.innerHTML="";
        munheco.classList.remove = "oculto";
        rightInfo.style.display ="block";
        botonCopiar.style.display ="none";
        right.classList.remove("ajustar");
        mensajeFinal.classList.remove("ajustar");    
        ingresoTexto.focus();    
    }

botonEncriptar.addEventListener("click", () =>{
    const texto =ingresoTexto.value.toLocaleLowerCase()
    if(texto !=""){
        function encriptar(newText){
            for (let i = 0; i < remplazo.length; i++) {
                if (newText.includes(remplazo[i][0])){
                    newText = newText.replaceAll(remplazo[i][0], remplazo[i][1]);
                };
            };
            return newText
        };
    }else{
        alert("Ingrese texto a Encriptar");
        reset();
    }
    //const textoEncriptado = encriptar(texto);
    remplace( encriptar(texto)); 
});
botonDesencriptar.addEventListener("click",() =>{
    const texto =ingresoTexto.value.toLocaleLowerCase()
    if(texto!=""){
        function desencriptar(newText){
            for (let i = 0; i < remplazo.length; i++) {
                if (newText.includes(remplazo[i][0])){
                    newText = newText.replaceAll(remplazo[i][1], remplazo[i][0]);
                };
            };
            return newText
        };
    }else{
        alert("Ingrese texto a Desencriptar")
        reset();
    }
    
    remplace(desencriptar(texto))
    
});
botonCopiar.addEventListener("click",() =>{
    let texto =mensajeFinal;
    texto.select();
    document.execCommand('copy')
    alert("Texto Copiado");
    reset();

})