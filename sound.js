let overlapAllowed = false;

function toggleOverlap() {
  overlapAllowed = !overlapAllowed;
  document.getElementById("overlapToggle").innerText = overlapAllowed ? "Overlapping On" : "Overlapping Off";
}

const audios = document.querySelectorAll('.Audio');
function stopAllAudio() {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 's') {
    stopAllAudio();
  }
});

function playSound(id) {
  if (!overlapAllowed) {
    stopAllAudio();
  }

  const sound = document.getElementById(id);
  sound.currentTime = 0;
  sound.play();
}

document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'enter') {
    checkPassword();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'escape') {
    closeModal();
  }
});