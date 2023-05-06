import './styles/styles.css'

import { searchTrack } from './spotify';

const playButton = document.querySelector(".play-button");
const skipButton = document.querySelector(".skip");
const seekBarBackground = document.querySelector(".seek-bar-background");
const progressBar = document.querySelector(".seek-bar-progress");
const elapsedTime = document.querySelector(".elapsed-time");

const audio = new Audio("https://p.scdn.co/mp3-preview/328e1de49e17b4e1ace2e8f6cdd10b0776a16bc7?cid=74ac949ca587402484dcef1408b4d7f3");

audio.addEventListener("timeupdate", () => {
    const playDuration = allowedDurations[currentTurn - 1];
    const progressPercentage = (audio.currentTime / playDuration) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
    elapsedTime.textContent = `${minutes}:${seconds}`;
});

let currentTurn = 1;
const allowedDurations = [1, 2, 4, 7, 11, 16];
let endTime; // Declare endTime variable outside the event listener
let timeoutID; // Declare timeoutID variable to store the setTimeout identifier

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

playButton.addEventListener("click", () => {
    if (audio.paused) {
        const playDuration = allowedDurations[currentTurn - 1];
        endTime = Math.min(audio.duration, playDuration);

        audio.currentTime = 0;
        audio.play();
        playButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';

        requestAnimationFrame(updateProgressBar);

        clearTimeout(timeoutID); // Clear any existing timeout
        timeoutID = setTimeout(() => {
            audio.pause();
            playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        }, endTime * 1000);
    } else {
        audio.pause();
        playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
});

// Update skipButton click event handler
skipButton.addEventListener("click", () => {
    if (currentTurn < allowedDurations.length) {
        currentTurn++;
    }

    // Update endTime and the timeout
    if (!audio.paused) {
        const playDuration = allowedDurations[currentTurn - 1];
        endTime = Math.min(audio.duration, playDuration);
        const remainingTime = (endTime - audio.currentTime) * 1000;

        clearTimeout(timeoutID); // Clear the existing timeout
        timeoutID = setTimeout(() => {
            audio.pause();
            playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        }, remainingTime);
    }

    updateSeekBarBackground(currentTurn);
    updateSkipButtonText();
});

// Function to update the skip button text
function updateSkipButtonText() {
    if (currentTurn < allowedDurations.length) {
        const skipSeconds = allowedDurations[currentTurn] - allowedDurations[currentTurn - 1];
        skipButton.textContent = `SKIP (+${skipSeconds}s)`;
    } else {
        skipButton.textContent = "SKIP";
    }
}

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

// Initialize the seek bar background for the first turn
updateSeekBarBackground(currentTurn);
updateSkipButtonText();


// Search sengs
async function searchSpotify(query) {

    console.log("Spotify search: ", query);
    return;

    // You need to bring the Spotify code into this proj from OTD next

    const accessToken = 'YOUR_SPOTIFY_ACCESS_TOKEN';
    const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=5`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
  
    const data = await response.json();
    const searchResults = document.querySelector('.search-results');
    searchResults.innerHTML = '';
  
    data.tracks.items.forEach((item) => {
      const resultItem = document.createElement('div');
      resultItem.classList.add('result-item');
      resultItem.textContent = `${item.name} - ${item.artists[0].name}`;
      resultItem.addEventListener('click', () => {
        // Handle the result selection here.
        console.log('Selected:', item);
      });
  
      searchResults.appendChild(resultItem);
    });
  }

function debounce(func, wait, immediate) {

    let timeout;

    return function() {
        const context = this, args = arguments;

        const later = function() {
            timeout = null;

            if (!immediate) {
                func.apply(context, args);
            }

        };
        
        const callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) {
            func.apply(context, args);
        }
    };
}

const searchInput = document.querySelector('.spotify-search');

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
              console.log('Selected track ID:', selectedTrackId);
  
              // Store the selected track ID somewhere
              // document.getElementById('hidden-input-field').value = selectedTrackId;
  
              // Update the search input with the selected result and hide the results container
              searchInput.value = event.target.textContent;
              resultsContainer.style.display = 'none';
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
  }, 750));
  