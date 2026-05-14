const botao = document.getElementById("calcular");

botao.addEventListener("click", function (){

    const valorPacote = Number(document.getElementById("pacote").value);
    const quantidade = Number(document.getElementById("quantidade").value);
    
    const custoBruto = valorPacote * quantidade;

    const taxaServico = custoBruto * 0.10;

    let total = custoBruto + taxaServico;

    let desconto = 0;

    if(quantidade>100){
        desconto = total * 0.05;
        total = total - desconto
    }

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `Custo Bruto: R$ ${custoBruto.toFixed(2)} <br><br>
    Taxa de Servico: R$ ${taxaServico.toFixed(2)} <br><br>
    Desconto Aplicado: R$ ${desconto.toFixed(2)} <br><br>
    Total Final: R$ ${total.toFixed(2)}`;
})