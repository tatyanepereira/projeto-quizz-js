import { temahtml } from "./temahtml.js";
import { temacss } from "./temacss.js";
import { temajs } from "./temajs.js";

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

// Iniciar o cronômetro assim que a página é carregada
//iniciarCronometro();


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
    tempo.style = "display: block";
    containerInicial.style = "display: none";
    perguntasContainer.style = "display: flex";
    mainInicial.style = "margin-top: var(--8x)";
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
    mainInicial.style = "margin-top: var(--8x)";
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
                perguntasContainer[i].style.border = "1px solid #55ce77";
                perguntasContainer[i].style.backgroundColor = "#80ff99";
            } else {
                perguntasContainer[i].style.border = "1px solid #d36980";
                perguntasContainer[i].style.backgroundColor = "#ff9999";
            }
        }
    }
}


