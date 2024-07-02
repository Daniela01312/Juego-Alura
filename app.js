let numeroSecreto ;
let intentos;
let numerosSorteados = [];
let numeroMaximo = 10;
let juegosMaximos = 5;

console.log(numeroSecreto);
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
    if(numeroDeUsuario === numeroSecreto){
     asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
     document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
      // El usuario no acerto.
      if(numeroDeUsuario > numeroSecreto ) {
       asignarTextoElemento('p','El número es menor');
     } else {
        asignarTextoElemento('p','El número es mayor');
      }
    }
    intentos ++;
    limpiarCaja();
    return;
}

function limpiarCaja(){
 document.querySelector("#valorUsuario").value = '';

}

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function generarNumeroSecreto() {
    let numeroGenereado =  Math.floor(Math.random()*numeroMaximo)+1;
     //Si ya se jugaron 5 veces
    if (numerosSorteados.length == juegosMaximos){
      asignarTextoElemento ('p', 'Solo se puede jugar 5 veces, reinicia la página');
    //Si ya sorteamos todos los números
    }else{
    // Si el numero generado está incluido en la lista
        if(numerosSorteados.includes(numeroGenereado)){
      return generarNumeroSecreto();
    }else {
      numerosSorteados.push(numeroGenereado)
      return numeroGenereado;
    }
}
}

function condicionesIniciales(){
  asignarTextoElemento('h1','Juego de número secreto!');
  asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos =1;
}

function reiniciarJuego(){
  //Limpiar la caja
  limpiarCaja();
  //Indicar mensaje de intervalo de números
   //Generar el número aleatorio
 condicionesIniciales();
//Deshabilitar el botón nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();