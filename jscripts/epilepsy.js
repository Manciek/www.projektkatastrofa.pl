var table = document.getElementById("tabelka");
var r1t1 = table.querySelectorAll("tr:nth-child(3n+1) td:nth-child(3n+1)"); //red
var r1t2 = table.querySelectorAll("tr:nth-child(3n+1) td:nth-child(3n+2)"); //green
var r1t3 = table.querySelectorAll("tr:nth-child(3n+1) td:nth-child(3n+3)"); //blue

var r2t1 = table.querySelectorAll("tr:nth-child(3n+2) td:nth-child(3n+1)"); //green
var r2t2 = table.querySelectorAll("tr:nth-child(3n+2) td:nth-child(3n+2)"); //blue
var r2t3 = table.querySelectorAll("tr:nth-child(3n+2) td:nth-child(3n+3)"); //red

var r3t1 = table.querySelectorAll("tr:nth-child(3n+3) td:nth-child(3n+1)"); //blue
var r3t2 = table.querySelectorAll("tr:nth-child(3n+3) td:nth-child(3n+2)"); //red
var r3t3 = table.querySelectorAll("tr:nth-child(3n+3) td:nth-child(3n+3)"); //green

let i = 0;
let doit = false;
let intervalId;
var colors = ["red", "green", "blue"];

let c1 = 0;
let c2 = 1;
let c3 = 2;

function start() {
    i += 1;
    if (i % 2 != 0) {
        doit = true
        intervalId = setInterval(changeColors, 100);
    } else if (i % 2 == 0) {
        doit = false;
        clearInterval(intervalId)
        c1, c2, c3 = 0, 1, 2;
    }
}



function changeColors() {
    c1 += 1;
    c2 += 1;
    c3 += 1;
    for (let i = 0; i < r1t1.length; i++) {
        r1t1[i].style.backgroundColor = colors[c1 % 3];
    }
    for (let i = 0; i < r2t3.length; i++) {
        r2t3[i].style.backgroundColor = colors[c1 % 3];
    }
    for (let i = 0; i < r3t2.length; i++) {
        r3t2[i].style.backgroundColor = colors[c1 % 3];
    }//red

    for (let i = 0; i < r1t2.length; i++) {
        r1t2[i].style.backgroundColor = colors[c2 % 3];
    }
    for (let i = 0; i < r2t1.length; i++) {
        r2t1[i].style.backgroundColor = colors[c2 % 3];
    }
    for (let i = 0; i < r3t3.length; i++) {
        r3t3[i].style.backgroundColor = colors[c2 % 3];
    }//green

    for (let i = 0; i < r1t3.length; i++) {
        r1t3[i].style.backgroundColor = colors[c3 % 3];
    }
    for (let i = 0; i < r2t2.length; i++) {
        r2t2[i].style.backgroundColor = colors[c3 % 3];
    }
    for (let i = 0; i < r3t1.length; i++) {
        r3t1[i].style.backgroundColor = colors[c3 % 3];
    }//blue
}