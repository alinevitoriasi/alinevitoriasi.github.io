
function  Exibir(valor){
  exibir = valor.value;
  saida =document.getElementById("calc-output");

  if(saida.textContent =="0")
  {
    saida.textContent=""
    saida.textContent += exibir;
  }
  else
  {
    saida.textContent += exibir;
  }
}
function  Limpar(){
  saida =document.getElementById("calc-output");
  saida.textContent = 0;
}

function  Calcular(){
  saida =document.getElementById("calc-output");
  saida.textContent = eval(saida.textContent);

}
