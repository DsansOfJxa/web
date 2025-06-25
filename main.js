
const anuncio = document.getElementById("anuncio")
const final_lista = document.getElementById("final_lista")
const boton = document.getElementById("Boton")
const boton2 = document.getElementById("Boton2")
const lista = document.getElementById("lista")
boton.addEventListener("click", () =>{
  if (lista.style.display === "none" || lista.style.display === "") {
    lista.style.display = "table"
    boton2.style.display = "table"
    boton.style.display = "none"
    anuncio.style.top = (final_lista.style.top + 51) + "%";

  } else {
    lista.style.display = "none"
    boton2.style.display = "none"
    boton.style.display = "table"
    anuncio.style.top = "10%"
  }
});
boton2.addEventListener("click", () =>{
  if (lista.style.display === "table") {
    lista.style.display = "none"
    boton2.style.display = "none"
    boton.style.display = "table"
    anuncio.style.top = "10%";
  }
});

const GP = document.getElementById("GP")
const JEC = document.getElementById("JEC")
const MGX = document.getElementById("MGX")
const ES = document.getElementById("ES")
const DD = document.getElementById("DD")
const DSN = document.getElementById("DSN")
const George = document.getElementById("George")
const Jorge = document.getElementById("Jorge")
const Mega_gato = document.getElementById("Mega_gato")
const Eso_Tilin = document.getElementById("Eso_Tilin")
const Duo_dinamico = document.getElementById("Duo_dinamico")
const Dsans = document.getElementById("Dsans")
GP.addEventListener("click", () => {
  if (George.style.display === "none" || George.style.display === "") {
    George.style.display = "block"
    Jorge.style.display = "none"
    Mega_gato.style.display = "none"
    Dsans.style.display = "none"
    Eso_Tilin.style.display = "none"
    Duo_dinamico.style.display = "none"
  }
});
JEC.addEventListener("click", () => {
  if (Jorge.style.display === "none" || Jorge.style.display === "") {
    Jorge.style.display = "block"
    George.style.display = "none"
    Mega_gato.style.display = "none"
    Dsans.style.display = "none"
    Eso_Tilin.style.display = "none"
    Duo_dinamico.style.display = "none" 
  }
});
MGX.addEventListener("click", () => {
  if (Mega_gato.style.display === "none" || Mega_gato.style.display === "") {
    Mega_gato.style.display = "block"
    George.style.display = "none"
    Jorge.style.display = "none"
    Dsans.style.display = "none"
    Eso_Tilin.style.display = "none"
    Duo_dinamico.style.display = "none" 
  }
});
ES.addEventListener("click", () => {
  if (Eso_Tilin.style.display === "none" || Eso_Tilin.style.display === "") {
    Eso_Tilin.style.display = "Block"
    Mega_gato.style.display = "none"
    George.style.display = "none"
    Jorge.style.display = "none"
    Dsans.style.display = "none"
    Duo_dinamico.style.display = "none"
  }
});
DD.addEventListener("click", () => {
  if (Duo_dinamico.style.display === "none" || Duo_dinamico.style.display === "") {
    Duo_dinamico.style.display = "Block"
    Mega_gato.style.display = "none"
    George.style.display = "none"
    Jorge.style.display = "none"
    Eso_Tilin.style.display = "none"
    Dsans.style.display = "none"
    
  }
});

DSN.addEventListener("click", () => {
  if (Dsans.style.display === "none" || Dsans.style.display === "") {
    Dsans.style.display = "Block"
    Mega_gato.style.display = "none"
    George.style.display = "none"
    Jorge.style.display = "none"
    Eso_Tilin.style.display = "none"
    Duo_dinamico.style.display = "none"
  }
});