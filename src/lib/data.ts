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
  redirectUri: process.env.SPOTIFY_REDIRECT,
});

export async function fetchSpotifyPlaying() {
  try {
    api.setRefreshToken(process.env.SPOTIFY_REFRESH);
    const data = await api.refreshAccessToken();
    api.setAccessToken(data.body.access_token);

    const recentTracks = await api.getMyRecentlyPlayedTracks({
      limit: 1,
    });

    const track = recentTracks.body.items[0].track;
    return track;
  } catch (err) {
    console.log("Something went wrong!");
  }
}

export async function fetchTime() {
  const time = await axios.get(
    "https://api.sunrise-sunset.org/json?lat=-27.730586lng=-64.2700297&formatted=0"
  );
  return time;
}
