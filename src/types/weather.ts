export interface DailyForecast {
   date: string;
   maxTemp: number;
   minTemp: number;
   weatherCode: number;
}

export interface CurrentWeather {
   temperature: number;
   windSpeed: number;
   weatherCode: number;
   isDay: boolean;
}

export interface WeatherData {
   city: string;
   country: string;
   current: CurrentWeather;
   daily: DailyForecast[];
}
