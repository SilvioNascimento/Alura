function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campo de pesquisa for uma string sem nada
    if(campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = '';


    let titulo = '';
    let descricao = '';
    let tags = '';

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        /* 
        Se o conteúdo digitado for igual ao título do dado OU se o conteúdo digitado existir
        na descrição do dado, então retorna o dado com todo o seu conteúdo
        */ 
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>

                <a href=${dado.link}
                   target="_blank">
                    Mais informações
                </a>
            </div>
        `;
        }
        // Concatena o HTML de um item de resultado à string 'resultados'
        
    }

    if(!resultados) {
        resultados = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
    }

    // Atribui o conteúdo HTML gerado à seção de resultados
    section.innerHTML = resultados;
}


