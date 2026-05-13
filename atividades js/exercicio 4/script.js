const botao = document.getElementById("calcular");

botao.addEventListener("click", function () {

    const bandeira = document.getElementById("bandeira").value;
    const valor = Number(document.getElementById("valor").value);
    const parcelas = Number(document.getElementById("parcelas").value);

    let taxaBandeira = 0;

    switch (bandeira) {

        case "visa":
            taxaBandeira = 0.02; // 2%
            break;

        case "master":
            taxaBandeira = 0.0185; // 1.85%
            break;

        case "elo":
            taxaBandeira = 0.03; // 3%
            break;

        default:
            taxaBandeira = 0;
    }

    const valorTaxa = valor * taxaBandeira;

    const juros = valor * (0.0035 * parcelas);

    const taxaMensal = 12.50 * parcelas;

    const valorTotal = valor + valorTaxa + juros + taxaMensal;

    const valorParcela = valorTotal / parcelas;

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
        Bandeira: ${bandeira.toUpperCase()} <br><br>

        Valor da compra: R$ ${valor.toFixed(2)} <br>

        Taxa da bandeira: R$ ${valorTaxa.toFixed(2)} <br>

        Juros: R$ ${juros.toFixed(2)} <br>

        Taxa mensal: R$ ${taxaMensal.toFixed(2)} <br>

        Valor total: R$ ${valorTotal.toFixed(2)} <br>

        Valor de cada parcela: R$ ${valorParcela.toFixed(2)}
    `;

});