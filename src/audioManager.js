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

  // Allow user to skip mid-turn and have the audio keep playing
export function adjustAudioTimeout() {
    const playDuration = allowedDurations[getCurrentTurn()-1];
    endTime = Math.min(audio.duration, audio.currentTime + playDuration);
    console.log("New end time", endTime);

    clearTimeout(timeoutID);
    timeoutID = setTimeout(pauseAudio, (endTime - audio.currentTime) * 1000);
}


export function playAudio() {
    console.log("playAudio called");

    const playDuration = allowedDurations[getCurrentTurn()-1];
    endTime = Math.min(audio.duration, playDuration);
    console.log("End time", endTime);

    audio.currentTime = 0;
    audio.play();

    clearTimeout(timeoutID);
    timeoutID = setTimeout(pauseAudio, endTime * 1000);
}

export function pauseAudio() {
    audio.pause();
    // clearTimeout(timeoutID);
}

export function isAudioPaused() {
    return audio.paused;
}

export function getAudioCurrentTime() {
    return audio.currentTime;
}