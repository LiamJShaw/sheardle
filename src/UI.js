export function addGuessToBoard(guess, turn) {
    const guessContainer = document.querySelector('.guess-container');
    const guessDiv = guessContainer.children[turn - 1];
    
    // Create the red 'x' icon
    const redXIcon = document.createElement('span');
    redXIcon.textContent = 'x';
    redXIcon.classList.add('red-x-icon');
    
    // Add the red 'x' icon to the guess div
    guessDiv.appendChild(redXIcon);

    // Add the track info text to the guess div
    const guessText = document.createElement('p');
    guessText.textContent = guess;
    guessDiv.appendChild(guessText);
  }
  
  export function addSkippedTurnToBoard(turn) {
    const guessContainer = document.querySelector('.guess-container');
    const guessDiv = guessContainer.children[turn - 1]; // turn - 1 because array index starts from 0
    
    // Create the red 'x' icon
    const redXIcon = document.createElement('span');
    redXIcon.textContent = 'x';
    redXIcon.classList.add('red-x-icon');
  
    // Add the red 'x' icon to the guess div
    guessDiv.appendChild(redXIcon);
  
    // Add the "Skipped turn" text to the guess div
    const skippedTurnText = document.createElement('p');
    skippedTurnText.textContent = "Skipped";
    guessDiv.appendChild(skippedTurnText);
  }
  
  export function clearSearchBox() {
    const searchBox = document.querySelector('.spotify-search');
    searchBox.textContent = '';
  }


// Submit button

export function enableSubmitButton() {
    const submitButton = document.querySelector('.submit');
    submitButton.removeAttribute("disabled");
  }
  
  export function disableSubmitButton() {
    const submitButton = document.querySelector('.submit');
    submitButton.setAttribute("disabled", "");
  }  

// Search results
const resultsContainer = document.getElementById('results-container');
document.addEventListener('click', (event) => {
  // Check if the click target is outside of the .results-container
  if (!event.target.closest('#results-container')) {
    resultsContainer.style.display = 'none';
  }
});
