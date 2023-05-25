import { shareResult } from "./sheardle";
import { getGuesses } from "./sheardle";

const modal = document.getElementById("resultsModal");

// Getting the difference in seconds to the next day
function getTimeToNextDay() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    const diffInMilliSeconds = tomorrow - now;
    return diffInMilliSeconds / 1000;
}

// Countdown timer
function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

export function gameEnd(trackInfo) {

    let countdownElement = document.querySelector(".countdown");
    let timeToNextDay = getTimeToNextDay();
    startTimer(timeToNextDay, countdownElement);
    
    modal.style.display = "block";

    // Set the song's details
    document.querySelector(".song-title").textContent = trackInfo.name;
    document.querySelector(".song-artist").textContent = trackInfo.artists[0].name;
    document.querySelector(".album-art").src = trackInfo.album.images[0].url;
    document.querySelector(".song-preview").src = trackInfo.preview_url;



    // Get user results
    let userResults = getGuesses();

    console.log("User results", userResults);

    for (let i = 0; i < 6; i++) {
        if (userResults[i] === null | !userResults[i]) {
          let guessElement = document.getElementById(`guess${i+1}`);
          guessElement.classList.add('grey');
        } else {
          let guessElement = document.getElementById(`guess${i+1}`);
          switch(userResults[i].status) {
            case "correct":
              guessElement.classList.add('green');
              break;
            case "semicorrect":
              guessElement.classList.add('yellow');
              break;
            case "incorrect":
              guessElement.classList.add('red');
              break;
            default:
              guessElement.classList.add('grey');
          }
        }
      }

    console.log(shareResult());
}