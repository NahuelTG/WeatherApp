export interface WeatherUIInfo {
   label: string;
   icon: string;
}

export const getWeatherInfo = (code: number): WeatherUIInfo => {
   if (code === 0) {
      return { label: "Despejado", icon: "Sun" };
   }

   if (code >= 1 && code <= 3) {
      return { label: "Parcialmente nublado", icon: "Cloud" };
   }

   if (code >= 45 && code <= 48) {
      return { label: "Niebla", icon: "CloudFog" };
   }

   if (code >= 51 && code <= 67) {
      return { label: "Lluvia", icon: "CloudRain" };
   }

   if (code >= 71 && code <= 77) {
      return { label: "Nieve", icon: "Snowflake" };
   }

   if (code >= 80 && code <= 82) {
      return { label: "Chubascos", icon: "CloudRain" };
   }

   if (code >= 95 && code <= 99) {
      return { label: "Tormenta", icon: "CloudLightning" };
   }

   return { label: "Desconocido", icon: "Cloud" };
};
