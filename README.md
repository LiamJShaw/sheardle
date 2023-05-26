# Sheardle

Live demo: https://liamjshaw.github.io/sheardle/

Sheardle is a clone of the music guessing game Heardle. The game is designed around the concept of identifying songs from preview clips retrieved via Spotify's API, rather than the song intros provided by Heardle. Each day, everybody is given the same song, allowing them to compare their results with each other.

## Gameplay

Sheardle provides the player with a snippet of a song each round, extracted from the 30s preview clips available through Spotify's API.

The game uses a debounced Spotify search to provide immediate feedback, emulating the instant fuzzy search provided by Heardle.

## Disclaimer

Sheardle is not affiliated with Heardle or Spotify. It is an independent project using Spotify's public API for track information. We were just dissapointed to lose the official Heardle more than anything!
