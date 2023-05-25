import { playAudio } from "./audioManager"; 

var modal = document.getElementById('howToPlayModal');
var closeBtn = document.getElementById('closeHowToPlay');
var playBtn = document.getElementById('playFirstTurn');

var howToPlayButton = document.querySelector('.how-to-play');

howToPlayButton.onclick = function() {
  modal.style.display = 'block';
}

closeBtn.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

playBtn.onclick = function() {
  modal.style.display = 'none';
  playAudio();
}
