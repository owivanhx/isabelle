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
    formulario.reset(); // Limpa o formulário após o envio
});

// Sua função de teste (vai continuar rodando no console do navegador)
function fazerFruta(fruta){
    const resultado = "Suco de " + fruta;
    return resultado;
}

const meuCopo = fazerFruta('banana');
console.log(meuCopo);
