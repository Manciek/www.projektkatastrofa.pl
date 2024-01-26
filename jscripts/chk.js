function checkAnswers() {
    // Get answers:
    var a1 = document.querySelector('input[name="century"]:checked')?.value ?? 'd';
    var a2 = document.querySelector('input[name="atom"]:checked')?.value ?? 'd';
    var a3 = document.querySelector('input[name="gamma"]:checked')?.value ?? 'd';
    var a4 = document.querySelector('input[name="ontario"]:checked')?.value ?? 'd';
    var a5 = document.querySelector('input[name="fukushima"]:checked')?.value ?? 'd';
    var a6 = document.querySelector('input[name="tf"]:checked')?.value ?? 'd';
    var a7 = document.querySelector('input[name="chance"]:checked')?.value ?? 'd';

    var allAnswers = 7;
    var correct = 0;

    if (a1 === 'b') {
        correct++;
    }
    if (a2 === 'a') {
        correct++;
    }
    if (a3 === 'c') {
        correct++;
    }
    if (a4 === 'b') {
        correct++;
    }
    if (a5 === 'c') {
        correct++;
    }
    if (a6 === 'b') {
        correct++;
    }
    if (a7 === 'a') {
        correct++;
    }

    var percentValue = ((correct / allAnswers) * 100).toFixed(1);
    alert('You got: ' + percentValue + '%!')

}