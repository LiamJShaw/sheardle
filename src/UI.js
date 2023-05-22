import { isAudioPaused, playAudio, pauseAudio, getAudioCurrentTime } from './audioManager';
import { allowedDurations, getCurrentTurn, getCurrentTrackID, checkGuess, saveNewGuessToGameState, addSkippedTurnToGameState, checkForSpotifyDupes } from './sheardle';
import { searchTrack, getTrackByID } from './spotify';
import { gameEnd } from './resultsScreen';

export function initUI(gameState = null) {

  updateSeekBarBackground(getCurrentTurn());
  createMarkers(allowedDurations);

  if (gameState) {
    importLoadedGame(gameState);
  }

  updateSkipButtonText();

}

function importLoadedGame(gameData) {
  for (let i = 0; i < gameData.guesses.length; i++) {
    const guessData = gameData.guesses[i];

    // Check the state of each guess and update the UI accordingly
    if (guessData === null) {
      addSkippedTurnToBoard(i);
    } else if (guessData.correct) {
      addCorrectGuessToBoard(guessData.guess, i);
    } else {
      addIncorrectGuessToBoard(guessData.guess, i);
    }
  }

}

// Guess board
const guessContainer = document.querySelector('.guess-container');

function addIncorrectGuessToBoard(guess, turn) {
    const guessDiv = guessContainer.children[turn];

    // Create the red 'x' icon
    const redXIcon = document.createElement('span');
    redXIcon.textContent = 'x';
    redXIcon.classList.add('red-x-icon');
    guessDiv.appendChild(redXIcon);
  
    // Add the track info text to the guess div
    const guessText = document.createElement('p');
    guessText.textContent = guess;
    guessText.classList.add('guess-text');
    guessDiv.appendChild(guessText);
}

function addCorrectGuessToBoard(guess, turn) {

    const guessDiv = guessContainer.children[turn];

    // Create the green checkmark icon
    const greenCheckIcon = document.createElement('span');
    greenCheckIcon.textContent = '✓';
    greenCheckIcon.classList.add('green-check-icon');
    guessDiv.appendChild(greenCheckIcon);
  
    // Add the track info text to the guess div
    const guessText = document.createElement('p');
    guessText.textContent = guess;
    guessText.classList.add('guess-text');
    guessDiv.appendChild(guessText);
}

export function addSkippedTurnToBoard(turn) {
  const guessContainer = document.querySelector('.guess-container');
  const guessDiv = guessContainer.children[turn];
  
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
  searchBox.value = '';
}


// Play/Pause button
const playButton = document.querySelector(".play-button");
playButton.addEventListener("click", handlePlayButtonClick);

function handlePlayButtonClick() {

    if (isAudioPaused()) {
        playAudio();
        playButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    } else {
        pauseAudio();
        playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
}


// Skip button
const skipButton = document.querySelector(".skip");
skipButton.addEventListener("click", handleSkipButtonClick);

function handleSkipButtonClick() {

  let currentTurn = getCurrentTurn();

    if (currentTurn < allowedDurations.length - 1) {
      
      addSkippedTurnToBoard(currentTurn);
      
      updateSkipButtonText();
      addSkippedTurnToGameState();

      updateSeekBarBackground(currentTurn);
    } else {

      // End game
      getTrackByID(getCurrentTrackID()).then(response => {
        gameEnd(response);
      });

    }
}

function changePlayButtonIconToPlay() {
  playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

function updateSkipButtonText() {

  if (getCurrentTurn() >= 1 && getCurrentTurn() < allowedDurations.length) {
    const skipSeconds = allowedDurations[getCurrentTurn()] - allowedDurations[getCurrentTurn() - 1];
    skipButton.textContent = `SKIP (+${skipSeconds}s)`;
  } else if (getCurrentTurn() === 0) {
    const skipSeconds = allowedDurations[getCurrentTurn()];
    skipButton.textContent = `SKIP (+${skipSeconds}s)`;
  } else {
    skipButton.textContent = "SKIP";
  }
}


// Submit button
const submitButton = document.querySelector('.submit');
const resultScreen = document.querySelector('.modal');

submitButton.addEventListener('click', () => {

  const gameTrackID = getCurrentTrackID();
  const guessIsCorrect = checkGuess(selectedTrackID, gameTrackID);
  const searchInputValue = searchInput.value;

  // Update progress bar before adding guess and saving game state
  updateSeekBarBackground(getCurrentTurn());

  if (!guessIsCorrect) {
      console.log("Checking for Spotify duplicates...");
      checkForSpotifyDupes(searchInput.value).then(response => {
          console.log("Included in dupes:", response);

          if (response) {
              addCorrectGuessToBoard(searchInputValue, getCurrentTurn() - 1);

              getTrackByID(getCurrentTrackID()).then(response => {
                gameEnd(response);
              });
              
          } else {
              addIncorrectGuessToBoard(searchInputValue, getCurrentTurn() - 1);
          }

          // Check total guesses after each incorrect guess
          if (getCurrentTurn() >= allowedDurations) {
            getTrackByID(getCurrentTrackID()).then(response => {
              gameEnd(response);
            });
          }
      });
  } else {
      addCorrectGuessToBoard(searchInputValue, getCurrentTurn());
      getTrackByID(getCurrentTrackID()).then(response => {
        gameEnd(response);
      });      
  }

  saveNewGuessToGameState(searchInputValue, guessIsCorrect);

  disableSubmitButton();
  clearSearchBox();

});



export function enableSubmitButton() {
  const submitButton = document.querySelector('.submit');
  submitButton.removeAttribute("disabled");
}

export function disableSubmitButton() {
  const submitButton = document.querySelector('.submit');
  submitButton.setAttribute("disabled", "");
}


// Progress bar
const progressBar = document.querySelector(".seek-bar-progress");

// export function updateProgressBar() {
//   const progressPercentage = (getAudioCurrentTime() / 16);
//   progressBar.style.transform = `scaleX(${progressPercentage})`;

//   if (!isAudioPaused()) {
//     requestAnimationFrame(updateProgressBar);
//   } else {
//     changePlayButtonIconToPlay();
//   }
// }

export function updateProgressBar() {
  const progressPercentage = getAudioCurrentTime() / 16;
  const offset = 0.005;
  progressBar.style.transform = `scaleX(${progressPercentage + offset})`;

  if (!isAudioPaused()) {
    requestAnimationFrame(updateProgressBar);
  } else {
    changePlayButtonIconToPlay(); 
  }
}


const seekBarBackground = document.querySelector(".seek-bar-background");

function updateSeekBarBackground(turn) {
  const playDuration = allowedDurations[turn];
  const percentage = playDuration / 16;
  seekBarBackground.style.transform = `scaleX(${percentage})`;
}

// Allowed length to play markers
function createMarker(duration) {
  const marker = document.createElement("div");
  const percentage = Math.min((duration / 16) * 100, 100); // limit to maximum of 100

  marker.style.width = "1px";
  marker.style.height = "100%";
  marker.style.position = "absolute";
  marker.style.left = `${percentage}%`;
  marker.style.backgroundColor = "#ffffff";

  return marker;
}

export function createMarkers(allowedDurations) {
  const markersContainer = document.querySelector(".seek-bar-markers");
  allowedDurations.forEach(duration => {
      const marker = createMarker(duration);
      markersContainer.appendChild(marker);
  });
}

// Search bar
const searchInput = document.querySelector('.spotify-search');
let selectedTrackID;

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
              selectedTrackID = event.target.getAttribute('data-track-id');;
  
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