const formulario = document.getElementById('meuformulario');
const colecao = document.getElementById('colecao');

// Evento que escuta o envio do formulário
formulario.addEventListener('submit', function(evento){
    evento.preventDefault(); // Impede a página de recarregar

    // Cria o objeto com os dados dos inputs
    const novo = {
        titulo: document.getElementById('titulo').value,
        imagem: document.getElementById('imagem').value,
        texto: document.getElementById('paragrafo').value
    };

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
