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