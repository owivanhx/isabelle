const formulario = document.getElementById('meuformulario');
const colecao = document.getElementById('colecao');

// 1. VERIFICAÇÃO: Busca dados existentes ou inicializa um array vazio se não houver nada
let galeria = JSON.parse(localStorage.getItem('galeria')) || [];

// 2. CARREGAMENTO INICIAL: Renderiza os cards que já estavam salvos ao carregar a página
galeria.forEach(card => renderizarCards(card));

// Evento que escuta o envio do formulário
formulario.addEventListener('submit', function(evento){
    evento.preventDefault(); // Impede a página de recarregar

    // Cria o objeto com os dados dos inputs
    const novo = {
        titulo: document.getElementById('nome').value,
        imagem: document.getElementById('imagem').value,
        texto: document.getElementById('paragrafo').value
    };

    // 3. SALVAR: Adiciona o novo objeto ao array 'galeria'
    galeria.push(novo);

    // 4. ATUALIZAR LOCALSTORAGE: Salva a lista atualizada como uma string JSON
    localStorage.setItem('galeria', JSON.stringify(galeria));

    // Chama a função abaixo passando os dados capturados
    renderizarCards(novo);

    // Limpa os campos do formulário
    formulario.reset();
});

// Função responsável por construir o HTML e adicionar na tela
function renderizarCards(mlp){
    const novoCard = `
        <div class="card"> 
            <div class="letras">
                <h3>${mlp.titulo}</h3>
                <p>${mlp.texto}</p>
            </div>
            <div class="img">
                <img src="${mlp.imagem}" alt="${mlp.titulo}"/>
            </div>
        </div>
    `;

    colecao.innerHTML += novoCard;
}
