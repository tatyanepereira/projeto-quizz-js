const audio = document.getElementById ("audio");
const btnVolumeUp = document.getElementById("volumeUp");
const btnVolumeOff = document.getElementById("volumeOff");

function tocarAudio() {
    audio.play();
}

function pausarAudio() {
    audio.pause();
}

btnVolumeUp.onclick = () => {
    tocarAudio();
}

btnVolumeOff.onclick = () => {
    pausarAudio(); 
}
