//Função para testar Palindormo

function Alerta()
 {
  palavra = prompt("Digite uma palavra!!"); //Caixa de dialogo que recebe valor
  palindromo=[];
  //palavra = palavra.split("");//Transforma String em Vetor

  for (var i = 1; i <= palavra.length; i++)
   {
            palindromo[i]=palavra[palavra.length-i];
            console.log(palindromo[i]); //Exibe no console
  }

  //palavra= palavra.join("");  //Transforma Vetor em String
  console.log(palavra);
  palindromo = palindromo.join("");
  console.log(palindromo);

    if (palavra==palindromo) {
      alert("Isso é um palindromo");
      document.write("Isso é um palindromo");
      document.write('<h1> :) </h1>')/* */
    }
    else {
      alert("Isso não é um palindromo");
      document.write("Isso é um palindromo");//Docunento
    }

    confirm("Confirma?");//Caixa de dialogo para confirmação.
};


function CalculaIdade(){ 
  var hoje= new Date();

  nascimento = prompt("Digite sua data de nascimento: ","MES/DIA/ANO");
  nascimento = new Date(nascimento);

  console.log(hoje);
  console.log(nascimento);

  idade=hoje-nascimento;

  console.log(idade);

  idade = idade/1000/60/60/24/365;

  console.log(idade);
}
