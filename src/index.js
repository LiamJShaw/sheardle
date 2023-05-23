import './styles/styles.css'

import { setupNewGame, importGameState, getCurrentTrack, allowedDurations } from './sheardle';
import { loadGameState } from './localStorage';

import { initUI } from './UI';

import { gameEnd } from './resultsScreen'; // Autoload win screen on completed day

import { getCurrentDay, getTodaysTrackID } from './trackSelection';

console.log("Current day is", getCurrentDay(), "day(s) past the start date");

const gameLoaded = loadGameState();

if (gameLoaded) {

    const todaysTrackID = getTodaysTrackID();

    if (gameLoaded.trackID !== todaysTrackID) {
        console.log("Starting new game due to day change");
        setupNewGame();
        initUI();
    } else {
        console.log("Game successfully loaded");
        importGameState(gameLoaded);
        initUI(gameLoaded);
    }
} else {
    console.log("Starting new game");
    setupNewGame();
    initUI();
}