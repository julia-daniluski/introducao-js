let nome= ("Daniluski")
let bairro= ("Parque Erasmo Assunção")
//console.log (nome)
//alert(nome)

document.getElementById("resultado").innerText = "Olá " + nome + ", você mora no bairro " + bairro + "? Boa tarde."
/* adicionar innertext porque é um texto e 
document.getElementById consegue recuperar um elemento da página apenas pelo ID. */