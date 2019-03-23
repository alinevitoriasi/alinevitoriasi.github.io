window.addEventListener("load",function(){
    var e1 = document.getElementById('enlace_1');
    //var c = document.getElementById('conteudo_1');
    e1.addEventListener('click', Ocultar, false);

    var e2 = document.getElementById('enlace_2');
    e2.addEventListener('click', Ocultar, false);

    var e3 = document.getElementById('enlace_3');
    e3.addEventListener('click', Ocultar, false);

    var lamp = document.getElementById('lamp');
    lamp.addEventListener('click', Acende, false);

    var b = document.getElementById('botao');
    b.addEventListener('click', Insere, false);

})



//onclick="Ocultar(conteudo_1,this)"
function Ocultar(e)
{
  teste ="conteudo_"+e.target.id[7];
  c = document.getElementById(teste);
  console.log(teste)

  if(e.target.innerHTML=="Mostrar Conteudo")
  {
    c.style.display = "block";
    e.target.textContent="Ocultar Conteúdo"
  }

  else
  {
    c.style.display = 'none';
    e.target.textContent="Mostrar Conteudo"
  }

}
function Acende(e)
{

  if(e.target.src.match("lampada_on.gif"))
  {
      e.target.src = "lampada_off.gif";
  }

  else
  {
      e.target.src = "lampada_on.gif";
  }

}


function Insere()
{
  var node = document.createElement("LI");
  var texto = document.createTextNode(document.getElementById("texto").value);
  node.appendChild(texto);

  document.getElementById("Lista").appendChild(node);
  document.getElementById("texto").value=" ";




}
//if(eu.innerHTML=="Ocultar Conteúdo")
