import './styles/styles.css'

import { setupNewGame, importGameState } from './sheardle';
import { loadGameState, IsReturningPlayer, setPlayedBefore } from './localStorage';

import { initUI } from './UI';

import { getCurrentDay, getTodaysTrackID } from './trackSelection';

import './howToPlay';
import './createSheardle';

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

// Show the How To Play screen if the user is playing the first time
const returningPlayer = IsReturningPlayer();

console.log("Returning play0r?:", returningPlayer);

if (returningPlayer) {
    const howToPlayModal = document.getElementById('howToPlayModal');
    howToPlayModal.style.display = 'none';
}

// Set the flag so that it doesn't show next time
setPlayedBefore();