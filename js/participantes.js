export class Player {
    nome;
    tema;
    minutos;
    data;
    pontuacao;

    constructor(nome, tema, minutos, data, pontuacao) {
        this.nome = nome;
        this.tema = tema;
        this.minutos = minutos;
        this.data = data;
        this.pontuacao = pontuacao;
    }

    toJsonString() {
        return JSON.stringify(this);
    }

    static fromJsonString(jsonString) {
        const data = JSON.parse(jsonString);
        return new Player(data.nome, data.tema, data.minutos, data.data, data.pontuacao);
    }
}

// Cria a função para salvar o dia em que foi realizado o quiz
export function getDateQuestionary() {
    const dateSubmit = new Date();
    return formatDate(dateSubmit);
}
// Formatar data
function formatDate(date) {
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const ano = date.getFullYear();
    const hora = String(date.getHours()).padStart(2, '0');
    const minuto = String(date.getMinutes()).padStart(2, '0');

    return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
}

let Beatriz = new Player(
    "Beatriz",
    "JavaScript",
    "00:15",
    formatDate(new Date("03-15-2023 12:45")),
    8
);
let Domenica = new Player(
    "Domênica",
    "HTML",
    "00:50",
    formatDate(new Date("03-15-2023 09:15")),
    9
);
let Gabriela = new Player(
    "Gabriela",
    "CSS",
    "00:27",
    formatDate(new Date("07-10-2023 14:35")),
    8
);
let Lucas = new Player(
    "Lucas",
    "JavaScript",
    "00:40",
    formatDate(new Date("04-01-2023 17:45")),
    10
);
let Tatiane = new Player(
    "Tatiane",
    "HTML",
    "00:48",
    formatDate(new Date("08-28-2023 10:30")),
    9
);
let Gabriel = new Player(
    "Gabriel",
    "CSS",
    "00:36",
    formatDate(new Date("06-12-2023 13:20")),
    7
);
let Almir = new Player(
    "Almir",
    "JavaScript",
    "00:13",
    formatDate(new Date("01-20-2023 18:45")),
    6
);
let Pedro = new Player(
    "Pedro",
    "HTML",
    "10:12",
    formatDate(new Date("09-05-2023 11:55")),
    9
);
let Maria = new Player(
    "Maria",
    "CSS",
    "00:50",
    formatDate(new Date("11-17-2023 16:10")),
    10
);
let Teresa = new Player(
    "Teresa",
    "HTML",
    "00:22",
    formatDate(new Date("02-08-2023 08:40")),
    7
);


// Criar array com os usuários
export let resultadoArray = [Beatriz, Domenica, Gabriela, Lucas, Tatiane, Gabriel, Almir, Pedro, Maria, Tatiane];