// Web Audio API?
const AudioContext = window.AudioContext || webkitAudioContext;

const minusTempo = document.querySelector('.minus');
const increaseTempo = document.querySelector('.plus');
const tempoDisplay = document.querySelector('.container-display p');
const tempoOutput = document.querySelector('.container-dial button');
const startStopButton = document.querySelector('.control');

var tempo = 60;
var bpm;

var interval;
var startStop = false;

// START METRONOME - DISPLAYS, BUT TIMING ISN'T RIGHT; PROBABLY SOMETHING TO DO WITH control()
function start() {
    startStop = true;
    interval = setInterval(control, bpm = (60 / tempo) * 1000); 

    /* FOR TESTING */
    console.log(tempo);
    console.log(bpm);
} 

// STOP METRONOME - CLEAR DISPLAY; CLEAR INTERVAL
function stop() {
    startStop = false;
    clearInterval(interval);
    
    /* FOR TESTING */
    console.log(interval);
    console.log('all clear');
    
    tempoOutput.innerHTML = 'START';
    tempoOutput.style.backgroundColor = "cyan";
}

// FUNCTION TO CONTROL tempoOutput INTERVAL
/*
    NEED TO FIX THE DISPLAY - WAS WORKING BETTER BEFORE!! NOW JUST FLASHES RAPIDLY DESPITE BPM
*/ 
function control() {
    if (tempoOutput.innerHTML != '') {
        tempoOutput.style.backgroundColor = "blueviolet"; 
        tempoOutput.innerHTML = '';
    } else {
        tempoOutput.innerHTML = 'STOP';
        tempoOutput.style.backgroundColor = "cyan";
    }
}

// BUTTON TO START AND STOP METRONOME
startStopButton.addEventListener("click", function() {
    if (startStop == false) { // COULD NOT USE if (!interval)... ; HAD TO USE DIFFERENT CONDITION
        start();
    } else if (startStop == true) {
        stop();
    }
})

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
    
    /* FOR TESTING */
    console.log(bpm); // CHANGE IN TEMPO NOT RECOGNIZED WHILE APP IS RUNNING
    
    if (tempo < highestTempo) {
        tempo++;
        tempoDisplay.innerHTML = `${tempo}<span> bpm</span>`;
        
        
    } else {
        alert('That tempo is too fast!');
    }
});


