const cria = document.getElementById("b");

const estados = {
    normal: "b_n.png",
    puto: "b_p.png",
    morto: "b_d.png",
    comendo: "b_c.png",
    alimentado: "b_a.png",
}

let contador = 0;
let intervalo = null;
let timeoutClique = null;
let timeoutBack = null;

const fundoDia = "bg.png";
const fundoNoite = "bg_noite.png";
let horas = 0;

function controle() {

    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {

        contador++;
        console.log("tempo:", contador);

        if (contador == 30) {
            cria.src = estados.puto;
        }

        if (contador == 60) {
            cria.src = estados.morto;
        }

    }, 1000);
}

function alimentar() {

    console.log("Comendo");

    cria.src = estados.comendo;
    contador = 0;

    if (timeoutClique) clearTimeout(timeoutClique);

    timeoutClique = setTimeout(() => {

        cria.src = estados.alimentado;

        timeoutBack = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);

    }, 1000);
}

function atualizarFundo() {

    setInterval(() => {

        horas++;

        if (horas >= 12) {
            document.body.style.backgroundImage = `url('${fundoNoite}')`;
        } else {
            document.body.style.backgroundImage = `url('${fundoDia}')`;
        }

        if (horas >= 24) horas = 0;

    }, 1000);
}

function mostrarFerlini() {
    document.getElementById("ferlini").style.display = "flex";
}

function fecharFerlini() {
    document.getElementById("ferlini").style.display = "none";
}

controle();
atualizarFundo();