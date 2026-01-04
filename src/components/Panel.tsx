import { SearchCity } from "./SearchCity";
import { Pronostics } from "./Pronostics";

import { useWeather } from "@/hooks/useWeather";

export const Panel = () => {
   const { weather, search } = useWeather();

   return (
      <div>
         <SearchCity onSearch={search} weather={weather} />
         <Pronostics daily={weather?.daily} />
      </div>
   );
};
