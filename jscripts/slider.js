let images = ['./imgs/1.webp', './imgs/2.webp', './imgs/3.webp']

var img = document.getElementById("img");
var imgCounter = document.getElementById("imgCounter");
var currentImg = 0; //Bo array na 0, potem dodajemy 1 do kazdego w counter

function imgLeft() {
    currentImg = changeCounter(currentImg, -1);
    text = currentImg + 1;
    imgCounter.textContent = currentImg + 1 + "/" + images.length;

    img.src = images[currentImg];
}

function imgRight() {
    currentImg = changeCounter(currentImg, +1);
    text = currentImg + 1;
    imgCounter.textContent = currentImg + 1 + "/" + images.length;

    img.src = images[currentImg];
}

function changeCounter(current, integer) {
    current += integer;

    if (current < 0) {
        current = images.length - 1;
    }else if (current > images.length - 1) {
        current = 0;
    }
    return current;
}
//Update the counter on start
imgCounter.textContent = currentImg + 1 + "/" + images.length;