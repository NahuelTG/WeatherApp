import { useState } from "react";

import type { WeatherData } from "@/types/weather";

interface SearchCityProps {
   onSearch: (cityName: string) => void;
   weather: WeatherData | null;
}

export const SearchCity = ({ onSearch, weather }: SearchCityProps) => {
   const [inputValue, setInputValue] = useState("");

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

   const formatDate = () => {
      const date = new Date();
      const day = date.getDate();
      const month = date.toLocaleDateString("es-ES", { month: "long" });
      return `${day} ${month}`;
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
            {weather && (
               <div>
                  <h2>{weather.city}</h2>
                  <p>{weather.country}</p>
                  <p>{Math.round(weather.current.temperature)}°</p>
                  <p>Parcialmente nublado</p>
                  <div>
                     <article>
                        <p>Viento</p>
                        <h4>{weather.current.windSpeed} km/h</h4>
                     </article>
                     <article>
                        <p>Fecha</p>
                        <h4>{formatDate()}</h4>
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
