import { shareResult } from "./sheardle";

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

    modal.style.display = "block";

    // Set the song's details
    document.querySelector(".song-title").textContent = trackInfo.name;
    document.querySelector(".song-artist").textContent = trackInfo.artists[0].name;
    document.querySelector(".album-art").src = trackInfo.album.images[0].url;
    document.querySelector(".song-preview").src = trackInfo.preview_url;

    let countdownElement = document.querySelector(".countdown");
    let timeToNextDay = getTimeToNextDay();
    startTimer(timeToNextDay, countdownElement);

    console.log(shareResult());
}

document.querySelector(".share-results-btn").addEventListener('click', function() {
    console.log("Copied results to clipboard", '\n\n', shareResult());

    // Copy to clipboard
    navigator.clipboard.writeText(shareResult());
});

