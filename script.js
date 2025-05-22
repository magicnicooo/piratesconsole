const dispatchBtn = document.getElementById('dispatchInhibit');
const resetBtn = document.getElementById('resetDispatchInhibit');

let dispatchActive = false;  // true = bouton champignon enfoncé
let canReset = false;        // true = reset clignote et peut être pressé
let dispatchLocked = false;  // true = impossible de réactiver le bouton champignon avant reset

dispatchBtn.addEventListener('click', () => {
  if (dispatchLocked) {
    // Si on doit reset, on ne peut pas réenclencher Dispatch Inhibit
    console.log('Reset required before using Dispatch Inhibit again');
    return;
  }

  // Toggle état bouton champignon
  dispatchActive = !dispatchActive;
  dispatchBtn.classList.toggle('active', dispatchActive);

  if (!dispatchActive) {
    // Bouton relevé → on active le reset
    canReset = true;
    dispatchLocked = true;
    resetBtn.classList.add('blink');
  }
});

resetBtn.addEventListener('click', () => {
  if (!canReset) {
    // Reset ne fait rien si pas prêt
    return;
  }
  // Reset tout
  canReset = false;
  dispatchLocked = false;
  dispatchActive = false;
  dispatchBtn.classList.remove('active');
  resetBtn.classList.remove('blink');
  console.log('Dispatch Inhibit reset done');
});


// Bouton Rampe Stop
const rampStopBtn = document.getElementById('rampStop');
const resetRampBtn = document.getElementById('resetRampStop');

let rampActive = false;
let canResetRamp = false;
let rampLocked = false;

rampStopBtn.addEventListener('click', () => {
  if (rampLocked) {
    console.log('Reset Ramp Stop required before reuse');
    return;
  }
  rampActive = !rampActive;
  rampStopBtn.classList.toggle('active', rampActive);

  if (!rampActive) {
    canResetRamp = true;
    rampLocked = true;
    resetRampBtn.classList.add('blink');
  }
});

resetRampBtn.addEventListener('click', () => {
  if (!canResetRamp) return;
  canResetRamp = false;
  rampLocked = false;
  rampActive = false;
  rampStopBtn.classList.remove('active');
  resetRampBtn.classList.remove('blink');
  console.log('Ramp Stop reset done');
});

// Bouton Ride Stop
const rideStop = document.getElementById('rideStop');

rideStop.addEventListener('click', () => {
  rideStop.classList.toggle('active');
});





const momentaryBtn = document.getElementById('momentaryButton');
const alarmSound = document.getElementById('alarmSound');

momentaryBtn.addEventListener('mousedown', () => {
  momentaryBtn.classList.add('pressed');

  // Remet au début et joue le son
  alarmSound.currentTime = 0;
  alarmSound.play();
});

momentaryBtn.addEventListener('mouseup', () => {
  momentaryBtn.classList.remove('pressed');
  alarmSound.pause();
  alarmSound.currentTime = 0;
});

// Pour relâcher même si clic hors bouton
document.addEventListener('mouseup', () => {
  momentaryBtn.classList.remove('pressed');
  alarmSound.pause();
  alarmSound.currentTime = 0;
});
//Bouton silence pour Audio
const silenceButton = document.getElementById('silenceButton');
const music = document.getElementById('music');

silenceButton.addEventListener('click', () => {

  if (music.paused) {
    music.currentTime = 0;
    music.play();
    silenceButton.classList.add('active');
  } else {
    music.pause();
    silenceButton.classList.remove('active');
  }
});

//Bouton Spiel Evac
const spielevacButton = document.getElementById('spielevac');
const musicevac = document.getElementById('musicevac');

// Effet visuel d'enfoncement dès qu'on clique
spielevacButton.addEventListener('mousedown', () => {
  spielevacButton.classList.add('pressed');
});

// Effet visuel de relâchement
spielevacButton.addEventListener('mouseup', () => {
  spielevacButton.classList.remove('pressed');
});
spielevacButton.addEventListener('mouseleave', () => {
  spielevacButton.classList.remove('pressed');
});

// Gère le son au clic
spielevacButton.addEventListener('click', () => {
  if (musicevac.paused) {
    musicevac.currentTime = 0;
    musicevac.play();
  } else {
    musicevac.pause();
  }
});

//Bouton Spiel 101
const spiel101Button = document.getElementById('spiel101');
const music101 = document.getElementById('music101');

// Effet visuel d'enfoncement dès qu'on clique
spiel101Button.addEventListener('mousedown', () => {
  spiel101Button.classList.add('pressed');
});

// Effet visuel de relâchement
spiel101Button.addEventListener('mouseup', () => {
  spiel101Button.classList.remove('pressed');
});
spiel101Button.addEventListener('mouseleave', () => {
  spiel101Button.classList.remove('pressed');
});

// Gère le son au clic
spiel101Button.addEventListener('click', () => {
  if (music101.paused) {
    music101.currentTime = 0;
    music101.play();
  } else {
    music101.pause();
  }
});


//Bouton Eclairages Attraction + Témoin Led
const switchl = document.getElementById('rotarySwitch1');
const led1 = document.getElementById('lightIndicator1');
let isOn = false;

switchl.addEventListener('click', () => {
  isOn = !isOn;
  switchl.classList.toggle('on', isOn);
  switchl.classList.toggle('off', !isOn);
  led1.classList.toggle('on', isOn);
});

//Bouton Eclairages Restaurant + Témoin Led
const switch2 = document.getElementById('rotarySwitch2');
const led2 = document.getElementById('lightIndicator2');
let isOn2 = false;

switch2.addEventListener('click', () => {
  isOn = !isOn;
  switch2.classList.toggle('on', isOn);
  switch2.classList.toggle('off', !isOn);
  led2.classList.toggle('on', isOn);
});

//Bouton Eclairages Secours
const switch3 = document.getElementById('rotarySwitch3');
let isOn3 = false;

switch3.addEventListener('click', () => {
  isOn = !isOn;
  switch3.classList.toggle('on', isOn);
  switch3.classList.toggle('off', !isOn);
});