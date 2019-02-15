//Função para testar Palindormo

function Alerta()
 {
  palavra = prompt("Digite uma palavra!!"); //Alerta que recebe valor
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
    }
    else {
      alert("Isso não é um palindromo");
    }

};
