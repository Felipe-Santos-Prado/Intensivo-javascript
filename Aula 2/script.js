// Seleciona a imagem principal de visualização do produto
const imagemVisualizacao = document.querySelector("#visualizacao img");

// Seleciona o título do produto
const tituloProduto = document.querySelector("h1");

// Array com as opções de tamanho do produto
const opcoesTamanho = ["41 mm", "45 mm"];

// Seleciona o elemento que mostra o nome da cor selecionada
const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");

// Seleciona as imagens das miniaturas
const imagemMiniatura0 = document.querySelector("[for='0-imagem'] img ");
const imagemMiniatura1 = document.querySelector("[for='1-imagem'] img ");
const imagemMiniatura2 = document.querySelector("[for='2-imagem'] img ");

// Array com as opções de cores disponíveis
const opcoesCores = ["Verde-cipreste", "Azul-inverno", "Meia-noite", "Estelar", "Rosa-claro"];

// Variáveis para guardar os índices das opções selecionadas
let numImagemSelecionada = 1;
let numTamanhoSelecionado = 1;
let numCorSelecionada = 1;

// Atualiza a cor selecionada pelo usuário
function atualizarCorSelecionada(){
    // Pega o índice da cor selecionada pelo input
    const opcaoCorSelecionada = document.querySelector('input[name="opcao-cor"]:checked').id.charAt(0);

    numCorSelecionada = opcaoCorSelecionada;

    // Pega o nome da cor selecionada
    const nomeCor = opcoesCores[numCorSelecionada];

    // Atualiza o título do produto com a cor e tamanho selecionados
    tituloProduto.innerText = "Pulseira loop esportiva "+nomeCor.toLowerCase() +" para caixa de "+opcoesTamanho[numTamanhoSelecionado];
    
    // Atualiza o texto que mostra a cor selecionada
    nomeCorSelecionada.innerText = "Cor - " + nomeCor;

    // Atualiza a imagem principal de acordo com a cor e imagem selecionadas
    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-"+nomeCor.toLowerCase()+"/imagem-"+ numImagemSelecionada+".jpeg"
}

// Atualiza o tamanho selecionado pelo usuário
function atualizarTamanho(){    
    // Pega o índice do tamanho selecionado pelo input
    const opcaoTamanhoSelecionado = document.querySelector('input[name="opcao-tamanho"]:checked').id.charAt(0);

    numTamanhoSelecionado = opcaoTamanhoSelecionado;
    
    // Pega o nome do tamanho selecionado
    const tamanhoCaixa = opcoesTamanho[numTamanhoSelecionado];

    // Atualiza o título do produto com a cor e tamanho selecionados
    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesCores[numCorSelecionada] +" para caixa de "+tamanhoCaixa;

    // Adiciona ou remove a classe da imagem principal conforme o tamanho selecionado
    if(tamanhoCaixa === "41 mm"){
        imagemVisualizacao.classList.add("caixa-pequena");
    }else {
        imagemVisualizacao.classList.remove("caixa-pequena");
    }
}

// Atualiza a imagem principal conforme a miniatura selecionada
function atualizarImagemSelecionada (){
    // Pega o índice da imagem selecionada pelo input
    const opcaoImagemSelecionada = document.querySelector('input[name="opcao-imagem"]:checked').id.charAt(0);

    numImagemSelecionada = opcaoImagemSelecionada;

    // Pega o nome da cor selecionada em minúsculo
    const nomeCor = opcoesCores[numCorSelecionada].toLowerCase();

    // Atualiza a imagem principal de acordo com a cor e imagem selecionadas
    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-"+nomeCor+"/imagem-"+ numImagemSelecionada +".jpeg"
}