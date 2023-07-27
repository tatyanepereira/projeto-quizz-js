// Variáveis globais
let cronometroID;
let segundos = 0;
let minutos = 0;
let horas = 0;

// Função para formatar o tempo
function formatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

// Função para atualizar o cronômetro
function atualizarCronometro() {
    segundos++;

    if (segundos === 60) {
        segundos = 0;
        minutos++;

        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }

    const cronometroElement = document.getElementById("cronometro");
    cronometroElement.innerText = `${formatarTempo(horas)}:${formatarTempo(minutos)}:${formatarTempo(segundos)}`;
}

// Função para iniciar o cronômetro
function iniciarCronometro() {
    cronometroID = setInterval(atualizarCronometro, 1000);
}

// Iniciar o cronômetro assim que a página é carregada
iniciarCronometro();