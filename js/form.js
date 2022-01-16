var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = recebeInformacaoForm(form);

  var pacienteTr = document.createElement("tr");
  var pacienteTr = montaTr(paciente);


  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);



function recebeInformacaoForm(form) {

  var paciente =  {
    nome:form.nome.value,
    peso:form.peso.value,
    altura:form.altura.value,
    gordura:form.nome.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  function montaTr(paciente){ 
    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = paciente.imc;

}
}
  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;

  
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  
  return(pacienteTr); 
