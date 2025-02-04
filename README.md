# INTRODUÇÃO JAVA SCRIPT:
 
 No exemplo 1 nós testamos apenas a extensão Code Runner.
<hr>
No exemplo chrome, testamos como colocar o script.js em um link/página e inline:


## No inline: dentro do código html colocamos:

```<script> console.log("Olá mundo!"; </script>```


## No "linkado": precisamos de uma página separada (script.js) e linkamos dentro do body do html:

```<script src="script.js"></script>```
<hr>

No exemplo váriavel nós testamos as variaveis do js:

```let nome= ("Daniluski") console.log (nome)```

Também testamos os alertas que aparecem quando a página se inicia. Exemplo:

![Captura de tela 2025-02-03 105059](https://github.com/user-attachments/assets/9d7baddf-38bf-49ed-8bec-df1b3fee5842)

```alert(testando variavel)```

<hr>

No exemplo prompt, aparece uma caixinha para o usuário digitar o que o server pede:

```prompt ("Digite o seu nome")```

![Captura de tela 2025-02-03 112055](https://github.com/user-attachments/assets/e95cfbab-d423-4813-8e67-ae826d149636)

Para inserir a informação e mostra-la na tela para o usuário, é necessário usar uma variável que mantnha a informação colocada:

```let nome = prompt("Digite seu nome:")```

E em seguida outra tag no script:

```document.getElementById ("resposta").innerText = "Olá " + nome + "."```

(A tag do documento com o elemento id linka com o html na tag onde o id está).

<hr>

No exemplo soma, aprendemos a fazer soma pelo Java Script. É necessário usarmos váriaveis para que os números somados sejam apresentados como informações que devem ser absorvidas:

```let n1 = parseInt (prompt("Digite o número 1"));```
```let n2 = parseInt (prompt("Digite o número 2"));```
```document.getElementById ("calculo").innerText =  igual + " = " + soma + ".";```

<hr>

O exemplo function foi dividido em 3 exemplos, o primeiro estando diretamente na página  e os outros dois em pastas dentro da pasta. Inicialmente, colocamos o function para usar um prompt e mandar um alerta. Já que era um exemplo, fiz uma pequena brincadeira com o personagem "Stu Marcher" da franquia de filmes slassher "Pânico".
<br>
No ex2, usamos Arrow Function, que nada mais é que a versão atualizada do function. Fizemos um botão interativo que aparece uma mensagem quando aperta. 
No JS foi a partir do código:

```const clicou = () = { window.alert("Você clicou no botão 🤨")}```
Já no HTML:

```<h1 id="">✨Interagindo com o botão✨</h1> <button onclick="clicou()">Clica em mim 🫦</button>```