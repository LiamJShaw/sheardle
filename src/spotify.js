import SpotifyTokenManager from './spotifyTokenManager.js';

const clientId = "74ac949ca587402484dcef1408b4d7f3";
const clientSecret = "313a2c15fc844ca5bc22755572874ee7";

// const clientId = process.env.SPOTIFY_CLIENT_ID;
// const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const tokenManager = new SpotifyTokenManager(clientId, clientSecret);

export async function searchTrack(searchTerm, market = 'GB') {

    console.log("Starting Spotify search...");

    // Search for track first. If no results, search artist? Both anyway?

    const accessToken = await tokenManager.getAccessToken();

    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    async function search(searchTerm) {
        const params = new URLSearchParams({
            q: searchTerm,
            type: 'track',
            limit: 10,
            market
        });

        const response = await fetch(`https://api.spotify.com/v1/search?${params}`, {
            headers: headers,
        });

        if (response.status === 200) {
            const data = await response.json();
            console.log(data.tracks.items);
            return data.tracks.items;
        }

        console.log(response);

        return [];
    }

    return await search(searchTerm);
}