// Web Audio API?
const AudioContext = window.AudioContext || webkitAudioContext;

const minusTempo = document.querySelector('.minus');
const increaseTempo = document.querySelector('.plus');
const tempoDisplay = document.querySelector('.container-display p');
const tempoOutput = document.querySelector('.container-dial p');

var tempo = 40;
var msTempo = tempo * 1000;
var sec = 60;

var bpm = tempo/sec;
var interval;

// START METRNOME - DISPLAYS, BUT TIMING ISN'T RIGHT; PROBABLY SOMETHING TO DO WITH displayControl()
function start() {
    interval = setInterval(displayControl, 4000);  //  BPM CALCULATION IS WRONG - THIS PRODUCES A CLOSER RESULT
}

// STOP METRONOME; CLEAR DISPLAY
function stop() {
    clearInterval(interval);
    tempoOutput.innerHTML = '';
}

// FUNCTION TO CONTROL tempoOutput INTERVAL
function displayControl() {
    if (tempoOutput.innerHTML == '') {
        tempoOutput.innerHTML = 'beep';
    } else {
        tempoOutput.innerHTML = '';
    }
}

// BUTTON TO DECREASE TEMPO
minusTempo.addEventListener("click", function(){
    let lowestTempo = 40;

    if (tempo > lowestTempo) {
        tempo--;
        tempoDisplay.innerHTML = `${tempo}<span> bpm</span>`;
    } else {
        alert('That tempo is too slow!!');
    }
    
});

// BUTTON TO INCREASE TEMPO
increaseTempo.addEventListener("click", function(){
    let highestTempo = 208;
    
    if (tempo < highestTempo) {
        tempo++;
        tempoDisplay.innerHTML = `${tempo}<span> bpm</span>`;
    } else {
        alert('That tempo is too fast!');
    }
    

});


