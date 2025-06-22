
const anuncio = document.getElementById("anuncio")
const final_lista = document.getElementById("final_lista")
const boton = document.getElementById("Boton")
const lista = document.getElementById("lista")
boton.addEventListener("click", () =>{
  if (lista.style.display === "none" || lista.style.display === "") {
    lista.style.display = "block"
    boton.style.left = "76%"
    anuncio.style.top = (final_lista.style.top + 330) + "px";

  } else {
    lista.style.display = "none"
    boton.style.left = "96%"
    anuncio.style.top = "100px"
    
  }
});
const GP = document.getElementById("GP")
const JEC = document.getElementById("JEC")
const MGX = document.getElementById("MGX")
const ES = document.getElementById("ES")
const DSN = document.getElementById("DSN")
const George = document.getElementById("George")
const Eso_Tilin = document.getElementById("Eso_Tilin")
const Jorge = document.getElementById("Jorge")
const Mega_gato = document.getElementById("Mega_gato")
const Dsans = document.getElementById("Dsans")
GP.addEventListener("click", () => {
  if (George.style.display === "none" || George.style.display === "") {
    George.style.display = "block"
    Jorge.style.display = "none"
    Mega_gato.style.display = "none"
    Dsans.style.display = "none"
    Eso_Tilin.style.display = "none"
  }
});
JEC.addEventListener("click", () => {
  if (Jorge.style.display === "none" || Jorge.style.display === "") {
    Jorge.style.display = "block"
    George.style.display = "none"
    Mega_gato.style.display = "none"
    Dsans.style.display = "none"
    Eso_Tilin.style.display = "none"
  }
});
MGX.addEventListener("click", () => {
  if (Mega_gato.style.display === "none" || Mega_gato.style.display === "") {
    Mega_gato.style.display = "block"
    George.style.display = "none"
    Jorge.style.display = "none"
    Dsans.style.display = "none"
    Eso_Tilin.style.display = "none"
  }
});
DSN.addEventListener("click", () => {
  if (Dsans.style.display === "none" || Dsans.style.display === "") {
    Dsans.style.display = "Block"
    Mega_gato.style.display = "none"
    George.style.display = "none"
    Jorge.style.display = "none"
    Eso_Tilin.style.display = "none"
  }
});
ES.addEventListener("click", () => {
  if (Eso_Tilin.style.display === "none" || Eso_Tilin.style.display === "") {
    Eso_Tilin.style.display = "Block"
    Mega_gato.style.display = "none"
    George.style.display = "none"
    Jorge.style.display = "none"
    Dsans.style.display = "none"
  }
});
