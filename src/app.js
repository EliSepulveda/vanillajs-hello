/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function obtenerPaloAleatorio() {
  let palo = Math.floor(Math.random() * (4 - 1) + 1);
  switch (palo) {
    case 1:
      return "♦";
    case 2:
      return "♥";
    case 3:
      return "♠";
    case 4:
      return "♣";
    default:
      return "";
  }
}

function obtenerNumeroAleatorio(min, max) {
  let numero = Math.floor(Math.random() * (12 - 1) + 1);
  switch (numero) {
    case 1:
      return "A";
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    default:
      return numero.toString();
  }
}

function generarCartaAleatoria() {
  let palo = document.getElementById("palo");
  let numero = document.querySelector("#numero");
  let paloInvertido = document.getElementById("palo-inverso");

  let paloAleatorio = obtenerPaloAleatorio();
  let numeroAleatorio = obtenerNumeroAleatorio();

  palo.innerHTML = paloAleatorio;
  paloInvertido.innerHTML = paloAleatorio;
  numero.innerHTML = numeroAleatorio;

  if (paloAleatorio == "♠" || paloAleatorio == "♣") {
    palo.style.color = "black";
    paloInvertido.style.color = "black";
  } else {
    palo.style.color = "red";
    paloInvertido.style.color = "red";
  }

  iniciarTemporizador();
}

function iniciarTemporizador() {
  let cuentaRegresiva = 10;

  let intervalo = setInterval(function() {
    document.getElementById("timer").innerHTML =
      "Tiempo restante para generar una carta aleatoria: " +
      cuentaRegresiva +
      " segundos";

    if (cuentaRegresiva <= 0) {
      clearInterval(intervalo);
      generarCartaAleatoria();
    }

    cuentaRegresiva--; // Disminuir la cuenta regresiva
  }, 1000); // Ejecutar cada segundo
}

function actualizarAnchoDeCarta(ancho) {
  let carta = document.querySelector(".carta");
  carta.style.width = ancho.target.value + "in";
}

function actualizarAlturaDeCarta(altura) {
  let carta = document.querySelector(".carta");
  carta.style.height = altura.target.value + "in";
}

window.onload = function() {
  generarCartaAleatoria();
  iniciarTemporizador();
  let boton = document.getElementById("button");
  boton.onclick = generarCartaAleatoria;

  let entradaAnchoCarta = document.getElementById("carta-ancho");
  let entradaAlturaCarta = document.getElementById("carta-altura");

  entradaAnchoCarta.addEventListener("input", actualizarAnchoDeCarta);
  entradaAlturaCarta.addEventListener("input", actualizarAlturaDeCarta);
};
