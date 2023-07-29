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
    containerInicial.style = "display: none";
    perguntasContainer.style = "display: flex";
    mainInicial.style = "margin-top: var(--8x)";
    btnArea.style = "display: flex";
    btnReiniciar.style = "display: block";
    btnConcluir.style = "display: block";
    btnContinuar.style = "display: none";
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

