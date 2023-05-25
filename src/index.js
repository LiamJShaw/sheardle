import './styles/styles.css'

import { setupNewGame, importGameState } from './sheardle';
import { loadGameState, IsReturningPlayer, setPlayedBefore } from './localStorage';

import { initUI } from './UI';

import { getCurrentDay, getTodaysTrackID } from './trackSelection';

import './howToPlay';

console.log("Current day is", getCurrentDay(), "day(s) past the start date");

const gameLoaded = loadGameState();

if (gameLoaded) {

    setPlayedBefore();

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

const returningPlayer = IsReturningPlayer();

if (returningPlayer) {

    const howToPlayModal = document.getElementById('howToPlayModal');
    howToPlayModal.style.display = 'none';

    setPlayedBefore();
}