
var n = 5;

function fatorial(n)
{
  
  return n<2 ? 1 : n * fatorial(n-1);
  
}
alert(fatorial(5));
parImpar(5);  

function parImpar(n)
{
  if(n%2==0)
  {
     alert("É par");
  }
  else
  {
    alert("É impar");
}  

function verificaEmail(email){

    var exRegular = /\w@\w+./; //Expressão Regular
    
     if(email.search(exRegular) == -1)
    {
      alert("Email invalido");
    }
    else
    {
      alert("Email Valido");
    }
  
}
  
email = prompt("Digite o email:");
verificaEmail(email);

  

  
  
}


