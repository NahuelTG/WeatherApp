import type { DailyForecast } from "@/types/weather";
import { getDayName } from "@/helpers/date";
import { getWeatherInfo } from "@/helpers/weather_helper";

interface PronosticsProps {
   daily?: DailyForecast[];
}

export const Pronostics = ({ daily }: PronosticsProps) => {
   if (!daily || daily.length === 0) {
      return null;
   }

   return (
      <section>
         <header>
            <h2>Pronóstico 7 días</h2>
         </header>

         <div>
            {daily.map((day, index) => {
               const { label, icon: WeatherIcon } = getWeatherInfo(day.weatherCode);

               return (
                  <article key={day.date}>
                     <h4>{getDayName(day.date, index)}</h4>

                     <WeatherIcon />

                     <p>{label}</p>
                     <div>
                        <p>{Math.round(day.maxTemp)}°</p>
                        <p>Max</p>
                        <p>{Math.round(day.minTemp)}°</p>
                        <p>Min</p>
                     </div>
                  </article>
               );
            })}
         </div>
      </section>
   );
};
