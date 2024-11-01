
// Authentication flag
let authenticated = false;

// Show the modal for password entry
function showPasswordModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("hide");
  modal.classList.add("show");
  modal.style.display = "block";
}

// Hide the modal with zoom-out effect
function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
  modal.classList.add("hide");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300); // Match transition duration
}

// Display the toast for incorrect password
function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.remove("hide");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");
  }, 3000); // Hide toast after 3 seconds
}

// Check password input
function checkPassword() {
  const passwordInput = document.getElementById("passwordInput").value;
  if (passwordInput === "LOL") { // Replace with actual password
    authenticated = true;
    document.querySelector('.soundboard').classList.remove('hidden'); // Show soundboard
    closeModal(); // Close the modal if correct
  } else {
    showToast(); // Show incorrect password toast
  }
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
  if (!authenticated) {
    showPasswordModal();
    return;
  }
  const sound = document.getElementById(id);
  sound.currentTime = 0;
  sound.play();
}

// Initial password check prompt on page load
showPasswordModal();

document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'enter') {
        checkPassword()
    }
})

document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'escape') {
    closeModal()
  }
})
