import { shareResult } from "./sheardle";

const modal = document.getElementById("resultsModal");

// The below should also take in the gameState?
// The idea being, we need to show if the user was correct or not

export function gameEnd(trackInfo) {

    modal.style.display = "block";

    // Set the song's details
    document.querySelector(".song-title").textContent = trackInfo.name;
    document.querySelector(".song-artist").textContent = trackInfo.artists[0].name;
    document.querySelector(".album-art").src = trackInfo.album.images[0].url;
    document.querySelector(".song-preview").src = trackInfo.preview_url;

    console.log(shareResult());
}



document.querySelector(".share-results-btn").addEventListener('click', function() {
    console.log("Copied results to clipboard", '\n\n', shareResult());

    // Copy to clipboard
    navigator.clipboard.writeText(shareResult());
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}