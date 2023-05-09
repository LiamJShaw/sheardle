import { getCurrentTurn, 
         getAllowedDurations, 
         moveToNextTurn, 
         getCurrentGameTrack,
         getGameTrackAudio,
         getCurrentTrack,
         checkGuess
    } from "./sheardle";

import { searchTrack } from './spotify';

import { getGameTrack } from './gameState';

export function addGuessToBoard(guess, turn) {
    const guessContainer = document.querySelector('.guess-container');
    const guessDiv = guessContainer.children[turn - 1];
    
    // Create the red 'x' icon
    const redXIcon = document.createElement('span');
    redXIcon.textContent = 'x';
    redXIcon.classList.add('red-x-icon');
    guessDiv.appendChild(redXIcon);

    // Add the track info text to the guess div
    const guessText = document.createElement('p');
    guessText.textContent = guess;
    guessDiv.appendChild(guessText);
  }
  
  export function addSkippedTurnToBoard(turn) {
    const guessContainer = document.querySelector('.guess-container');
    const guessDiv = guessContainer.children[turn - 1];
    
    // Create the red 'x' icon
    const redXIcon = document.createElement('span');
    redXIcon.textContent = 'x';
    redXIcon.classList.add('red-x-icon');
  
    // Add the red 'x' icon to the guess div
    guessDiv.appendChild(redXIcon);
  
    // Add the "Skipped turn" text to the guess div
    const skippedTurnText = document.createElement('p');
    skippedTurnText.textContent = "Skipped";
    guessDiv.appendChild(skippedTurnText);
  }
  
  export function clearSearchBox() {
    const searchBox = document.querySelector('.spotify-search');
    searchBox.textContent = '';
  }


// Search bar
let selectedTrackID;

const searchInput = document.querySelector('.spotify-search');

// Debounce function to stop the auto-search firing too often
function debounce(func, wait, immediate) {
    let timeout;

    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        
        const callNow = immediate && !timeout;

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}

// No debounce needed for disabling the button
searchInput.addEventListener('input', () => {
    disableSubmitButton();
})

searchInput.addEventListener('input', debounce((event) => {
    const query = event.target.value;
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';
    resultsContainer.style.display = 'none';
  
    if (query) {
      searchTrack(query)
      .then(response => {
        if (response.length > 0) {
          response.forEach((track, index) => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.textContent = `${track.artists[0].name} - ${track.name}`;
            resultItem.setAttribute('data-track-id', track.id);
  
            resultItem.addEventListener('click', (event) => {
              const selectedTrackId = event.target.getAttribute('data-track-id');
              selectedTrackID = selectedTrackId;
              console.log('Selected track ID:', selectedTrackId);
  
              // Update the search input with the selected result and hide the results container
              searchInput.value = event.target.textContent;
              resultsContainer.style.display = 'none';
              enableSubmitButton();
            });
  
            resultsContainer.appendChild(resultItem);
          });
  
          resultsContainer.style.display = 'block';
        }
      })
      .catch(error => {
        console.error(error);
      });
    }
  }, 500));


// Search results
const resultsContainer = document.getElementById('results-container');
document.addEventListener('click', (event) => {
  // Check if the click target is outside of the .results-container
  if (!event.target.closest('#results-container')) {
    resultsContainer.style.display = 'none';
  }
});


// Submit button
const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', () => {

    const gameTrack = getGameTrack();

    gameTrack.then(response => {
        const guess = checkGuess(selectedTrackID, response.id);

        console.log("Guess is ", guess);
    
        addGuessToBoard(searchInput.value, getCurrentTurn());
        moveToNextTurn();
    });
});

export function enableSubmitButton() {
    const submitButton = document.querySelector('.submit');
    submitButton.removeAttribute("disabled");
}
  
export function disableSubmitButton() {
    const submitButton = document.querySelector('.submit');
    submitButton.setAttribute("disabled", "");
}


// Play button
const playButton = document.querySelector(".play-button");
const elapsedTime = document.querySelector(".elapsed-time");

let audio;
let endTime; // Outside the event listener for skipping while playing
let timeoutID;

async function initAudio() {

    let gameTrack = {};

    audio = new Audio(gameTrack.preview_url);
    
    audio.addEventListener("timeupdate", () => {
      const playDuration = allowedDurations[getCurrentTurn() - 1];
      const progressPercentage = (audio.currentTime / playDuration) * 100;
      progressBar.style.width = `${progressPercentage}%`;
  
      const minutes = Math.floor(audio.currentTime / 60);
      const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
      elapsedTime.textContent = `${minutes}:${seconds}`;
    });

    playButton.addEventListener("click", () => {

        getCurrentTrack().then(track => {
            console.log(track);
        });

        
        if (audio.paused) {
            const playDuration = allowedDurations[getCurrentTurn() - 1];
            endTime = Math.min(audio.duration, playDuration);
    
            audio.currentTime = 0;
            audio.play();
            playButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    
            requestAnimationFrame(updateProgressBar);
    
            clearTimeout(timeoutID);
            timeoutID = setTimeout(() => {
                audio.pause();
                playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
            }, endTime * 1000);
        } else {
            audio.pause();
            playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        }
    });
}

initAudio();


// Skip button
const skipButton = document.querySelector(".skip");

skipButton.addEventListener("click", () => {
    if (getCurrentTurn() < allowedDurations.length) {
        addSkippedTurnToBoard(getCurrentTurn());
        moveToNextTurn();
    }

    if (!audio.paused) {
        const playDuration = allowedDurations[getCurrentTurn() - 1];
        endTime = Math.min(audio.duration, playDuration);
        const remainingTime = (endTime - audio.currentTime) * 1000;

        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            audio.pause();
            playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        }, remainingTime);
    }

    updateSeekBarBackground(getCurrentTurn());
    updateSkipButtonText();
});

function updateSkipButtonText() {
    if (getCurrentTurn() < allowedDurations.length) {
        const skipSeconds = allowedDurations[getCurrentTurn()] - allowedDurations[getCurrentTurn() - 1];
        skipButton.textContent = `SKIP (+${skipSeconds}s)`;
    } else {
        skipButton.textContent = "SKIP";
    }
}


// Seek bar
const seekBarBackground = document.querySelector(".seek-bar-background");
const progressBar = document.querySelector(".seek-bar-progress");

const allowedDurations = getAllowedDurations();

function updateSeekBarBackground(turn) {
    const playDuration = allowedDurations[turn - 1];
    const percentage = (playDuration / 16) * 100;
    seekBarBackground.style.width = `${percentage}%`;
}

function updateProgressBar() {
    const progressPercentage = ((audio.currentTime / 16) * 100 + 1);
    progressBar.style.width = `${progressPercentage}%`;

    if (!audio.paused) {
        requestAnimationFrame(updateProgressBar);
    }
}

// Initialize the seek bar background for the first turn
updateSeekBarBackground(getCurrentTurn());
updateSkipButtonText();

// Allowed length to play markers
function createMarker(duration) {
    const marker = document.createElement("div");
    const percentage = (duration / 16) * 100;

    marker.style.width = "1px";
    marker.style.height = "100%";
    marker.style.position = "absolute";
    marker.style.left = `${percentage}%`;
    marker.style.backgroundColor = "#ffffff";

    return marker;
}

const markersContainer = document.querySelector(".seek-bar-markers");
allowedDurations.forEach(duration => {
    const marker = createMarker(duration + 0.1);
    markersContainer.appendChild(marker);
});


