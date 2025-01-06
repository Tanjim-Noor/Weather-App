import { useQuery } from "@tanstack/react-query";
import { fetchWeatherByCoords } from "../services/api";

export  function useFetchWeather(geoData) {
  const { data, error, isloading } =  useQuery({
    queryKey: ["weather", geoData],
    queryFn: () => fetchWeatherByCoords(geoData),  

  });
  return {data, error, isloading}
}
