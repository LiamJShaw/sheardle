// Import game state manipulation functions
import { getCurrentTurn, allowedDurations } from './sheardle.js';
import { getTrackByID } from './spotify.js';

// This should be a callback, to avoid co-dependency?
import { updateProgressBar } from './UI.js';

// Required here so that the user can pause and resume
let audio;
let endTime;
let timeoutID;

export async function getGameTrackAudio(trackID) {

    console.log("Track ID:", trackID);

    const track = await getTrackByID(trackID);

    return new Audio(track.preview_url);
};

export async function initAudio(trackID) {
    audio = await getGameTrackAudio(trackID);
    audio.addEventListener("timeupdate", updateProgressBar);
    audio.addEventListener("timeupdate", updateElapsedTime);
}

function updateElapsedTime() {
    // get the current time in seconds
    let currentTime = Math.floor(audio.currentTime);
    
    // convert it to minutes:seconds format
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;

    // pad seconds with leading zero if less than 10
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // get the elapsed-time element and update its text content
    let elapsedTimeElement = document.querySelector(".elapsed-time");
    elapsedTimeElement.textContent = `${minutes}:${seconds}`;
}


export function playAudio() {

    const playDuration = allowedDurations[getCurrentTurn() - 1];
    endTime = playDuration;

    audio.currentTime = 0;

    if (getCurrentTurn() < 7) {
        audio.play();
    }
    

    clearTimeout(timeoutID);
    timeoutID = setTimeout(pauseAudio, endTime * 1000);
}

export function pauseAudio() {
    audio.pause();
    clearTimeout(timeoutID);
}

export function isAudioPaused() {
    return audio.paused;
}

export function getAudioCurrentTime() {
    return audio.currentTime;
}