import useGeolocation from "../hooks/useGeolocation";
import { useFetchWeather } from "../hooks/useFetchWeather";

export default function Weather() {
  // Geolocation hook
  const {
    loading: geoLoading,
    error: geoError,
    data: geoData,
  } = useGeolocation();

  // Weather data hook
  const {
    data: weatherData,
    error: apiError,
    isLoading: apiLoading,
  } = useFetchWeather(geoData);

  const { currentWeather } = weatherData || {};
  // Loading state
  if (geoLoading || apiLoading) {
    return <p className="text-blue-500 text-lg font-semibold">Loading...</p>;
  }

  else{
  // Geolocation error
  if (geoError) {
    return (
      <p className="text-red-500 text-lg font-semibold">
        Geolocation Error: {geoError.message}
      </p>
    );
  }

  // Weather API error
  if (apiError) {
    return (
      <p className="text-red-500 text-lg font-semibold">
        API Error: {apiError.message}
      </p>
    );
  }

  // If data is missing
  if (!currentWeather) {
    return (
      <p className="text-blue-500 text-lg font-semibold">
        No weather data available. Please try again later.
      </p>
    );
  }

  // Render weather data
  return (
    <div className="bg-gradient-to-b from-blue-400 to-indigo-600 shadow-lg rounded-lg p-6 mt-10 text-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Current Weather for {currentWeather.name}
      </h2>
      <p className="text-lg font-semibold">
        {Math.round(currentWeather.main.temp)}&deg;C
      </p>
      <p className="capitalize">{currentWeather.weather[0].description}</p>
    </div>
  );
  }

}
