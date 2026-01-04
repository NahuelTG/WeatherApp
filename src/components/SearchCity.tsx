import { useState } from "react";
import type { WeatherData } from "@/types/weather";
import { getWeatherInfo } from "@/helpers/weather_helper";
import { formatFullDate } from "@/helpers/date";

interface SearchCityProps {
   onSearch: (cityName: string) => void;
   weather: WeatherData | null;
}

export const SearchCity = ({ onSearch, weather }: SearchCityProps) => {
   const [inputValue, setInputValue] = useState("");

   const currentWeatherInfo = weather ? getWeatherInfo(weather.current.weatherCode) : null;

   const handleSearch = () => {
      if (inputValue.trim()) {
         onSearch(inputValue);
      }
   };

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
         handleSearch();
      }
   };

   return (
      <>
         <section>
            <header>
               <h1>WeatherApp</h1>
            </header>
            <input
               type="text"
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               onKeyDown={handleKeyDown}
               placeholder="Buscar ciudad..."
            />
            <button onClick={handleSearch}>Buscar</button>

            {weather && currentWeatherInfo && (
               <div>
                  <h2>{weather.city}</h2>
                  <p>{weather.country}</p>

                  <currentWeatherInfo.icon />

                  <p>{Math.round(weather.current.temperature)}°</p>
                  <p>{currentWeatherInfo.label}</p>
                  <div>
                     <article>
                        <p>Viento</p>
                        <h4>{weather.current.windSpeed} Km/h</h4>
                     </article>
                     <article>
                        <p>Fecha</p>
                        <h4>{formatFullDate(new Date().toISOString())}</h4>
                     </article>
                  </div>
               </div>
            )}
            <p>Buscador</p>
         </section>
         <section>
            <p>Pronósticos</p>
         </section>
      </>
   );
};
