import type { DailyForecast } from "@/types/weather";

interface PronosticsProps {
   daily?: DailyForecast[];
}

export const Pronostics = ({ daily }: PronosticsProps) => {
   const getDayName = (dateString: string, index: number) => {
      if (index === 0) return "Hoy";

      const [year, month, day] = dateString.split("-").map(Number);
      const date = new Date(year, month - 1, day);

      return date.toLocaleDateString("es-ES", { weekday: "short" });
   };

   if (!daily || daily.length === 0) {
      return null;
   }

   return (
      <>
         <section>
            <header>
               <h2>Pronóstico 7 días</h2>
            </header>
            <div>
               {daily.map((day, index) => (
                  <article key={day.date}>
                     <h4>{getDayName(day.date, index)}</h4>
                     <p>Chubascos</p>
                     <div>
                        <p>{Math.round(day.maxTemp)}°</p>
                        <p>Max</p>
                        <p>{Math.round(day.minTemp)}°</p>
                        <p>Min</p>
                     </div>
                  </article>
               ))}
            </div>
         </section>
      </>
   );
};
