import { getTodaysTrackID } from "./trackSelection";
import { saveGameState } from "./localStorage";
import { initAudio } from "./audioManager";

export const allowedDurations = [1, 2, 4, 7, 11, 16];

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

  initAudio(todaysTrackID);

  console.log("New game state", gameState);
}

export function importGameState(gameState) {
  console.log(gameState);

  // This will be required here once this function is written
  // initAudio(gameState.trackID);
}

export function checkGuess(guessedTrackID, gameTrackID) {
  console.log("Guess:", guessedTrackID);
  console.log("Game track:", gameTrackID);

  return guessedTrackID === gameTrackID;
}

export async function saveNewGuess(guess) {
  console.log("New game state before latest guess", gameState);

  gameState.guesses.push(guess);
  moveToNextTurn();

  await saveGameState(gameState); // Await the saveGameState function

  console.log("New game state after latest guess", gameState);
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

export const getCurrentTurn = () => gameState.currentTurn;
export const getCurrentTrackID = () => gameState.trackID;




