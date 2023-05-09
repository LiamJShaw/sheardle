let currentTurn; // Next thing to set up in here once the track is working

let gameTrack = null;
let resolveGameTrackPromise;

const gameTrackPromise = new Promise((resolve) => {
  resolveGameTrackPromise = resolve;
});

export function setGameTrack(track) {
  gameTrack = track;
  resolveGameTrackPromise();
}

export async function getGameTrack() {
  await gameTrackPromise;
  return gameTrack;
}

