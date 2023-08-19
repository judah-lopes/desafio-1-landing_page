//* Olá, avaliador!

//* Nas instruções do projeto não foi solicitada nenhuma funcionalidade específica
//* para esse desafio. Além disso, não vi nenhum elemento no figma que pudesse
//* ter uma funcionalidade (como as setas&carrossel no projetos das aulas)...

//* Sendo assim, tentei criar uma funcionalidade pelo js, onde quando entrássemos
//* nas página, os dados numéricos seriam "pausados" quando chegassem nos números
//* dados pelo figma. Tentei fazer, mas não consegui com o conhecimento que tenho,
//* por isso vou manter esse arquivo com as últimas linhas de código que escrevi
//* visando essa funcionalidade.

//* Grato pela atenção!

//!OBS: no html...
//         -> comentei a tag <script>, que fazia o link pra este arquivo
// e a tag <body>, com o evento que mencionava a function que daria início à minha
// funcionalidade.
//         -> para manter a boa aparência, apaguei as ids usadas na function "counter"
// abaixo. Elas ficavam nas tags <h2> dentro dos articles ".dados"

var dataCounter = 0;
var data1 = 850;
var interval;

function startCounter() {
    interval = setInterval(counter, 10);
}

function counter() {
    dataCounter++;
    window.onload = document.getElementById("dado1").innerText = dataCounter;
    window.onload = document.getElementById("dado2").innerText = dataCounter;
    window.onload = document.getElementById("dado3").innerText = dataCounter;

    if (document.getElementById("dado1") == 850) {
        clearInterval(interval);
    }
}
