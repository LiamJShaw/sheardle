import './styles/styles.css'

import { setupNewGame, importGameState, getCurrentTrack, allowedDurations } from './sheardle';
import { loadGameState } from './localStorage';

import { initUI } from './UI';

import { gameEnd } from './resultsScreen';

import { getCurrentDay, getTodaysTrackID, START_DATE } from './trackSelection';

const gameLoaded = loadGameState();

if (gameLoaded) {
    console.log("Game successfully loaded");

    const todaysTrackID = getTodaysTrackID(START_DATE);

    if (gameLoaded.trackID !== todaysTrackID) {
        console.log("Starting new game due to day change");
        setupNewGame(START_DATE);
        initUI();
    } else {
        importGameState(gameLoaded);
        initUI(gameLoaded);
    }
} else {
    console.log("Starting new game");
    setupNewGame(START_DATE);
    initUI();
}

console.log("Current day is", getCurrentDay(START_DATE), "day(s) past the start date");


// // Test results screen
// const testTrack = getTrackByID("7J1uxwnxfQLu4APicE5Rnj");

// testTrack.then(response => {
//     gameEnd(response);
// })
