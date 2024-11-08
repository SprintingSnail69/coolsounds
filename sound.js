// Overlapping sounds flag
let overlapAllowed = false;

// Toggle overlapping sounds
function toggleOverlap() {
  overlapAllowed = !overlapAllowed;
  document.getElementById("overlapToggle").innerText = overlapAllowed ? "Overlapping On" : "Overlapping Off";
}


// Stop all audio
const audios = document.querySelectorAll('.Audio');
function stopAllAudio() {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

// Press 'S' key to stop audio
document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 's') {
    stopAllAudio();
  }
});

// Play sound with password check
function playSound(id) {
  if (!overlapAllowed) {
    stopAllAudio(); // Stop any other sounds if overlap is not allowed
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