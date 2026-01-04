const GEOCODING_BASE_URL = import.meta.env.VITE_GEOCODING_BASE_URL;
const WEATHER_BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

export const searchCity = async (city: string) => {
   const response = await fetch(`${GEOCODING_BASE_URL}?name=${encodeURIComponent(city)}&count=1&language=es&format=json`);

   if (!response.ok) {
      throw new Error("Error al buscar la ciudad.");
   }

   const data = await response.json();

   if (!data.results || data.results.length === 0) {
      throw new Error(`No encontramos una ciudad llamada "${city}".`);
   }

   const { latitude, longitude, name, country } = data.results[0];

   return {
      latitude,
      longitude,
      name,
      country,
   };
};

export const getWeather = async (latitude: number, longitude: number) => {
   const response = await fetch(
      `${WEATHER_BASE_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`
   );

   if (!response.ok) {
      throw new Error("Error al obtener la información del clima.");
   }

   const data = await response.json();

   return data;
};
