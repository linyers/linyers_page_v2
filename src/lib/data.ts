import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";

export async function fetchDiscordStatus() {
  try {
    const response = await axios.get(
      "https://api.lanyard.rest/v1/users/948009520850931722"
    );
    const status = response.data.data.discord_status;
    return status;
  } catch (error) {
    return "Error";
  }
}

const api = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT,
  clientSecret: process.env.SPOTIFY_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});

export async function fetchSpotifyPlaying() {
  try {
    const data = await api.clientCredentialsGrant();
    console.log(data);
    api.setAccessToken(data.body.access_token);

    const recentTracks = await api.getMyRecentlyPlayedTracks({
      limit: 1,
    });
    return recentTracks;
  } catch (err) {
    console.log("Something went wrong!", err);
  }
}
