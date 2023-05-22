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
}

export function playAudio() {

    const playDuration = allowedDurations[getCurrentTurn()];
    endTime = playDuration;

    audio.currentTime = 0;
    audio.play();

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