
import { saveGameState } from "./localStorage";
import { initAudio } from "./audioManager";
import { getAllTrackIDsBySearchQuery, getTrackByID } from "./spotify";
import { getTodaysTrackID, getCurrentDay } from './trackSelection';

import ClipboardJS from 'clipboard';

// Initialise clipboard
new ClipboardJS('.share-results-btn', {
  text: function() {
      return shareResult();
  }
});

export const allowedDurations = [1, 2, 4, 7, 11, 16];

let gameState = {
  guesses: [],
  trackID: null,
  won: false
};

export const getCurrentTurn = () => gameState.guesses.length + 1;
export const getCurrentTrackID = () => gameState.trackID;
export const getGuesses = () => gameState.guesses;

export function setupNewGame() {

  const todaysTrackID = getTodaysTrackID();

  gameState.guesses = [];
  gameState.trackID = todaysTrackID;
  gameState.won = false;

  initAudio(todaysTrackID);
}

export function importGameState(loadedGameState) {
  console.log("Game state loaded:", loadedGameState);
  gameState = loadedGameState;

  // console.log("Current turn:", gameState.guesses.length + 1);
  // console.log("Current guesses:", gameState.guesses);

  initAudio(loadedGameState.trackID);
}



export function checkGuess(guessedTrackID, gameTrackID) {
  // console.log("Guess:", guessedTrackID);
  // console.log("Game track:", gameTrackID);

  return guessedTrackID === gameTrackID;
}

export async function checkForSpotifyDupes(searchQuery) {
    // If false, check the user's guess against what should hopefully be Spotify's dupes
    const fetchedIDs = await getAllTrackIDsBySearchQuery(searchQuery);

    console.log("Current track ID:", getCurrentTrackID());
    console.log("Dupe track IDs:", fetchedIDs);

    // If guessedTrackID is in the array returned, return true
    return fetchedIDs.includes(getCurrentTrackID());
}

export async function checkArtist(trackID) {
  let guessedTrack = await getTrackByID(trackID);
  let gameTrack = await getTrackByID(getTodaysTrackID());

  let guessedArtists = guessedTrack.artists.map(artist => artist.name);
  let gameArtists = gameTrack.artists.map(artist => artist.name);

  // Check if any artist in guessedTrack exists in gameTrack
  return guessedArtists.some(artist => gameArtists.includes(artist));
}


export async function saveNewGuessToGameState(guess, status) {

  gameState.guesses.push({guess, status});

  // Save to local storage
  saveGameState(gameState);

  console.log("Game state after save:", gameState);
}

export function addSkippedTurnToGameState() {
  // Save a null guess to represent a skipped turn
  gameState.guesses.push(null);

  // Save to local storage
  saveGameState(gameState);
}

export function shareResult() {

  let gameGuessesExport = "";

  gameState.guesses.forEach(guess => {
      if(guess === null) {
          gameGuessesExport += "⬛ "; // grey circle for skipped guess
        } else if(guess.status === "correct") {
          gameGuessesExport += "🟩 "; // green square for correct guess
        } else if(guess.status === "semicorrect") {
          gameGuessesExport += "🟨 "; // yellow square for correct guess
      } else {
          gameGuessesExport += "🟥 "; // red square for wrong guess
      }
  })

  // Fill with grey emoji plus space if the length is less than 6
  while (gameGuessesExport.length <= 6 * 2) {

    console.log("Export pre-pad", gameGuessesExport);

    gameGuessesExport += "⬛ ";
  }

  // Calculate the number of days passed since the start date
  let daysPassed = getCurrentDay();

  // Compose share string
  let shareString = "Sheardle "
  shareString += '#'
  shareString += daysPassed 
  shareString += ' | '
  shareString += `${gameState.guesses.length}/6` 
  shareString += "\n";
  shareString += gameGuessesExport;
  shareString += "\n\n"
  shareString += window.location 

  return shareString;
}