$(Load);

function Load() {
    ShowText();
}

function ShowText() {
    var typed3 = new Typed('.js--text-container', {
        strings: ["<span class='typer'>Hi, I'm Mahdi Forghani !</span>^200\n<br/><span class='sub-typer'>Full-Stack Web Developer from Iran...</span>"],
        typeSpeed: 28,
        cursorChar: '_',
        startDelay: 200,
        smartBackspace: false, // this is a default
        loop: false
    });
}
