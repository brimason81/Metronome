// Web Audio API
const AudioContext = window.AudioContext || window.webkitAudioContext; // CONSTRUCTOR FOR CROSS-BROWSER SUPPORT
const audioContext = new AudioContext();

// GET AUDIO ELEMENT
const audioElement = document.querySelector('audio');  

// PASS AUDIO ELEMENT TO THE AUDIO CONTEXT - CREATES INPUT NODE
const click = audioContext.createMediaElementSource(audioElement);
click.connect(audioContext.destination); // CONNECT AUDIO GRAPH TO DESTINATION

// ACCESSING html ELEMENTS FOR USE IN JavaScript
const minusTempo = document.querySelector('.minus');
const increaseTempo = document.querySelector('.plus');
const tempoDisplay = document.querySelector('.container-display p');
const tempoOutput = document.querySelector('.container-dial button');
const startStopButton = document.querySelector('.control');

// VARIOUS VARIABLES
var tempo = 60;
var bpm;

var interval;
var startStop = false;

// START METRONOME 
function start() {
    startStop = true;
    interval = setInterval(control, bpm  = (60 / tempo) * 1000); //
} 

// STOP METRONOME - CLEAR DISPLAY; CLEAR INTERVAL
function stop() {
    startStop = false;
    clearInterval(interval);
    audioElement.pause();
    
    tempoOutput.innerHTML = 'START';
    tempoOutput.style.backgroundColor = "rgb(22, 255, 1)";
}

// FUNCTION TO CONTROL tempoOutput INTERVAL
function control() {
    audioElement.play();

    if (tempoOutput.innerHTML != '') {
        tempoOutput.style.backgroundColor = "blueviolet"; 
        tempoOutput.innerHTML = '';
    } else {
        tempoOutput.innerHTML = 'STOP';
        tempoOutput.style.backgroundColor = "rgb(22, 255, 1)";
    }
}

// BUTTON TO START AND STOP METRONOME
startStopButton.addEventListener("click", function() {
    //StartAudioContext(metronome.audioContext);  MAYBE NOT CORRECT SYNTAX, BUT NOT WORKING CORRECTLY
    // RESUME AUDIO CONTEXT
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    
    // START & STOP AUDIO
    if (startStop == false) { // COULD NOT USE if (!interval)... ; HAD TO USE DIFFERENT CONDITION
        start();
    } else if (startStop == true) {
        stop();
    }
});

// BUTTON TO DECREASE TEMPO
minusTempo.addEventListener("click", function(){
    let lowestTempo = 40;

    if (tempo > lowestTempo) {
        tempo--;
        tempoDisplay.innerHTML = `${tempo}<span> bpm</span>`;
    } else {
        alert('That tempo is too slow!!');
    }
    /* FOR TESTING */
    //console.log(bpm);  CHANGE IN TEMPO NOT RECOGNIZED WHILE APP IS RUNNING
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
    /* FOR TESTING */
    //console.log(bpm); CHANGE IN TEMPO NOT RECOGNIZED WHILE APP IS RUNNING
});


