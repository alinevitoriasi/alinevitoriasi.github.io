window.addEventListener("load",function(){
    var e = document.getElementById('enviar');
    e.addEventListener('click', VerificaSenhaEmail, false);
    e.addEventListener('click', VerificaLetra, false);
    e.addEventListener('click', VerificaNumero, false);
    e.addEventListener('click', VerificaBranco, false);
    e.addEventListener('click', Check, false);

})

function VerificaBranco(){
  if (form.nome.value=='')
  {
    alert('O campo nome está em branco');
    return false;
  }
  if (form.sobrenome.value=='')
  {
    alert('O campo sobrenome está em branco');
    return false;
  }
  if (form.sexo.value=='')
  {
    alert('O campo sexo  está em branco');
    return false;
  }
  if (form.data.value=='')
  {
    alert('O campo date está em branco');
    return false;
  }
  if (form.rg.value=='')
  {
    alert('O campo rg está em branco');
    return false;
  }
   if (form.cpf.value=='')
  {
    alert('O campo cpf está em branco');
    return false;
  }
  if (form.cpf2.value=='')
 {
   alert('O campo cpf esta em incompleto');
   return false;
 }
//form
  if (form.rua.value=='')
  {
    alert('O campo rua  está em branco');
    return false;
  }
  if (form.numero.value=='')
  {
    alert('O campo numero  está em branco');
    return false;
  }
  if (form.bairro.value=='')
  {
    alert('O campo bairro  está em branco');
    return false;
  }
  if (form.estado.value=='')
  {
    alert('O campo estado  está em branco');
    return false;
  }
  if (form.cidade.value=='')
  {
    alert('O campo cidade  está em branco');
    return false;
  }
  if (form.cep.value=='')
  {
    alert('O campo cep  está em branco');
    return false;
  }
  if (form.cep2.value=='')
 {
   alert('O campo cep está em incompleto');
   return false;
 }
  //form
  if (form.email.value=='')
  {
    alert('O campo email está em branco');
    return false;
  }
  if (form.email2.value=='')
  {
    alert('O campo Confirmaááo de email está em branco');
    return false;
  }
  if (form.userlog.value=='')
  {
    alert('O campo Login está em branco');
    return false;
  }

  if (form.senha.value=='')
  {
    alert('O campo senha está em branco');
    return false;
  }
  if (form.senha2.value=='')
  {
    alert('O campo de Confirmaááo da senha está em branco');
    return false;
  }
  //form4
  if (form.opc.value=='')
  {
    alert('Selecione ao menos uma das opááes');
    return false;
  }
  if (form.comentario.value=='')
  {
    alert('O campo de comentário está em branco');
    return false;
  }

}
function Check(){
  value1= document.getElementById('op1').checked ;
  value2= document.getElementById('op2').checked ;
  value3= document.getElementById('op3').checked ;
  value4= document.getElementById('op4').checked ;
  if (value1==false)
  {
    if (value2==false)
    {
      if (value3==false)
      {
        if (value4==false)
        {
            alert('Marque ao menos uma das opááes');
            return false;
        }
      }
    }
  }
}

function VerificaNumero(){

  if (isNaN(form.rg.value)) {
    alert('O valor do campo RG náo á valido! ');
    return false;
  }
  if (isNaN(form.cpf.value)) {
    alert('O valor do campo CPF náo á valido! ');
    return false;
  }
  if (isNaN(form.cpf2.value)) {
    alert('O valor do campo CPF náo á valido! ');
    return false;
  }
  if (isNaN(form.cep.value)) {
    alert('O valor do campo CEP náo á valido! ');
    return false;
  }
  if (isNaN(form.cep2.value)) {
    alert('O valor do campo CEP náo á valido! ');
    return false;
  }
  if (isNaN(form.numero.value)) {
    alert('O valor do campo Numero náo á valido! ');
    return false;
  }

}

function VerificaSenhaEmail()
{
    if(form.senha.value!=form.senha2.value)
    {
        alert('Senhas possuem valores diferentes!');
        return false;
    }
    if(form.email.value!=form.email2.value)
    {
        alert('Email de confirmaááo possui valor diferente!');
        return false;
    }

 }

 function VerificaLetra()
 {
     var exRegular = /[0-9]/; //Expressáo Regular

      if(form.nome.value.search(exRegular) != -1)
     {
       alert("O campo nome deve conter apenas letras!");
       return false;
     }
     if(form.sobrenome.value.search(exRegular) != -1)
    {
      alert(" O campo sobrenome deve conter apenas letras!");
      return false;
    }
    if(form.bairro.value.search(exRegular) != -1)
    {
     alert(" O campo bairro deve conter apenas letras!");
     return false;
    }
    if(form.cidade.value.search(exRegular) != -1)
    {
      alert("O campo cidade deve conter apenas letras!");
      return false;
    }


 }
