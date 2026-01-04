import { useState, useCallback } from "react";

import { searchCity, getWeather } from "@/api/openMeteo";
import type { WeatherData, CurrentWeather, DailyForecast } from "@/types/weather";

interface UseWeatherState {
   weather: WeatherData | null;
   loading: boolean;
   error: string | null;
}

export const useWeather = () => {
   const [state, setState] = useState<UseWeatherState>({
      weather: null,
      loading: false,
      error: null,
   });

   const search = useCallback(async (cityName: string) => {
      if (!cityName.trim()) return;

      setState({
         weather: null,
         loading: true,
         error: null,
      });

      try {
         const city = await searchCity(cityName);

         const weatherResponse = await getWeather(city.latitude, city.longitude);

         const current: CurrentWeather = {
            temperature: weatherResponse.current_weather.temperature,
            windSpeed: weatherResponse.current_weather.windspeed,
            weatherCode: weatherResponse.current_weather.weathercode,
            isDay: weatherResponse.current_weather.is_day === 1,
         };

         const daily: DailyForecast[] = weatherResponse.daily.time.map((date: string, index: number) => ({
            date,
            maxTemp: weatherResponse.daily.temperature_2m_max[index],
            minTemp: weatherResponse.daily.temperature_2m_min[index],
            weatherCode: weatherResponse.daily.weathercode[index],
         }));

         const weatherData: WeatherData = {
            city: city.name,
            country: city.country,
            current,
            daily,
         };

         setState({
            weather: weatherData,
            loading: false,
            error: null,
         });
      } catch (err: unknown) {
         const errorMessage = err instanceof Error ? err.message : "Ocurrió un error al obtener el clima.";
         console.log(errorMessage);
      }
   }, []);

   return {
      weather: state.weather,
      loading: state.loading,
      error: state.error,
      search,
   };
};
