// Função anônima armazenada na constante "soma"
const soma = () => {

    // Obtém o valor do elemento com id "n1", converte para número decimal (float)
    let nu1 = parseFloat(document.getElementById("n1").value);
    
    // Obtém o valor do elemento com id "n2", converte para número decimal (float)
    let nu2 = parseFloat(document.getElementById("n2").value);
    
    // Realiza a soma dos dois números
    let resultado = nu1 + nu2;
    
    // Exibe um alerta com o resultado da soma
    window.alert(" = " + resultado);
};
