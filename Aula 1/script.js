// Seleciona os elementos dos botões e do áudio
const botaoPlayPause = document.getElementById("play-pause"); // Botão de play/pause
const botaoAnterior = document.getElementById("anterior"); // Botão de capítulo anterior
const botaoProximo = document.getElementById("proximo");  // Botão de próximo capítulo
const audio = document.getElementById("audio-capitulo");  // Elemento de áudio
const qtdCapitulos = 10;  // Quantidade total de capítulos

let capitulo = document.getElementById("capitulo"); // Elemento que mostra o número do capítulo
let capituloAtual = 1; // Capítulo atual iniciado como 1
let estaTocando = false; // Estado de reprodução (inicia como não tocando)

// Função para tocar o áudio
function tocarFaixa () {
    audio.play(); // Inicia a reprodução do áudio
    console.log('tocando');
    estaTocando = true; // Atualiza o estado para tocando
    botaoPlayPause.classList.add('tocando'); // Adiciona classe visual de tocando
}

// Função para pausar o áudio
function pausarFaixa () {
    audio.pause(); // Pausa o áudio
    console.log('pausado');
    estaTocando = false; // Atualiza o estado para pausado
    botaoPlayPause.classList.remove('tocando'); // Remove classe visual de tocando
}

// Alterna entre tocar e pausar
function tocarOuPausar () {
    if(estaTocando === false){
        tocarFaixa (); // Se não está tocando, toca
    }else{
        pausarFaixa (); // Se está tocando, pausa
    }
}

// Vai para o capítulo anterior
function anterior() {
    pausarFaixa(); // Pausa o áudio ao trocar de capítulo
    if(capituloAtual === 1){
        capituloAtual = qtdCapitulos; // Se está no primeiro, vai para o último
    }else {
        capituloAtual -= 1; // Senão, decrementa o capítulo
    }
    audio.src = 'audios/' + capituloAtual + '.mp3'; // Atualiza o áudio
    capitulo.innerText = 'Capítulo ' + capituloAtual; // Atualiza o texto do capítulo
}

// Vai para o próximo capítulo
function proximo() {
    pausarFaixa(); // Pausa o áudio ao trocar de capítulo
    if(capituloAtual === qtdCapitulos){
        capituloAtual = 1; // Se está no último, volta para o primeiro
    }else {
        capituloAtual += 1; // Senão, incrementa o capítulo
    }
    audio.src = 'audios/' + capituloAtual + '.mp3'; // Atualiza o áudio
    capitulo.innerText = 'Capítulo ' + capituloAtual; // Atualiza o texto do capítulo
}

// Adiciona eventos de clique aos botões
botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProximo.addEventListener('click', proximo);
botaoAnterior.addEventListener('click', anterior);

