import axios from "axios";
const weatherURL = "https://api.openweathermap.org/data/2.5";
const currentWeatherUrl = `${weatherURL}/weather`;
const apiKey = "96b88b50cbfa6fd18547dee783273a00";

//weather_URL_TEST = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

export const fetchWeatherByCoords = async (geodata) => {
  if (!geodata?.latitude || !geodata?.longitude) return;

  try {
    const response = await axios.get(currentWeatherUrl, {
      params: {
        lat: geodata.latitude,
        lon: geodata.longitude,
        units: "metric",
        appid: "96b88b50cbfa6fd18547dee783273a00",
      },
    });

    console.log(response);
    return {currentWeather: response.data};
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    throw error;
  }
};
