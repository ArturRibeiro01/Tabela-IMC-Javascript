var titulo = document.querySelector(".titulo");
var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdimc = paciente.querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if (!pesoValido) {
    console.log("peso invalido");
    pesoValido = false;
    tdimc.textContent = "Peso invalido";
    paciente.classList.add("paciente-invalido");
  }
  if (!alturaValida) {
    console.log("Altura invalida");
    alturaValida = false;
    tdimc.textContent = "Altura invalida";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoValido && alturaValida) {
    var imc = calculaImc(peso, altura);
    var imc = (tdimc.textContent = imc);
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 700) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 2.99) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
