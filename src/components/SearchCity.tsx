import { useState } from "react";

import type { WeatherData } from "@/types/weather";

import { getWeatherInfo } from "@/helpers/weather_helper";
import { formatFullDate } from "@/helpers/date";

import Search from "@/assets/icons/search.svg?react";

import styles from "./SearchCity.module.css";

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
         <section className={styles.container}>
            <header className={styles.header}>
               <h1 className={styles.title}>
                  Weather<span>App</span>
               </h1>
            </header>

            <div className={styles.search}>
               <input
                  className={styles.input}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Buscar ciudad..."
               />
               <button className={styles.button} onClick={handleSearch}>
                  <Search />
               </button>
            </div>

            {weather && currentWeatherInfo && (
               <div className={styles.current}>
                  <h2 className={styles.city}>{weather.city}</h2>
                  <p className={styles.country}>{weather.country}</p>

                  <div className={styles.weatherIcon}>
                     <currentWeatherInfo.icon />
                  </div>

                  <p className={styles.temp}>{Math.round(weather.current.temperature)}°</p>

                  <p className={styles.label}>{currentWeatherInfo.label}</p>

                  <div className={styles.stats}>
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
         </section>

         <section className={styles.placeholder}>
            <p>Pronósticos</p>
         </section>
      </>
   );
};
