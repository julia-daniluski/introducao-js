let n1 = parseInt (prompt("Digite o número 1")); // sem o parseInt os números juntam tipo "9+8=98"
let n2 = parseInt (prompt("Digite o número 2"));
let igual = (n1 + " + " + n2) // para mostrar a conta antes do resultado
let soma = n1 + n2; // para mostrar o resultado da soma

document.getElementById ("calculo").innerText =  igual + " = " + soma + ".";
