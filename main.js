let nomes = []

function adicionarNome(){
  const nomeInput = document.getElementById('nomeInput');
  const nome = nomeInput.value.trim();
  if (nome) {
    nomes.push(nome);
    atualizarLista();
    nomeInput.value = ''
    nomeInput.focus();
  }
}

function atualizarLista (){
  const listaNomes = document.getElementById('listaNomes');

  listaNomes.innerHTML = '';

  nomes.forEach(nome => {
    const li = document.createElement('li');
    li.textContent = nome;
    listaNomes.appendChild(li);
  })

}

document.getElementById('nomeInput').addEventListener('keydown', (event) =>{
  if(event.key === 'Enter'){
    adicionarNome();
  }
})