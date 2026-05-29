const formulario = document.getElementById('meuformulario');
const colecao = document.getElementById('colecao');

// VERIFICAÇÃO: Tenta buscar a lista existente ou cria uma nova vazia se não houver nada salvo
let galeria = JSON.parse(localStorage.getItem('galeria')) || [];

// Se já existirem dados salvos, renderiza todos eles ao carregar a página
galeria.forEach(function(cardSalvo) {
    renderizarCards(cardSalvo);
});

// Evento que escuta o envio do formulário
formulario.addEventListener('submit', function(evento){
    evento.preventDefault(); // Impede a página de recarregar

    const novo = {
        titulo: document.getElementById('titulo').value,
        imagem: document.getElementById('imagem').value,
        texto: document.getElementById('paragrafo').value
    };

    // 1. Salva o objeto 'novo' dentro do array 'galeria'
    galeria.push(novo);

    // 2. Guarda a lista atualizada no LocalStorage (convertendo para String)
    localStorage.setItem('galeria', JSON.stringify(galeria));

    // Chama a função abaixo passando os dados capturados
    renderizarCards(novo);

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
