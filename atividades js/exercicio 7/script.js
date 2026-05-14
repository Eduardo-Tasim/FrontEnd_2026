const botao = document.getElementById("analisar");

botao.addEventListener("click", function(){

    let numero = document.getElementById("cartao").value;
    numero = numero.replace(/\s/g, "").replace(/\./g, "");
    const resultado = document.getElementById("resultado");

    if(numero.length < 13 || numero.length > 16){
        resultado.innerHTML = "Número inválido! O cartão deve ter entre 13 e 16 dígitos.";
        resultado.className = "invalido";
        return;
    }

    let soma = 0;
    let dobrar = false;

    for(let i = numero.length - 1; i >= 0; i--){
        let digito = Number(numero[i]);
        if (dobrar){
            digito = digito * 2;
            if (digito > 9){
                digito = digito - 9;
            }
        }

        soma += digito;
        dobrar = !dobrar;
    }

    let status = "";

    if (soma % 10 === 0){
        status = "Válido";
    }else {
        status = "Inválido";
    }

    let bandeira = "Desconhecida";

    if(numero.startsWith("4")){
        bandeira = "Visa";
    } else if(numero.startsWith("51") || numero.startsWith("52") || numero.startsWith("53") || numero.startsWith("54") || numero.startsWith("55") ){
        bandeira = "MasterCard";
    }

    let categoria = "Crédito";
    let banco = "Banco Internacional";

    resultado.innerHTML = `Status: ${status} <br><br>
    Bandeira: ${bandeira} <br><br>
    Categoria: ${categoria} <br><br>
    Banco Emissor: ${banco}`;

    if (status === "Válido"){
        resultado.className = "valido";
    }else {
        resultado.className = "invalido";
    }
});