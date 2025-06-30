
const anuncio = document.getElementById("anuncio")
const pu = document.getElementById("principio_anuncio")
const B1 = document.getElementById("B-1")
const B2 = document.getElementById("B-2")
const lista = document.getElementById("lista")
B1.addEventListener("click", () =>{
  
  if (lista.style.display === "none" || lista.style.display === "") {
    lista.style.display = "table"
    B2.style.display = "table"
    B1.style.display = "none"
    anuncio.style.display =   "none";

  } 
});
B2.addEventListener("click", () =>{
  if (lista.style.display === "table") {
    lista.style.display = "none"
    B2.style.display = "none"
    B1.style.display = "table"
    anuncio.style.display = "table";
  }
});

const GP = document.getElementById("GP")
const JEC = document.getElementById("JEC")
const MGX = document.getElementById("MGX")
const ES = document.getElementById("ES")
const DD = document.getElementById("DD")
const DS = document.getElementById("DS")
const C = document.getElementById("C")
const George = document.getElementById("George")
const Jorge = document.getElementById("Jorge")
const Mega_gato = document.getElementById("Mega_gato")
const Eso_Tilin = document.getElementById("Eso_Tilin")
const Duo_dinamico = document.getElementById("Duo_dinamico")
const Drsimi = document.getElementById("Dr_Simi")
const Creditos = document.getElementById("Creditos")

GP.addEventListener("click", () => {
  if (George.style.display === "none" || George.style.display === "") {
    George.style.display = "block"
    Jorge.style.display = "none"
    Mega_gato.style.display = "none"
    Creditos.style.display = "none"
    Eso_Tilin.style.display = "none"
    Duo_dinamico.style.display = "none"
    Drsimi.style.display = "none"
  }
});
JEC.addEventListener("click", () => {
  if (Jorge.style.display === "none" || Jorge.style.display === "") {
    Jorge.style.display = "block"
    George.style.display = "none"
    Mega_gato.style.display = "none"
    Creditos.style.display = "none"
    Eso_Tilin.style.display = "none"
    Duo_dinamico.style.display = "none" 
    Drsimi.style.display = "none"
  }
});
MGX.addEventListener("click", () => {
  if (Mega_gato.style.display === "none" || Mega_gato.style.display === "") {
    Mega_gato.style.display = "block"
    George.style.display = "none"
    Jorge.style.display = "none"
    Creditos.style.display = "none"
    Eso_Tilin.style.display = "none"
    Duo_dinamico.style.display = "none" 
    Drsimi.style.display = "none"
  }
});
ES.addEventListener("click", () => {
  if (Eso_Tilin.style.display === "none" || Eso_Tilin.style.display === "") {
    Eso_Tilin.style.display = "Block"
    Mega_gato.style.display = "none"
    George.style.display = "none"
    Jorge.style.display = "none"
    Creditos.style.display = "none"
    Duo_dinamico.style.display = "none"
    Drsimi.style.display = "none"
  }
});
DD.addEventListener("click", () => {
  if (Duo_dinamico.style.display === "none" || Duo_dinamico.style.display === "") {
    Duo_dinamico.style.display = "Block"
    Mega_gato.style.display = "none"
    George.style.display = "none"
    Jorge.style.display = "none"
    Eso_Tilin.style.display = "none"
    Creditos.style.display = "none"
    Drsimi.style.display = "none"
    
  }
});
DS.addEventListener("click", () => {
  if (Creditos.style.display === "none" || Creditos.style.display === "") {
    Drsimi.style.display = "block"
    Creditos.style.display = "none"
    Duo_dinamico.style.display = "none"
    Mega_gato.style.display = "none"
    George.style.display = "none"
    Jorge.style.display = "none"
    Eso_Tilin.style.display = "none"
    
  }
});
C.addEventListener("click", () => {
  if (Creditos.style.display === "none" || Creditos.style.display === "") {
    Creditos.style.display = "Block"
    Duo_dinamico.style.display = "none"
    Mega_gato.style.display = "none"
    George.style.display = "none"
    Jorge.style.display = "none"
    Eso_Tilin.style.display = "none"
    Drsimi.style.display = "none"
    
  }
});