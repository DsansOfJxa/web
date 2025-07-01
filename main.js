
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
const S = document.getElementById("S")
const L = document.getElementById("L")
const C = document.getElementById("C")


const George = document.getElementById("George")
const Jorge = document.getElementById("Jorge")
const Mega_gato = document.getElementById("Mega_gato")
const Eso_Tilin = document.getElementById("Eso_Tilin")
const Duo_dinamico = document.getElementById("Duo_dinamico")
const Drsimi = document.getElementById("Dr_Simi")
const Shrek = document.getElementById("Shrek")
const Larry = document.getElementById("Larry")
const Creditos = document.getElementById("Creditos")


function N_F(){
    document.body.style.background = "linear-gradient(to top left, Gold 30%, Skyblue 100%)"
    document.body.style.margin = "0"
    document.body.style.padding = "0"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
    document.body.style.backgroundAttachment= "fixed"

}

function F_F(){
    document.body.style.margin = "0"
    document.body.style.padding = "0"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
    document.body.style.backgroundRepeat= "no-repeat"
    document.body.style.height = "100vh"

}

GP.addEventListener("click", () => {
  if (George.style.display === "none" || George.style.display === "") {
    George.style.display = "block"
    Jorge.style.display = "none"
    Mega_gato.style.display = "none"
    Creditos.style.display = "none"
    Eso_Tilin.style.display = "none"
    Duo_dinamico.style.display = "none"
    Drsimi.style.display = "none"
    Shrek.style.display = "none"
    Larry.style.display = "none"
    document.body.style.backgroundImage = "url(img_fondos/George_Pig.jpg)"
    F_F()
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
    Shrek.style.display = "none"
    Larry.style.display = "none"
    document.body.style.backgroundImage = "url(img_fondos/Jorge.jpg)"
    F_F()
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
    Shrek.style.display = "none"
    Larry.style.display = "none"
    document.body.style.backgroundImage = "url(img_fondos/Mega_gato_X.jpg)"
    F_F()
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
    Shrek.style.display = "none"
    Larry.style.display = "none"
    document.body.style.backgroundImage = "url(img_fondos/Tilin.jpg)"
    F_F()
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
    Shrek.style.display = "none"
    Larry.style.display = "none"
    document.body.style.backgroundImage = "url(img_fondos/Duo_D.jpg)"
    F_F()
  }
});
DS.addEventListener("click", () => {
  if (Drsimi.style.display === "none" || Drsimi.style.display === "") {
    Drsimi.style.display = "block"
    Creditos.style.display = "none"
    Duo_dinamico.style.display = "none"
    Mega_gato.style.display = "none"
    George.style.display = "none"
    Jorge.style.display = "none"
    Eso_Tilin.style.display = "none"
    Shrek.style.display = "none"
    Larry.style.display = "none"
    document.body.style.backgroundImage = "url(img_fondos/Dr.simi.jpg)"
    F_F()
  }
});

S.addEventListener("click", () => {
  if (Shrek.style.display === "none" ||  Shrek.style.display === "") {
    Shrek.style.display = "Block"
    Duo_dinamico.style.display = "none"
    Mega_gato.style.display = "none"
    George.style.display = "none"
    Jorge.style.display = "none"
    Eso_Tilin.style.display = "none"
    Drsimi.style.display = "none"
    Creditos.style.display = "none"
    Larry.style.display = "none"
    document.body.style.backgroundImage = "url(img_fondos/Shrek.jpg)"
    F_F()
 
  }
});
L.addEventListener("click", () => {
  if (Larry.style.display === "none" ||  Larry.style.display === "") {
    Larry.style.display = "Block"
    Duo_dinamico.style.display = "none"
    Mega_gato.style.display = "none"
    George.style.display = "none"
    Jorge.style.display = "none"
    Eso_Tilin.style.display = "none"
    Drsimi.style.display = "none"
    Creditos.style.display = "none"
    Shrek.style.display = "none"
    document.body.style.backgroundImage = "url(img_fondos/Larry.jpg)"
    F_F()
 
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
    Shrek.style.display = "none"
    Larry.style.display = "none"
    document.body.style.backgroundImage = "url(img_fondos/Creditos.jpg)"
    F_F()
  }
});
