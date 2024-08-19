import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";

export async function fetchDiscordStatus() {
  try {
    const response = await axios.get(
      "https://api.lanyard.rest/v1/users/948009520850931722",
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
  refreshToken: process.env.SPOTIFY_REFRESH,
});

const getAccessToken = async () => {
  const response = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH as string,
      client_id: process.env.SPOTIFY_CLIENT as string,
      client_secret: process.env.SPOTIFY_SECRET as string,
    }),
  );
  return response.data.access_token;
};

export async function fetchSpotifyPlaying() {
  try {
    const access_token = await getAccessToken();
    api.setAccessToken(access_token);

    const recentTracks = await api.getMyRecentlyPlayedTracks({
      limit: 1,
    });

    const track = recentTracks.body.items[0].track;
    return track;
  } catch (err) {
    console.log("Something went wrong!", err);
  }
}

export async function fetchTime() {
  const time = await axios.get(
    "https://api.sunrise-sunset.org/json?lat=-27.730586&lng=-64.2700297&formatted=0",
  );
  return time;
}

export async function fetchWeather() {
  const weather = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=santiago+del+estero,argentina&appid=${process.env.WEATHER_KEY}&units=metric`,
  );
  return weather;
}
