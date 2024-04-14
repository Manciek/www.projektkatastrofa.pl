let images = [
    './webImgs/25.jpg'
    './webImgs/26.jpg'
    './webImgs/27.jpg'
    './webImgs/28.jpg'
    './webImgs/29.jpg'
    './webImgs/30.jpg'
    './webImgs/16.jpg',
    './webImgs/17.jpg',
    './webImgs/18.jpg',
    './webImgs/19.jpg',
    './webImgs/20.jpg',
    './webImgs/21.jpg',
    './webImgs/22.jpg',
    './webImgs/24.jpg',
    './webImgs/1.jpg',
    './webImgs/2.jpg',
    './webImgs/3.jpg',
    './webImgs/4.jpeg',
    './webImgs/5.jpeg',
    './webImgs/6.jpeg',
    './webImgs/7.jpeg',
    './webImgs/9.jpeg',
    './webImgs/11.jpeg',
    './webImgs/12.jpeg',
    './webImgs/15.jpeg'
];

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
