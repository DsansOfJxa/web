
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
/* Botones personajes */
const GP = document.getElementById("GP")
const JEC = document.getElementById("JEC")
const MGX = document.getElementById("MGX")
const ES = document.getElementById("ES")
const DD = document.getElementById("DD")
const DS = document.getElementById("DS")
const S = document.getElementById("S")
const L = document.getElementById("L")
const F = document.getElementById("F")
const PE = document.getElementById("PE")
const C = document.getElementById("C")


/* Perdsonajes*/
const George = document.getElementById("George")
const Jorge = document.getElementById("Jorge")
const Mega_gato = document.getElementById("Mega_gato")
const Eso_Tilin = document.getElementById("Eso_Tilin")
const Duo_dinamico = document.getElementById("Duo_dinamico")
const Drsimi = document.getElementById("Dr_Simi")
const Shrek = document.getElementById("Shrek")
const Larry = document.getElementById("Larry")
const Fred = document.getElementById("Fred")
const Pou_E = document.getElementById("Pou_emo")
const Creditos = document.getElementById("Creditos")



/* Audios*/
const S_Audio = document.getElementById("Shrek_Audio")
const Ds_Audio = document.getElementById("DrSimi_Audio")
const J_Audio = document.getElementById("Jorge_Audio")
const G_Audio = document.getElementById("George_Audio")
const MG_Audio = document.getElementById("Mega_Gato_Audio")
const ET_Audio = document.getElementById("Eso_tilin_Audio")
const DD_Audio = document.getElementById("Duo_Dinamico_Audio")
const L_Audio = document.getElementById("Larry_Audio")
const F_Audio = document.getElementById("Fred_Audio")
const PE_Audio = document.getElementById("Pou_emo_Audio")


/*Audios Funcion*/
function Audios(){

   J_Audio.pause()
   J_Audio.currentTime = 0;
   G_Audio.pause()
   G_Audio.currentTime = 0;
   MG_Audio.pause()
   MG_Audio.currentTime = 0;
   ET_Audio.pause()
   ET_Audio.currentTime = 0;
   DD_Audio.pause()
   DD_Audio.currentTime = 0;
   Ds_Audio.pause()
   Ds_Audio.currentTime = 0;
   S_Audio.pause()
   S_Audio.currentTime = 0;
   L_Audio.pause()
   L_Audio.currentTime = 0;
   F_Audio.pause()
   F_Audio.currentTime = 0;
   PE_Audio.pause()
   PE_Audio.currentTime = 0;

}



function N_F(){

  Fred.style.display = "none"
  George.style.display = "none"
  Jorge.style.display = "none"
  Mega_gato.style.display = "none"
  Creditos.style.display = "none"
  Eso_Tilin.style.display = "none"
  Duo_dinamico.style.display = "none"
  Drsimi.style.display = "none"
  Shrek.style.display = "none"
  Larry.style.display = "none"
  Pou_E.style.display = "none"
  Emy.style.display = "none"
  Demas.style.display = "block"
 

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
    N_F()
    George.style.display = "block"


    document.body.style.backgroundImage = "url(img_fondos/George_Pig.jpg)"
    F_F()

    Audios()

    G_Audio.play()
  }
});
JEC.addEventListener("click", () => {
  if (Jorge.style.display === "none" || Jorge.style.display === "") {

    N_F()
    Jorge.style.display = "block"



    document.body.style.backgroundImage = "url(img_fondos/Jorge.jpg)"
    F_F()

    Audios()

    J_Audio.play()
  }
});
MGX.addEventListener("click", () => {
  if (Mega_gato.style.display === "none" || Mega_gato.style.display === "") {

    N_F()
    Mega_gato.style.display = "block"


    document.body.style.backgroundImage = "url(img_fondos/Mega_gato_X.jpg)"
    F_F()

    Audios()
    MG_Audio.play()
  }
});
ES.addEventListener("click", () => {
  if (Eso_Tilin.style.display === "none" || Eso_Tilin.style.display === "") {

    N_F()
    Eso_Tilin.style.display = "block"

    document.body.style.backgroundImage = "url(img_fondos/Tilin.jpg)"
    F_F()

    Audios()

     ET_Audio.play()
  }
});
DD.addEventListener("click", () => {
  if (Duo_dinamico.style.display === "none" || Duo_dinamico.style.display === "") {

    N_F()
    Duo_dinamico.style.display = "Block"


    document.body.style.backgroundImage = "url(img_fondos/Duo_D.jpg)"
    F_F()

    Audios()

    DD_Audio.play()
  }
});
DS.addEventListener("click", () => {
  if (Drsimi.style.display === "none" || Drsimi.style.display === "") {

    N_F()
    Drsimi.style.display = "block"


    document.body.style.backgroundImage = "url(img_fondos/Dr.simi.jpg)"
    F_F()

    Audios()

    Ds_Audio.play()
  }
});

S.addEventListener("click", () => {
  if (Shrek.style.display === "none" ||  Shrek.style.display === "") {

    N_F()
    Shrek.style.display = "Block"



    document.body.style.backgroundImage = "url(img_fondos/Shrek.jpg)"
    F_F()

    Audios()

    S_Audio.play()
 
  }
});
L.addEventListener("click", () => {
  if (Larry.style.display === "none" ||  Larry.style.display === "") {

    N_F()
    Larry.style.display = "Block"



    document.body.style.backgroundImage = "url(img_fondos/Larry.jpg)"
    F_F()

    Audios()
    L_Audio.play()
  }
});
F.addEventListener("click", () => {
  if (Fred.style.display === "none" ||  Fred.style.display === "") {

    N_F()
    Fred.style.display = "Block"


    document.body.style.backgroundImage = "url(img_fondos/Fred.jpg)"
    F_F()

    Audios()
    F_Audio.play()
  }
});
PE.addEventListener("click", () => {
  if (Pou_E.style.display === "none" ||  Pou_E.style.display === "") {

    N_F()
    Pou_E.style.display = "Block"


    document.body.style.backgroundImage = "url(img_fondos/Pou_emo.jpeg)"
    F_F()

    Audios()

    PE_Audio.play()
  }
});
C.addEventListener("click", () => {
  if (Creditos.style.display === "none" || Creditos.style.display === "") {

    N_F()
    Creditos.style.display = "Block"

    document.body.style.backgroundImage = "url(img_fondos/Creditos.jpg)"
    F_F()

    Audios()
  }
});





/* Emy*/
const Emy = document.getElementById("Emy")
const Demas = document.getElementById("Demas")
function Emy_boton(){

   if (Emy.style.display === "none" || Emy.style.display === "") {


    Emy.style.display = "block"

    Demas.style.display = "none"

   }else if(Emy.style.display === "block"){


    Emy.style.display = "none"

    Demas.style.display = "block"


   }

  

}

let presionarTiempo;

const Emy_b = document.getElementById("Emy_b");

Emy_b.addEventListener("mousedown", iniciarContador);    // PC

Emy_b.addEventListener("touchstart", iniciarContador);   // Celular

Emy_b.addEventListener("mouseup", cancelarContador);     // PC

Emy_b.addEventListener("mouseleave", cancelarContador);  // PC
Emy_b.addEventListener("touchend", cancelarContador);    // Celular

function iniciarContador() {
  presionarTiempo = setTimeout(() => {
    Emy_boton(); // Llama a tu función después de 2 segundos
  }, 2000); // 2000 milisegundos = 2 segundos
}

function cancelarContador() {
  clearTimeout(presionarTiempo);
}