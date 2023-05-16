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
    const playDuration = allowedDurations[getCurrentTurn()];
    endTime = Math.min(audio.duration, playDuration);
    const remainingTime = (endTime - getAudioCurrentTime()) * 1000;

    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
        pauseAudio();
        // changePlayButtonIconToPlay();
      }, remainingTime);
}

export function isAudioPaused() {
    return audio.paused;
}

export function getAudioCurrentTime() {
    return audio.currentTime;
}