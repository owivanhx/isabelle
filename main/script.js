const formulario = document.getElementById('meuformulario');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const novo = {
        titulo: document.getElementById('titulo').value,
        imagem: document.getElementById('imagem').value,
        texto: document.getElementById('paragrafo').value
    };

    const novoCard = `
        <div class = "card"> 
            <div class = "letras>
                <h3 id="titulo">${novo.titulo}</h3>
                <p>${novo.texto}</p>
            </div>
            <div class = "img">
                <img src="${novo.imagem}" alt="${novo.descricaoIm}"/>
            </div>
        </div>
        `;


    colecao.innerHTML += novoCard;
    formulario.reset();
    });

    function fazerFruta(fruta){
        const resultado = "Suco de "+ fruta;
        return resultado;
    }

    const meuCopo = fazerFruta('banana');
    console.log(meuCopo);
