// Import game state manipulation functions
import { getCurrentTurn, allowedDurations } from './sheardle.js';
import { getTrackByID } from './spotify.js';
import { updateProgressBar } from './UI.js';

let audio;
let endTime;
let timeoutID;

export async function getGameTrackAudio(trackID) {
    const track = await getTrackByID(trackID);

    return new Audio(track.preview_url);
};

export async function initAudio(trackID) {
    audio = await getGameTrackAudio(trackID);
    audio.addEventListener("timeupdate", updateProgressBar);
}

export function playAudio() {
    const playDuration = allowedDurations[getCurrentTurn()-1];
    endTime = Math.min(audio.duration, playDuration);
    audio.currentTime = 0;
    audio.play();

    clearTimeout(timeoutID);
    timeoutID = setTimeout(pauseAudio, endTime * 1000);
}

export function pauseAudio() {
    audio.pause();
}

export function isAudioPaused() {
    return audio.paused;
}

export function getAudioCurrentTime() {
    return audio.currentTime;
}


// Update audio // Reset audio?
export function updateAudio() {
    audio.currentTime = 0;
}