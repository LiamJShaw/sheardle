import './styles/styles.css'

import { setupNewGame, importGameState, getCurrentTrack, allowedDurations } from './sheardle';
import { loadGameState } from './localStorage';

import { createMarkers, initUI } from './UI';

import { gameEnd } from './resultsScreen';
// kill the below after testing
import { getTrackByID } from './spotify';

const gameLoaded = loadGameState();

if (gameLoaded) {
    console.log("Game successfully loaded");

    importGameState(gameLoaded);

    // Loading new game anyway as I can't be bothered to delete localStorage every time
    setupNewGame();

} else {
    console.log("Starting new game");
    setupNewGame();
}


// setupNewGame();

// These probably shouldn't be needed?
initUI();
createMarkers(allowedDurations);

// // Test results screen
// const testTrack = getTrackByID("7J1uxwnxfQLu4APicE5Rnj");

// testTrack.then(response => {
//     gameEnd(response);
// })
