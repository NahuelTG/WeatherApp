import { useState } from "react";

import type { WeatherData } from "@/types/weather";

import { getWeatherInfo } from "@/helpers/weather_helper";
import { formatFullDate } from "@/helpers/date";

import Search from "@/assets/icons/search.svg?react";

import styles from "./SearchCity.module.css";

interface SearchCityProps {
   onSearch: (cityName: string) => void;
   weather: WeatherData | null;
   loading: boolean;
   error: string | null;
}

export const SearchCity = ({ onSearch, weather, loading, error }: SearchCityProps) => {
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
                  disabled={loading}
               />
               <button className={styles.button} onClick={handleSearch} disabled={loading}>
                  <Search />
               </button>
            </div>

            {!weather && !loading && !error && (
               <div className={styles.initialMessage}>
                  <p>Puedes comenzar buscando una ubicación</p>
               </div>
            )}

            {loading && (
               <div className={styles.loadingContainer}>
                  <div className={styles.spinner}></div>
                  <p className={styles.loadingText}>Buscando información del clima...</p>
               </div>
            )}

            {error && (
               <div className={styles.errorContainer}>
                  <p className={styles.errorText}>{error}</p>
               </div>
            )}

            {weather && currentWeatherInfo && !loading && (
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
