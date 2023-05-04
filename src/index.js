// import './styles/styles.css'

// const playButton = document.querySelector(".play-button");
// const skipButton = document.querySelector(".skip");
// const seekBarBackground = document.querySelector(".seek-bar-background");
// const progressBar = document.querySelector(".seek-bar-progress");
// const elapsedTime = document.querySelector(".elapsed-time");

// const audio = new Audio("https://p.scdn.co/mp3-preview/328e1de49e17b4e1ace2e8f6cdd10b0776a16bc7?cid=74ac949ca587402484dcef1408b4d7f3");

// audio.addEventListener("timeupdate", () => {
//     const playDuration = allowedDurations[currentTurn - 1];
//     const progressPercentage = (audio.currentTime / playDuration) * 100;
//     progressBar.style.width = `${progressPercentage}%`;

//     const minutes = Math.floor(audio.currentTime / 60);
//     const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
//     elapsedTime.textContent = `${minutes}:${seconds}`;
// });

// let currentTurn = 1;
// const allowedDurations = [1, 2, 4, 7, 11, 16];

// function updateSeekBarBackground(turn) {
//     const playDuration = allowedDurations[turn - 1];
//     const percentage = (playDuration / 16) * 100;
//     seekBarBackground.style.width = `${percentage}%`;
// }

// function updateProgressBar() {
//     const progressPercentage = ((audio.currentTime / 16) * 100 + 1);
//     progressBar.style.width = `${progressPercentage}%`;

//     if (!audio.paused) {
//         requestAnimationFrame(updateProgressBar);
//     }
// }

// playButton.addEventListener("click", () => {
//     if (audio.paused) {
//         const playDuration = allowedDurations[currentTurn - 1];
//         const endTime = Math.min(audio.duration, playDuration);

//         audio.currentTime = 0;
//         audio.play();
//         playButton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';

//         requestAnimationFrame(updateProgressBar);

//         setTimeout(() => {
//             audio.pause();
//             playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
//         }, endTime * 1000);
//     } else {
//         audio.pause();
//         playButton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
//     }
// });

// skipButton.addEventListener("click", () => {
//     if (currentTurn < allowedDurations.length) {
//         currentTurn++;
//     }

//     updateSeekBarBackground(currentTurn);
// });

// function createMarker(duration) {
//     const marker = document.createElement("div");
//     const percentage = (duration / 16) * 100;

//     marker.style.width = "1px";
//     marker.style.height = "100%";
//     marker.style.position = "absolute";
//     marker.style.left = `${percentage}%`;
//     marker.style.backgroundColor = "#ffffff";

//     return marker;
// }

// const markersContainer = document.querySelector(".seek-bar-markers");
// allowedDurations.forEach(duration => {
//     const marker = createMarker(duration + 0.1);
//     markersContainer.appendChild(marker);
// });

// // Initialize the seek bar background for the first turn
// updateSeekBarBackground(currentTurn);


// GPT:

import './styles/styles.css'

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

