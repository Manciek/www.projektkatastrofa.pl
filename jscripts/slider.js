let images = ['./webImgs/1.jpg', './webImgs/2.jpg', './webImgs/3.jpg', './webImgs/4.jpeg', './webImgs/5.jpeg', './webImgs/6.jpeg', './webImgs/7.jpeg', './webImgs/8.jpeg', './webImgs/9.jpeg', './webImgs/10.jpeg', './webImgs/11.jpeg', './webImgs/12.jpeg', './webImgs/13.jpeg', './webImgs/14.jpeg', './webImgs/15.jpeg'];

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
//Update the on start
imgCounter.textContent = currentImg + 1 + "/" + images.length;
img.src = images[currentImg]
