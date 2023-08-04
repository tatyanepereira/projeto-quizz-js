import { temahtml } from "./temahtml.js";
import { temacss } from "./temacss.js";
import { temajs } from "./temajs.js";
import { resultadoArray } from "./participantes.js";


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

const divResultados = document.querySelector(".container-resultados");
const divMedia = document.querySelector(".media");
const divConTemas = document.querySelector(".container-temas");

const tempo = document.getElementById("timer");
const tMinutos = document.querySelector(".min");
const tSegundos = document.querySelector(".seg");
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let pausar = false;
let intervalo;

console.log(pausar);
function cronometro() {
    tempo.style.display = "flex";

    intervalo = setInterval(() => {
        if (!pausar) {
            milisegundos += 10;

            if (milisegundos === 1000) {
                segundos++;
                milisegundos = 0;
            }

            if (segundos === 60) {
                minutos++;
                segundos = 0;
            }

            tMinutos.textContent = timer(minutos);
            tSegundos.textContent = timer(segundos);
        }
    }, 10);
}

function timer(time) {
    return time < 10 ? `0${time}` : time;
}


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
    btnArea.style = "display: flex";
    btnContinuar.style = "display: none";
    btnReiniciar.style = "display: block";
    btnConcluir.style = "display: none";
    btnVoltar.style = "display: none";
    tituloTema.style = "display: block";
    for (let value of values) {
        listaQuestoes.innerHTML += `
            <li class="perguntas-container">
            <div class="lista-organizacao">
            <h2 class="e-title"> ${contador+1}) ${value.title}</h2>
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
        cronometro();
    } else if (
        selecionarTema === "css" &&
        nome.value != "" &&
        tema.value != "0"
    ) {
        valor = temacss;
        tituloTema.innerText = "Css";
        mostrarTema(valor);
        cronometro();
    } else if (
        selecionarTema === "javascript" &&
        nome.value != "" &&
        tema.value != "0"
    ) {
        valor = temajs;
        tituloTema.innerText = "Javascript";
        mostrarTema(valor);
        cronometro();
    } else {
        console.log(`Não funcionou...`);
    }
});

function BotaoReiniciar() {
    clearInterval(intervalo);
    milisegundos = 0;
    minutos = 0;
    segundos = 0;

    tMinutos.textContent = "00";
    tSegundos.textContent = "00";

    tempo.style.display = "none";
    mainInicial.style.display = "flex";
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
    pausar = true;
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
    contagemAcertos = 0;
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
    let contador = 0;

    inputs.forEach((input) => {
        if (input.checked) {
            contador++;
        }
    });

    if (contador === totalQuestoes) {
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
                perguntasContainer[i].style.backgroundColor = "var(--resposta-certa)";
            } else {
                perguntasContainer[i].style.border = "1px solid #d36980";
                perguntasContainer[i].style.backgroundColor = "var(--resposta-errada)";
            }
        }
    }
}

//Botão continuar
const posicao1 = document.getElementById("tema1");
const posicao2 = document.getElementById("tema2");
const posicao3 = document.getElementById("tema3");
const corpoTabela = document.getElementById("corpo-tabela");

const dataAtual = new Date();
const dia = String(dataAtual.getDate()).padStart(2, '0');
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
const ano = dataAtual.getFullYear();
const hora = String(dataAtual.getHours()).padStart(2, '0');
const minuto = String(dataAtual.getMinutes()).padStart(2, '0');
const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minuto}`;


function BotaoContinuar() {
    tempo.style.display = "none";
    perguntasContainer.style.display = "none";
    tituloTema.style.display = "none";

    resultadoArray.push({
        nome: nome.value,
        tema: tituloTema.innerHTML,
        minutos: timer(minutos) + ":"+ timer(segundos),
        data: dataFormatada,
        pontuacao: contagemAcertos
    });
    exibirResultados();
    medias();
    ranking(resultadoArray);
};

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
    clearInterval(intervalo);
    milisegundos = 0;
    minutos = 0;
    segundos = 0;
    tMinutos.textContent = "00";
    tSegundos.textContent = "00";

    tempo.style.display = "none";
    mainInicial.style.display = "flex";
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
    limparTabelasRanking();
}

btnVoltar.addEventListener("click", () => {
    pausar = false;
    tempo.style.display = "none";
    BotaoVoltar();
});

export function exibirResultados() {
    var table = document.querySelector("#results_Usuario");
    table.style.display = "block";
    table.innerHTML = "";
    let conteudoTabela = `    <tr>
    <th>Nome</th>
    <th>Tema</th>
    <th>Tempo</th>
    <th>Data</th>
    <th>Pontuação</th>
</tr>`

    for (let user of resultadoArray) {
        conteudoTabela += `
        <tr class="tabela-corpo">
            <td>${user.nome}</td>
            <td>${user.tema}</td>
            <td>${user.minutos}</td>
            <td>${user.data}</td>
            <td>${user.pontuacao}</td>
        </tr>
        `;
    }
    table.innerHTML = conteudoTabela
}

export function medias() {
    let mediaRN = resultadoArray.reduce((sum, user) => sum + user.pontuacao, 0) / resultadoArray.length;
    let mediaWN = resultadoArray.reduce((sum, user) => sum + (10 - user.pontuacao), 0) / resultadoArray.length;

    let averageRight = document.querySelector("#media-acertos");
    let averageWrong = document.querySelector("#media-erros");

    averageRight.innerText = `Media de Acertos: ${mediaRN.toFixed(2)}`;
    averageWrong.innerText = `Media de Erros: ${mediaWN.toFixed(2)}`;
}

export function ranking() {
    //variáveis com  notas de cada tema 
    var listaHTML = resultadoArray.filter(function (player) {
        return player.tema === "HTML";
    });
    var listaCSS = resultadoArray.filter(function (player) {
        return player.tema === "CSS";
    });
    var listaJS = resultadoArray.filter(function (player) {
        return player.tema === "JavaScript";
    });

    // Função para organizar cada uma das listas
    function compare(a, b) {
        return b.pontuacao - a.pontuacao;
    }
    listaHTML.sort(compare);
    listaCSS.sort(compare);
    listaJS.sort(compare);

    // Adicionar os resultados
    if (listaHTML.length >= 5) {
        var tableHTML = document.querySelector(".tema1");
        tableHTML.innerHTML = `<h2>Html</h2>`
        for (let i = 0; i < 5; i++) {
            tableHTML.innerHTML += `
            <ul>
                <li>${listaHTML[i].nome} : Nota: ${listaHTML[i].pontuacao}</li>
            </ul>
            `;
        }
    }
    else {
        var tableHTML = document.querySelector(".tema1");
        tableHTML.innerHTML = `<h2>Html</h2>`
        for (let i = 0; i < listaHTML.length; i++) {
            tableHTML.innerHTML += `
            <ul>
                <li>${listaHTML[i].nome} : Nota: ${listaHTML[i].pontuacao}</li>
            </ul>
            `;
        }
    }

    if (listaCSS.length >= 5) {
        var tableCSS = document.querySelector(".tema2");
        tableCSS.innerHTML = `<h2>Css</h2>`
        for (let i = 0; i < 5; i++) {
            tableCSS.innerHTML += `
            <ul>
                <li>${listaCSS[i].nome} : Nota: ${listaCSS[i].pontuacao}</li>
            </ul>
            `;
        }
    }
    else {
        var tableCSS = document.querySelector(".tema2");
        tableCSS.innerHTML = `<h2>Css</h2>`
        for (let i = 0; i < listaCSS.length; i++) {
            tableCSS.innerHTML += `
            <ul>
                <li>${listaCSS[i].nome} : Nota: ${listaCSS[i].pontuacao}</li>
            </ul>
            `;
        }
    }

    if (listaJS.length >= 5) {
        var tableJS = document.querySelector(".tema3");
        tableJS.innerHTML = `<h2>Javascript</h2>`
        for (let i = 0; i < 5; i++) {
            tableJS.innerHTML += `
            <ul>
                <li>${listaJS[i].nome} : Nota: ${listaJS[i].pontuacao}</li>
            </ul>
            `;
        }
    }
    else {
        var tableJS = document.querySelector(".tema3");
        tableJS.innerHTML = `<h2>Javascript</h2>`
        for (let i = 0; i < listaJS.length; i++) {
            tableJS.innerHTML += `
            <ul>
                <li>${listaJS[i].nome} : Nota: ${listaJS[i].pontuacao}</li>
            </ul>
            `;
        }
    }
}

function limparTabelasRanking() {
    const tableHTML = document.querySelector(".tema1");
    const tableCSS = document.querySelector(".tema2");
    const tableJS = document.querySelector(".tema3");

    tableHTML.innerHTML = "";
    tableCSS.innerHTML = "";
    tableJS.innerHTML = "";
}
