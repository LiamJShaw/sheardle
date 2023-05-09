import { getTrackByID, searchTrack } from "./spotify"
import { setGameTrack, getGameTrack } from "./gameState";

import { trackSelection } from "./trackSelection";

let gameTrack = null;
let currentTurn = 1; // Set in new game once all set up

const allowedDurations = [1, 2, 4, 7, 11, 16];

const trackReady = new Promise((resolve) => {
    const interval = setInterval(() => {
      if (gameTrack !== null) {
        clearInterval(interval);
        resolve(gameTrack);
      }
    }, 100);
});

export const getCurrentTrack = () => trackReady;


export const fetchNewTrack = async () => {

    // Run the function in trackSelection that returns the ID for that day
    const trackID = trackSelection[0];
    
    // Use Spotify API to fetch a new track
    const fetchedTrack = await getTrackByID(trackID);
    gameTrack = fetchedTrack;
  };

export function getCurrentTurn() {
    return currentTurn;
}

export function moveToNextTurn() {
    currentTurn++;
}

export function getAllowedDurations() {
    return allowedDurations;
}

export function checkGuess(guess, gameTrack) {

    console.log("Guess:", guess);
    console.log("Game track:", gameTrack);

    return guess === gameTrack;
}

// Newest organisation below

export const handleSubmit = async () => {
    const gameTrack = await getGameTrack();
    const guessResult = checkGuess(selectedTrackId, gameTrack.id);

    console.log("Guess is ", guessResult);
  
    addGuessToBoard(searchInput.value, getCurrentTurn());
    moveToNextTurn();
  };
  

