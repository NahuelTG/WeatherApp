import type { DailyForecast } from "@/types/weather";
import { getDayName } from "@/helpers/date";
import { getWeatherInfo } from "@/helpers/weather_helper";

import styles from "./Pronostics.module.css";

interface PronosticsProps {
   daily?: DailyForecast[];
}

export const Pronostics = ({ daily }: PronosticsProps) => {
   if (!daily || daily.length === 0) {
      return null;
   }

   return (
      <section className={styles.container}>
         <header className={styles.header}>
            <h2 className={styles.title}>Pronóstico 7 días</h2>
         </header>

         <div className={styles.list}>
            {daily.map((day, index) => {
               const { label, icon: WeatherIcon } = getWeatherInfo(day.weatherCode);

               return (
                  <article className={styles.card} key={day.date}>
                     <h4 className={styles.day}>{getDayName(day.date, index)}</h4>

                     <div className={styles.icon}>
                        <WeatherIcon />
                     </div>

                     <p className={styles.label}>{label}</p>

                     <div className={styles.temps}>
                        <div>
                           <p className={styles.tempMax}>{Math.round(day.maxTemp)}°</p>
                           <p className={styles.tempLabel}>Max</p>
                        </div>

                        <div>
                           <p className={styles.tempMin}>{Math.round(day.minTemp)}°</p>
                           <p className={styles.tempLabel}>Min</p>
                        </div>
                     </div>
                  </article>
               );
            })}
         </div>
      </section>
   );
};
