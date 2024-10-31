
// Password protection
const password = prompt("Enter the password to access the soundboard:");

if (password === "I AM COOL") { // Replace with your actual password
    document.querySelector('.soundboard').classList.remove('hidden'); // Show soundboard if correct
} else {
    alert("Wrong password! Access denied.");
    window.location.href = "https://sprintingsnail69.github.io/coolsounds/"; // Redirect or reload
}



const audios = document.querySelectorAll('.Audio');
  
//Stops audio lol
 function stopAllAudio() {
   audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0; // Reset each audio
     });
  }
  
  //Press S to stop
  document.addEventListener('keydown', (event) => {
   if (event.key.toLowerCase() === 's') {
     stopAllAudio();
   }
 });

 function playSound(id) {
  const sound = document.getElementById(id);
  sound.currentTime = 0;
  sound.play();
}
//Plays sounds