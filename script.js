const dispatchBtn = document.getElementById('dispatchInhibit');

dispatchBtn.addEventListener('click', () => {
  dispatchBtn.classList.toggle('active');
});

const rampStop = document.getElementById('rampStop');

rampStop.addEventListener('click', () => {
  rampStop.classList.toggle('active');


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

const switchEl = document.getElementById('rotarySwitch');
let isOn = false;

switchEl.addEventListener('click', () => {
  isOn = !isOn;
  switchEl.classList.toggle('on', isOn);
  switchEl.classList.toggle('off', !isOn);
});