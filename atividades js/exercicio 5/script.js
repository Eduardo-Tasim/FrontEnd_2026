const input = document.getElementById("nomeConvidado");
const botaoAdicionar = document.getElementById("adicionar");
const lista = document.getElementById("listaConvidados");

botaoAdicionar.addEventListener("click", function () {

    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    const item = document.createElement("li");

    const texto = document.createElement("span");
    texto.textContent = nome;

    const areaBotoes = document.createElement("div");
    areaBotoes.classList.add("botoes");

    const btnConcluir = document.createElement("button");
    btnConcluir.textContent = "Concluir";
    btnConcluir.classList.add("btn-concluir");

    btnConcluir.addEventListener("click", function () {
        texto.classList.toggle("riscado");
    });

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add("btn-editar");

    btnEditar.addEventListener("click", function () {

        const novoNome = prompt("Digite o novo nome:", texto.textContent);

        if (novoNome !== null && novoNome.trim() !== "") {
            texto.textContent = novoNome;
        }

    });

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.classList.add("btn-excluir");

    btnExcluir.addEventListener("click", function () {
        lista.removeChild(item);
    });

    areaBotoes.appendChild(btnConcluir);
    areaBotoes.appendChild(btnEditar);
    areaBotoes.appendChild(btnExcluir);

    item.appendChild(texto);
    item.appendChild(areaBotoes);

    lista.appendChild(item);

    input.value = "";

});