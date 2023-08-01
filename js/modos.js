
    const botaoDark = document.getElementById('toggle-theme');
const corpo = document.querySelector('body')
let temaDark = false

botaoDark.addEventListener('click', () => {
    temaDark = !temaDark
    console.log(temaDark)
    if (temaDark) {
        corpo.classList.add('dark-mode');
    }
    else {
        corpo.classList.remove('dark-mode');
    }
});
