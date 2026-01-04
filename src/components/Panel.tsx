import { SearchCity } from "./SearchCity";
import { Pronostics } from "./Pronostics";
import { useWeather } from "@/hooks/useWeather";

import styles from "./Panel.module.css";

export const Panel = () => {
   const { weather, loading, error, search } = useWeather();

   return (
      <div className={styles.screen}>
         <div className={styles.glassContainer}>
            <SearchCity onSearch={search} weather={weather} loading={loading} error={error} />
            <Pronostics daily={weather?.daily} />
         </div>
      </div>
   );
};
