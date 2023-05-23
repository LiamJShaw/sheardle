export function saveGameState(guesses) {

    //  Store as trackID for stats?
    // console.log(guesses.trackID);

    localStorage.setItem('gameState', JSON.stringify(guesses));
}

export function loadGameState() {
    return JSON.parse(localStorage.getItem('gameState'));
}