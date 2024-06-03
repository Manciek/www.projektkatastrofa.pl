const outerWidth = window.outerWidth;
let innerWidth;
function checkInnerWidth() {
    let inner = window.innerWidth;
    innerWidth = inner;
    console.log('Current inner width:', innerWidth);
    if (innerWidth != outerWidth) {
        debugger;
        window.location.replace("https://www.google.com");
    }
}
window.addEventListener('resize', checkInnerWidth);

checkInnerWidth();
