var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll( ".paciente ");

for (var i = 0; i < pacientes.length; i++) {

    pacientes[i];
    var paciente = pacientes[i];
  
  
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;
  
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent
  
    var tdImc = paciente.querySelector(".info-imc")
    var imc = peso/(altura*altura);
  
    tdImc.textContent = imc;
  
    var alturaValida = true;
    var pesoValido = true;
  
    if (peso <= 0 || peso >= 500) {
        console.log("Peso inválido!");
        pesoValido = false;
        tdPeso.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
  
    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida!");
        tdAltura.textContent = "Altura inválida!";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
    }
  
    if (alturaValida && pesoValido) {
  
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
  
    
}
  
    function calculaImc(peso, altura){
      var imc = 0;
      imc = peso / (altura * altura);
      return imc.toFixed(2);
  }

