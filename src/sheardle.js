
import { saveGameState } from "./localStorage";
import { initAudio } from "./audioManager";
import { getAllTrackIDsBySearchQuery } from "./spotify";
import { getTodaysTrackID, getCurrentDay } from './trackSelection';

export const allowedDurations = [1, 2, 4, 7, 11, 16];

let gameState = {
  guesses: [],
  trackID: null,
};

export const getCurrentTurn = () => gameState.guesses.length;
export const getCurrentTrackID = () => gameState.trackID;

export function setupNewGame(startDate) {

  // Curently just pulls the first one. Eventually it will calc it on date.
  const todaysTrackID = getTodaysTrackID(startDate);

  gameState.guesses = [];
  gameState.trackID = todaysTrackID;

  initAudio(todaysTrackID);

  console.log(gameState);
}

export function importGameState(loadedGameState) {
  console.log("Game state loaded:", loadedGameState);
  gameState = loadedGameState;

  console.log("Current turn:", gameState.guesses.length);
  console.log("Current guesses:", gameState.guesses);

  console.log("Imported game state", gameState);

  initAudio(loadedGameState.trackID);
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

export async function saveNewGuessToGameState(guess, correct) {

  gameState.guesses.push({guess, correct});
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

export function shareResults() {

}

export function shareResult() {

  // Convert guesses to emojis
  let gameGuessesExport = "";

  gameState.guesses.forEach(guess => {
      if(guess === null) {
          gameGuessesExport += "⬜ "; // grey circle for skipped guess
      } else if(guess.correct) {
          gameGuessesExport += "🟩 "; // green square for correct guess
      } else {
          gameGuessesExport += "🟥 "; // red square for wrong guess
      }
  })

  // Calculate the number of days passed since the start date
  let daysPassed = getCurrentDay(new Date('2023-05-21'));

  // Compose share string
  let shareString = "Sheardle "
  shareString += '#'
  shareString += daysPassed 
  shareString += ' | '
  shareString += "5/6"
  shareString += "\n\n";
  shareString += gameGuessesExport;

  // Copy to clipboard
  navigator.clipboard.writeText(resultString);

  return shareString;
}
