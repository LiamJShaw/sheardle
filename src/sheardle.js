import { getTodaysTrackID } from "./trackSelection";
import { saveGameState } from "./localStorage";
import { initAudio } from "./audioManager";
import { getAllTrackIDsBySearchQuery } from "./spotify";

export const allowedDurations = [1, 2, 4, 7, 11, 16];

let gameState = {
  currentTurn: 1,
  guesses: [],
  trackID: null
};

export const getCurrentTurn = () => gameState.currentTurn;
export const getCurrentTrackID = () => gameState.trackID;

export function setupNewGame() {

  // Curently just pulls the first one. Eventually it will calc it on date.
  const todaysTrackID = getTodaysTrackID();

  gameState.currentTurn = 1;
  gameState.guesses = [];
  gameState.trackID = todaysTrackID;

  initAudio(todaysTrackID);

  console.log("New game state", gameState);
}

export function importGameState(gameState) {
  console.log(gameState);

  // This will be required here once this function is written
  // initAudio(gameState.trackID);
}

export function checkGuess(guessedTrackID, gameTrackID) {
  // console.log("Guess:", guessedTrackID);
  // console.log("Game track:", gameTrackID);

  return guessedTrackID === gameTrackID;

  // if false, run the dupes check
}

export async function checkForSpotifyDupes(searchQuery) {
    // If false, check the user's guess against what should hopefully be Spotify's dupes
    const fetchedIDs = await getAllTrackIDsBySearchQuery(searchQuery);

    // If guessedTrackID is in the array returned, return true
    return fetchedIDs.includes(getCurrentTrackID());
}

export async function saveNewGuessToGameState(guess) {

  gameState.guesses.push(guess);
  incrementCurrentTurnInGameState();

  await saveGameState(gameState);

  console.log("Game state after save:", gameState);
}


export function addSkippedTurnToGameState() {
  // Save a null guess to represent a skipped turn
  gameState.guesses.push(null);

  incrementCurrentTurnInGameState();
}

function incrementCurrentTurnInGameState() {
  gameState.currentTurn++;
  saveGameState(gameState);
}





