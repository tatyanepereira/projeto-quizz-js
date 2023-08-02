import { temahtml } from "./temahtml.js";
import { temacss } from "./temacss.js";
import { temajs } from "./temajs.js";
import { participantes } from "./participantes.js";


const mainInicial = document.querySelector("main");
const nome = document.getElementById("name");

const tema = document.getElementById("temas");
let selecionarTema;
let valor = [];

const btnIniciar = document.getElementById("btn-iniciar");

const listaQuestoes = document.getElementById("lista-questoes");
const containerInicial = document.querySelector(".start-container");
const tituloTema = document.querySelector(".titulo-tema");
const perguntasContainer = document.querySelector(".perguntas");

const btnArea = document.querySelector(".btn-finalizar");
const btnReiniciar = document.querySelector("#reiniciar");
const btnConcluir = document.querySelector("#concluir");
const btnContinuar = document.querySelector("#continuar");
const btnVoltar = document.querySelector("#voltar");

const divResultados = document.querySelector(".resultados");
const divMedia = document.querySelector(".media");
const divConTemas = document.querySelector(".container-temas");

let tempoIcone = document.querySelector("#icon-timer");
let tempo = document.querySelector(".timer");
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

function limparCronometro() {
    clearInterval(cronometroID);
    cronometroAtivo = false;
    segundos = 0;
    minutos = 0;
    horas = 0;
}

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
    }
});

//Botão Iniciar
tema.addEventListener("change", () => {
    selecionarTema = tema.value;
});

function mostrarTema(values) {
    listaQuestoes.innerHTML = "";
    let contador = 0;
    tempoIcone.style = "display: block";
    tempo.style = "display: block";
    containerInicial.style = "display: none";
    perguntasContainer.style = "display: flex";
    mainInicial.style = "margin-top: 2rem";
    btnArea.style = "display: flex";
    btnContinuar.style = "display: none";
    btnReiniciar.style = "display: block";
    btnConcluir.style = "display: none";
    btnVoltar.style = "display: none";
    tituloTema.style = "display: block";

    for (let value of values) {
        listaQuestoes.innerHTML += `
            <li class="perguntas-container">
            <div class="e-title">${value.title}</div>
            <div class="lista-organizacao">
                <div class="separate">
                    <input type="radio" name="${"select" + contador
            }" value="0"><label>${value.alternativa[0]}</label>
                </div>
                <div class="separate">
                    <input type="radio" name="${"select" + contador
            }" value="1"><label>${value.alternativa[1]}</label>
                </div>
                <div class="separate">
                    <input type="radio" name="${"select" + contador
            }" value="2"><label>${value.alternativa[2]}</label>
                </div>
                <div class="separate">
                    <input type="radio" name="${"select" + contador
            }" value="3"><label>${value.alternativa[3]}</label>
                </div>
            </div>
            </li>
        `;
        contador++;
    }
}

btnIniciar.addEventListener("click", () => {
    if (
        selecionarTema === "html" &&
        nome.value != "" &&
        tema.value != "0"
    ) {
        valor = temahtml;
        tituloTema.innerText = "Html";
        mostrarTema(valor);
        iniciarCronometro();
    } else if (
        selecionarTema === "css" &&
        nome.value != "" &&
        tema.value != "0"
    ) {
        valor = temacss;
        tituloTema.innerText = "Css";
        mostrarTema(valor);
        iniciarCronometro();
    } else if (
        selecionarTema === "javascript" &&
        nome.value != "" &&
        tema.value != "0"
    ) {
        valor = temajs;
        tituloTema.innerText = "Javascript";
        mostrarTema(valor);
        iniciarCronometro();
    } else {
        console.log(`Não funcionou...`);
    }
});

function BotaoReiniciar() {
    clearInterval(cronometroID);
    minutos = 0;
    segundos = 0;
    horas = 0;

    //cronometroElement.style.display = "none";
    mainInicial.style.display = "flex";
    mainInicial.style = "margin-top: 2rem";
    perguntasContainer.style.display = "none";
    tituloTema.style.display = "none";
    btnArea.style.display = "none";
    containerInicial.style.display = "flex";
    tema.value = "0";
    selecionarTema = "";
}

btnReiniciar.addEventListener("click", () => {
    BotaoReiniciar();
});

//Botão Concluir

let marcador = [];
let respostas = [];
let temaEscolhido;
let contagemAcertos = 0;

let marcador0;
let marcador1;
let marcador2;
let marcador3;
let marcador4;
let marcador5;
let marcador6;
let marcador7;
let marcador8;
let marcador9;

btnConcluir.addEventListener("click", (ev) => {
    btnConcluir.style.display = "none";
    btnContinuar.style.display = "block";

    ev.preventDefault();
    //relogio = false;
    marcador = [];
    respostas = [];
    temaEscolhido = valor;
    marcador0 = document.querySelector('input[name="select0"]:checked').value;
    marcador1 = document.querySelector('input[name="select1"]:checked').value;
    marcador2 = document.querySelector('input[name="select2"]:checked').value;
    marcador3 = document.querySelector('input[name="select3"]:checked').value;
    marcador4 = document.querySelector('input[name="select4"]:checked').value;
    marcador5 = document.querySelector('input[name="select5"]:checked').value;
    marcador6 = document.querySelector('input[name="select6"]:checked').value;
    marcador7 = document.querySelector('input[name="select7"]:checked').value;
    marcador8 = document.querySelector('input[name="select8"]:checked').value;
    marcador9 = document.querySelector('input[name="select9"]:checked').value;
    verificarRespostas();
    checarQuestoes(temaEscolhido);
});

function checarQuestoes(objeto) {
    for (let i = 0; i < objeto.length; i++) {
        marcador.push(objeto[i].answer);
    }
    console.log(marcador);
    respostas.push(marcador0);
    respostas.push(marcador1);
    respostas.push(marcador2);
    respostas.push(marcador3);
    respostas.push(marcador4);
    respostas.push(marcador5);
    respostas.push(marcador6);
    respostas.push(marcador7);
    respostas.push(marcador8);
    respostas.push(marcador9);
    console.log(respostas);

    for (let i = 0; i < respostas.length; i++) {
        if (respostas[i] == marcador[i]) {
            contagemAcertos++;
        }
    }
    console.log(`acertos: ${contagemAcertos}`);
}

//Verificação
let totalQuestoes = 10;
let questoesRespondidas = 0;

function verificarInputs() {
    const inputs = document.querySelectorAll('input[type="radio"]');
    let contadorMarcados = 0;

    inputs.forEach((input) => {
        if (input.checked) {
            contadorMarcados++;
        }
    });

    if (contadorMarcados === totalQuestoes) {
        btnConcluir.style.display = "block";
    } else {
        btnConcluir.style.display = "none";
    }
}

function asQuestoesRespondidas() {
    questoesRespondidas++;

    if (questoesRespondidas === totalQuestoes) {
        btnConcluir.style.display = "block";
    }
}

listaQuestoes.addEventListener("change", () => {
    verificarInputs();
});

document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener("change", () => {
        asQuestoesRespondidas();
    });
});

//marcar questoes certas e erradas
function verificarRespostas() {
    const perguntasContainer = document.querySelectorAll(".perguntas-container");

    for (let i = 0; i < perguntasContainer.length; i++) {
        const inputSelecionado = perguntasContainer[i].querySelector(
            'input[name="select' + i + '"]:checked'
        );

        if (inputSelecionado) {
            const respostaSelecionada = inputSelecionado.value;
            const respostaCorreta = valor[i].answer;

            if (respostaSelecionada == respostaCorreta) {
                perguntasContainer[i].style.border = "1px solid #white";;
                perguntasContainer[i].style.backgroundColor = "var(--resposta-certa)";
            } else {
                perguntasContainer[i].style.border = "1px solid #white";
                perguntasContainer[i].style.backgroundColor = "var(--resposta-errada)";
            }
        }
    }
}


//Botão continuar

const posicao1 = document.getElementById("posicao1");
const posicao2 = document.getElementById("posicao2");
const posicao3 = document.getElementById("posicao3");
const corpoTabela = document.getElementById("corpo-tabela");

const dataAtual = new Date();

const ano = dataAtual.getFullYear();
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
const dia = String(dataAtual.getDate()).padStart(2, '0');
const dataFormatada = `${ano}-${mes}-${dia}`;


function BotaoContinuar() {
    //limparCronometro();
    tempo.style.display = "none";

    perguntasContainer.style.display = "none";
    tituloTema.style.display = "none";

    const minutosFormatados = formatarTempo(minutos);
    const segundosFormatados = formatarTempo(segundos);

    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const hora = String(dataAtual.getHours()).padStart(2, '0');
    const minuto = String(dataAtual.getMinutes()).padStart(2, '0');
    const dataFormatada = `${dia}-${mes}-${ano} ${hora}:${minuto}`;

    participantes.push({
        nome: nome.value,
        tema: tituloTema.innerHTML,
        minutos: minutosFormatados,
        segundos: segundosFormatados,
        data: dataFormatada,
        pontuacao: contagemAcertos,

    });

    preencherContTemas();
    organizarParticipantes(participantes);
    calcularMedias(contagemAcertos);
}

function organizarParticipantes(participantes) {
    participantes.sort((a, b) => {
        if (a.pontuacao === b.pontuacao) {
            const tempoA = a.minutos * 60 + a.segundos;
            const tempoB = b.minutos * 60 + b.segundos;

            if (tempoA === tempoB) {
                return new Date(a.data) - new Date(b.data);
            } else {
                return tempoA - tempoB;
            }
        } else {
            return b.pontuacao - a.pontuacao;
        }
    });

    popularTabela();
}

function popularTabela() {

    while (corpoTabela.firstChild) {
        corpoTabela.removeChild(corpoTabela.firstChild);
    }

    participantes.forEach((participantes) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${participantes.nome}</td>
        <td>${participantes.tema}</td>
        <td>${participantes.minutos}:${participantes.segundos}</td>
        <td>${participantes.data}</td>
        <td>${participantes.pontuacao}/10</td>
        `;
        corpoTabela.appendChild(row);
    });

    console.log(participantes);
    preencherContTemas();
}

function preencherContTemas(valor) {
    console.log(tituloTema)
    for (let i = 0; i < 5; i++) {
        if (tituloTema.innerHTML == "Html") {
            posicao1.innerHTML = `
        <li class="position">Beatriz</li> 
        <li class="position">Domenica</li> 
        <li class="position">Gabriela</li> 
        <li class="position">Lucas</li> 
        <li class="position">Tatiane</li> 
        <li class="position">${nome.value}</li>      
        `;
        } else if (tituloTema.innerHTML == "Css") {
            posicao2.innerHTML = `
        <li class="position">Beatriz</li> 
        <li class="position">Domenica</li> 
        <li class="position">Gabriela</li> 
        <li class="position">Lucas</li> 
        <li class="position">Tatiane</li> 
        <li class="position">${nome.value}</li>       
        `;
        } else if (tituloTema.innerHTML == "Javascript") {
            posicao3.innerHTML = `
        <li class="position">Beatriz</li> 
        <li class="position">Domenica</li> 
        <li class="position">Gabriela</li> 
        <li class="position">Lucas</li> 
        <li class="position">Tatiane</li> 
        <li class="position">${nome.value}</li>       
        `;
        }
    }
}

btnContinuar.addEventListener("click", () => {
    btnContinuar.style.display = "none";
    btnConcluir.style.display = "none";
    btnReiniciar.style.display = "none";
    btnVoltar.style.display = "block";
    divResultados.style.display = "flex";
    divMedia.style.display = "flex";
    divConTemas.style.display = "flex";
    BotaoContinuar();
});


// Botão voltar

function BotaoVoltar() {
    clearInterval(cronometroID);
    minutos = 0;
    segundos = 0;
    horas = 0;

    tempo.style.display = "none";
    mainInicial.style.display = "flex";
    mainInicial.style = "margin-top: 7%";
    perguntasContainer.style.display = "none";
    tituloTema.style.display = "none";
    btnArea.style.display = "none";
    divResultados.style.display = "none";

    divMedia.style.display = "none";
    divConTemas.style.display = "none";
    containerInicial.style.display = "flex";
    nome.value = "";
    tema.value = "0";
    selecionarTema = "";
    contagemAcertos = 0;
    totalAcertos = 0;
    qtdPartidasFinalizadas = 0;

}


btnVoltar.addEventListener("click", () => {
    //cronometroAtivo = false;
    tempo.style.display = "none";
    BotaoVoltar();
});




let totalAcertos = 0;
let qtdPartidasFinalizadas = 0;
let chamada = 1;
let mediaAcertos = 0;
let mediaErros = 0;
const PONTUACAO_MAXIMA = 10;

function recebePontuacao(pessoas) {
    // Somatória da quantidade de acertos por pessoa e soma a quantidade de partidas realizadas, que estão no array pessoas.
    for (let pessoa of pessoas) {
        totalAcertos += pessoa.pontuacao;
        qtdPartidasFinalizadas++;
    }
    return totalAcertos;
}

function calcularMedias(contagemAcertos) {
    // Somatória dos acertos de todas as partidas realizadas e posteriormente realiza o cálculo das médias de acertos e erros.
    totalAcertos += contagemAcertos;
    qtdPartidasFinalizadas++;

    mediaAcertos = (totalAcertos / qtdPartidasFinalizadas);
    mediaErros = (PONTUACAO_MAXIMA - mediaAcertos);

    document.getElementById("media-acertos").innerHTML = `<p>Média de acertos: ${mediaAcertos.toFixed(1).replace(".", ",")}</p>`;
    document.getElementById("media-erros").innerHTML = `<p>Média de erros: ${mediaErros.toFixed(1).replace(".", ",")}</p>`;
}

const contagemAtualizadaAcertos = new Event('contagemAtualizada');
function notificarAcertos() {
    // notifica que houve uma atualização de contagemAcertos da função checarQuestoes().
    document.dispatchEvent(contagemAtualizadaAcertos);
}

document.addEventListener('contagemAtualizada', () => {
    // O código dentro desta função será executado quando a contagemAcertos da partida for atualizada
    if (chamada === 1) {    // Será executado somente na primeira partida
        totalAcertos = recebePontuacao(pessoas);
        calcularMedias(contagemAcertos);
        chamada++;
    } else {    // Será executado nas partidas seguintes
        calcularMedias(contagemAcertos);
    }
});


