export interface Coordinates {
    lat: number;
    lon: number;
}

export interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface WeatherData {
    coord: Coordinates;
    weather: WeatherCondition[];
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    dt: number;
    timezone: number;
    id: number;
    name: string;
    cod: number;

}

export interface ForcastData {
    list: Array<{
        dt: number;
        main: WeatherData['main'];
        weather: WeatherData['weather'];
        wind: WeatherData['wind'];
        sys: WeatherData['sys'];
        dt_txt: string;
    }>;
    city: {
        name: string;
        country: string;
        sunrise: number;
        sunset: number;
    };
}

export interface GeoCodingResponse {
    name: string;
    local_names?: Record<string, string>;
    lat: number;
    lon: number;
    state: string;
    country: string;
}