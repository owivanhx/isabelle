const formulario = document.getElementById('meuformulario');
const colecao = document.getElementById('colecao'); // Faltava selecionar a div da coleção

formulario.addEventListener('submit', function(evento){
    evento.preventDefault(); // Impede a página de recarregar

    const novo = {
        titulo: document.getElementById('titulo').value,
        imagem: document.getElementById('imagem').value,
        texto: document.getElementById('paragrafo').value
    };

    // Correção nas aspas de "letras" e no alt da imagem
    const novoCard = `
        <div class="card"> 
            <div class="letras">
                <h3>${novo.titulo}</h3>
                <p>${novo.texto}</p>
            </div>
            <div class="img">
                <img src="${novo.imagem}" alt="${novo.titulo}"/>
            </div>
        </div>
    `;

    colecao.innerHTML += novoCard;
    formulario.reset();
});

renderizarCards(novo);


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
