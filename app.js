let input = document.querySelector('#amigo');
let lista = document.querySelector('#listaAmigos');
let amigos = [];

function adicionarAmigo() {
  let nome = input.value;

  if(nome == '') {
    alert('Por favor, digite um nome válido!');
  }

  amigos.push(nome);
  input.value = ''; 

  listaDeAmigos();
}


function listaDeAmigos() {
  lista.innerHTML = '';

  for(let i = 0; i < amigos.length; i++){
    let li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}


function sortearAmigo() {
  if(amigos.length == 0) {
    alert('Adicione amigos para realizar o sorteio!');
  }

  let indiceAmigo = Math.floor(Math.random() * amigos.length);  
  let amigoSorteado = amigos[indiceAmigo];

  document.querySelector('#resultado').innerHTML = `O amigo sorteado é: ${amigoSorteado}`;

  amigos = [];
  lista.innerHTML = '';
}