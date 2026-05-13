function validarCPF() {

    let cpf = document.getElementById("cpf").value;

    cpf = cpf.replace(/\D/g, '');

    const resultado = document.getElementById("resultado");

    if (cpf.length !== 11) {
        resultado.innerHTML = "CPF Inválido!";
        resultado.className = "invalido";
        return;
    }

    if (/^(\d)\1+$/.test(cpf)) {
        resultado.innerHTML = "CPF Inválido!";
        resultado.className = "invalido";
        return;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(9))) {
        resultado.innerHTML = "CPF Inválido!";
        resultado.className = "invalido";
        return;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(10))) {
        resultado.innerHTML = "CPF Inválido!";
        resultado.className = "invalido";
        return;
    }

    resultado.innerHTML = "CPF Válido!";
    resultado.className = "valido";
}