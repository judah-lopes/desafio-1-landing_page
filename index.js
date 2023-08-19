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
