const $input = document.querySelector("#inputAdivinanza");
const $div = document.querySelector("#resultado");
const $pista = document.querySelector("#pistas");
const $divResultado = document.querySelector("#resultado-alert");
document.querySelector("#boton").onclick = function (e) {
  e.preventDefault();
  buscarInputs();
};

function buscarInputs() {
  let input = $input.value.toLowerCase();

  if (input === "river plate" || input === "river") {
    let parrafo = document.querySelector("#parrafo");
    if (reducirContador() >= 0) {
      parrafo.innerText = `Muy bien!! acertaste cuando te quedaban ${
        reducirContador() + 1
      } intentos!!`;
      $div.classList.remove("alert-danger");
      $div.classList.add("alert", "alert-success");
      $div.appendChild(parrafo);
      document.querySelector("#boton").disabled = true;
      document.querySelector("#boton-reset").classList.remove("oculto");
      ocultarDivContador();
    }
  } else {
    let contador = reducirContador();
    let parrafo = document.querySelector("#parrafo");
    parrafo.innerText = "UPS! respuesta incorrecta!";
    $divResultado.classList.add("alert", "alert-danger");
    $divResultado.appendChild(parrafo);

    if (contador > 0) {
      setTimeout(() => {
        parrafo.innerText = "";
        $divResultado.classList.remove("alert", "alert-danger");
      }, 1500);
    }
  }
}

function reducirContador() {
  let $contador = document.querySelector("#contador");
  let contador = Number($contador.textContent);
  const $strong = document.querySelector("#strong");
  $contador.innerHTML = contador - 1;
  const input = $input.value.toLowerCase();
  if (contador == 3) {
    let p = document.createElement("p");
    p.textContent = "PISTA: No fue boca";
    $pista.classList.remove("oculto");
    $strong.appendChild(p);
  } else if (contador == 2) {
    let p2 = document.createElement("p");
    p2.textContent = " ULTIMA PISTA: No fue San Lorenzo";
    $strong.appendChild(p2);
  } else if (contador === 1 && input !== "river" && input !== "river plate") {
    alert("UHHHH TE QUEDASTE SIN INTENTOS!!");
    $pista.remove();
  }
  if (contador == 1) {
    ocultarBoton()
  }

  return contador;
}

function ocultarDivContador() {
  const $divContador = document.querySelector("#div-contador");
  $divContador.classList.add("oculto");
  const $parrafoPitas = document.querySelector("#pistas");
  $parrafoPitas.classList.add("oculto");
}

document.querySelector("#boton-reset").addEventListener("click", function () {
  window.location.assign("adivinanza.html");
});
function ocultarBoton(){
    document.querySelector("#boton").disabled = true;
    document.querySelector("#boton-reset").classList.remove("oculto");
}
