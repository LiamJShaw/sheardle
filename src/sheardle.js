import { getTrackByID } from "./spotify";
import { getTodaysTrackID } from "./trackSelection";
import { saveGameState } from "./localStorage";
import { initAudio } from './audioManager';

export const allowedDurations = [1, 2, 4, 7, 11, 16];

let gameTrack = null;

let gameState = {
  currentTurn: 1,
  guesses: [],
  trackID: null,
};

export function setupNewGame() {

  // Curently just pulls the first one. Eventually it will calc it on date.
  const todaysTrackID = getTodaysTrackID();

  gameState.currentTurn = 1;
  gameState.guesses = [];
  gameState.trackID = todaysTrackID;
}



let trackReadyResolve;
const trackReady = new Promise((resolve) => {
  trackReadyResolve = resolve;
});

export const fetchNewTrack = async (trackID) => {
    const fetchedTrack = await getTrackByID(trackID);
    gameTrack = fetchedTrack;
    trackReadyResolve(gameTrack);
};

export const getCurrentTrack = () => trackReady;

export const getGameTrackID = async () => {
    const track = await getCurrentTrack();
    return track.id;
};

export function checkGuess(guess, gameTrack) {
    console.log("Guess:", guess);
    console.log("Game track:", gameTrack);
  
    return guess === gameTrack;
}

export function saveNewGuess(guess) {
  gameState.currentTurn++;
  
  gameState.guesses.push(guess);

  saveGameState(gameState);
}

export function skipTurn() {
  gameState.currentTurn++;

  // Save a null guess to represent a skipped turn
  gameState.guesses.push(null);

  saveGameState(gameState);
}

export function getCurrentDay(startDate) {
  // Get the current date
  let currentDate = new Date();

  // Convert both dates to milliseconds
  let startDateTime = new Date(startDate).getTime();
  let currentDateTime = currentDate.getTime();

  // Calculate the difference in milliseconds
  let differenceInTime = currentDateTime - startDateTime;

  // Convert the difference in milliseconds to days
  // 1 day = 24 hours = 1440 minutes = 86400 seconds = 86400000 milliseconds
  let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays;
}



export const getCurrentTurn = () => gameState.currentTurn;

export const moveToNextTurn = () => currentTurn++;

