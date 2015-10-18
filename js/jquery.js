function pulse() {
    $('.blink').fadeIn(300);
    $('.blink').fadeOut(500);
}
setInterval(pulse, 1000);