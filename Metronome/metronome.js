// Web Audio API?
const AudioContext = window.AudioContext || webkitAudioContext;

const minusTempo = document.querySelector('.minus');
const increaseTempo = document.querySelector('.plus');
const tempoDisplay = document.querySelector('.container-display p');
const tempoOutput = document.querySelector('.container-dial button');
const startStopButton = document.querySelector('.control');

var tempo = 40;
var bpm = (tempo / 60) * 1000;

var interval;

// START METRONOME - DISPLAYS, BUT TIMING ISN'T RIGHT; PROBABLY SOMETHING TO DO WITH control()
function start() {
    if (!interval) {
        interval = setInterval(control, 1000);  //  BPM CALCULATION IS WRONG - THIS PRODUCES A CLOSER RESULT
        console.log(tempo);
        console.log(bpm);
    } 
}

// STOP METRONOME; CLEAR DISPLAY
function stop() {
    clearInterval(interval);
}

// FUNCTION TO CONTROL tempoOutput INTERVAL
function control() {
    if (tempoOutput.innerHTML != '') {
        tempoOutput.style.backgroundColor = "blueviolet";
        tempoOutput.innerHTML = ''; 
    } else {
        tempoOutput.style.backgroundColor = "cyan";
        tempoOutput.innerHTML = 'click me';
    }
}

/*  NEEDS WORK!
startStopButton.addEventListener("click", function() {
    if (!interval) {
        start();
    } else {
        stop();
    }
})
*/

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


