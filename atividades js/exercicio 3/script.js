const botao = document.getElementById("calcular");

botao.addEventListener("click", function () {

    const nome = document.getElementById("nome").value;

    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    const media = (nota1 + nota2 + nota3) / 3;

    const resultado = document.getElementById("resultado");

    resultado.className = "";

    if (media >= 7 && media <= 10) {

        resultado.innerHTML = `
            Aluno: ${nome} <br>
            Média: ${media.toFixed(2)} <br>
            Situação: APROVADO
        `;

        resultado.classList.add("aprovado");

    } else if (media >= 4 && media <= 6.9) {

        const falta = (10 - media).toFixed(2);

        resultado.innerHTML = `
            Aluno: ${nome} <br>
            Média: ${media.toFixed(2)} <br>
            Situação: EXAME <br>
            Faltam ${falta} pontos para chegar em 10.
        `;

        resultado.classList.add("exame");

    } else {

        resultado.innerHTML = `
            Aluno: ${nome} <br>
            Média: ${media.toFixed(2)} <br>
            Situação: REPROVADO
        `;

        resultado.classList.add("reprovado");
    }

});