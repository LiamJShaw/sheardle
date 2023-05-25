export function saveGameState(guesses) {

    //  Store as trackID for stats?
    // console.log(guesses.trackID);

    localStorage.setItem('gameState', JSON.stringify(guesses));
}

export function loadGameState() {
    return JSON.parse(localStorage.getItem('gameState'));
}

export function setPlayedBefore() {
    localStorage.setItem('playedBefore', JSON.stringify(true));
}

export function IsReturningPlayer() {
    return JSON.parse(localStorage.getItem('playedBefore'));
}