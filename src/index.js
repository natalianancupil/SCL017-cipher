import cipher from './cipher.js';

//evento para mostrar seccion 2 al hacer click en el boton "registrate"
const registrouno= document.getElementById("registrouno")
  registrouno.addEventListener("click", ()=>{
  document.getElementById('sect2').style.display= 'block';
  document.getElementById('sect1').style.display= 'none';
})

//evento para mostrar seccion 3 al hacer click en boton "registrarme"
const registrodos= document.getElementById('registrodos')
registrodos.addEventListener('click',()=>{
  document.getElementById('sect1').style.display= 'none';
  document.getElementById('sect2').style.display= 'none';
  document.getElementById('sect3').style.display= 'block';
})

//evento para volver a la seccion1 al hacer click en boton "volver al inicio"
const volver= document.getElementById('volver')
volver.addEventListener('click', ()=>{
  document.getElementById('sect1').style.display= 'block';
  document.getElementById('sect2').style.display= 'none';
  document.getElementById('sect3').style.display= 'none';
})



//Función para tomar el valor del input de cifrado y ejecutar la función de cifrar
let btnCifrado = document.getElementById("cifrar");
btnCifrado.addEventListener("click", () => {
  //tomo el valor del input offset, me aseguro de que sea de tipo number
    let valorOffSet = parseInt(document.getElementById("offset").value);
  //tomo el valor del cuadro 1 y lo transformo en mayusculas
    let data = document.getElementById("text").value.toUpperCase();

   let finalWord = "";
    for(let i= 0; i<data.length; i++){
        let letter = data[i];
   //posicion de la letra en codigo ascii
        let letterAscii= letter.charCodeAt();
    
    if (letterAscii >= 65 && letterAscii <= 90) {
      letterAscii = ((( letterAscii- 65 + valorOffSet) % 26) + 65);
    } 
    finalWord += String.fromCharCode(letterAscii);
    console.log(letterAscii);
  }
  
  let resultadoInput = document.getElementById("resultado").innerHTML=finalWord ;
});



let btnDescifrado = document.getElementById("descifrar");
btnDescifrado.addEventListener("click", () => {
  console.log("btnDescifrado");
    let valorOffSet = parseInt(document.getElementById("offset").value);
    let data = document.getElementById("text").value.toUpperCase();
   let finalWord = "";
    for(let i= 0; i<data.length; i++){
        let letter = data[i];
        let letterAscii= letter.charCodeAt();
        if (letterAscii >= 65 && letterAscii <= 90) {
          letterAscii = ((( letterAscii + 65 - valorOffSet) % 26) + 65);
        } 
        finalWord += String.fromCharCode(letterAscii);
        console.log(letterAscii);
        
    }

 let resultadoInput = document.getElementById("resultado").innerHTML=finalWord ;

});