export function saveGameState(guesses) {
    localStorage.setItem('gameState', JSON.stringify(guesses));
}

export function loadGameState() {
    return JSON.parse(localStorage.getItem('gameState'));
}