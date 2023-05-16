import './styles/styles.css'

// import { 
//         addSkippedTurnToBoard, 
//         addGuessToBoard,
//         enableSubmitButton,
//         disableSubmitButton 
//     } from './UI';

// import { 
//         getNewGameTrack,
//         newGame
//     } from './sheardle';

//     disableSubmitButton();

// You are currently at the point where you have what you need

// The next step is to make sure you are able to get the ID from the track after selecting it from the results
// You'll just need to store this value and pass it into the checkGuess instead of the plain value

// The above seems to be done, but now we need to clean up and organise this code before we go further

// I'm going to add the event listeners here 



// New organisation

import { setupNewGame } from './sheardle';
import { loadGameState } from './localStorage';
import { createMarkers } from './UI';


const gameLoaded = loadGameState();

if (gameLoaded) {
    console.log("Game successfully loaded");

    // Loading new game anyway as I can't be bothered to delete localStorage every time
    setupNewGame();

} else {
    console.log("Starting new game");
    setupNewGame();
}

createMarkers();