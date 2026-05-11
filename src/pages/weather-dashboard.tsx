import CurrentWeather from "@/components/current-weather";
import FavoriteCities from "@/components/favorite-cities";
import HourlyTemperature from "@/components/hourly-temperature";
import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import WeatherDetails from "@/components/weather-details";
import WeatherForecast from "@/components/weather-forecast";
import { useGeolocation } from "@/hooks/use-geolocation";
import {
  useForecastQuery,
  useReverseGeocodeQuery,
  useWeatherQuery,
} from "@/hooks/use-weather";

import { AlertTriangle, MapPin, RefreshCw } from "lucide-react";

const WeatherDashboard = () => {
  const {
    error: locationError,
    coordinates,
    getLocation,
    isLoading: isLocationLoading,
  } = useGeolocation();

  const locationQuery = useReverseGeocodeQuery(coordinates);
  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);

  const handleRefresh = () => {
    getLocation();

    if (coordinates) {
      //reload weather data
      weatherQuery.refetch();
      forecastQuery.refetch();
      locationQuery.refetch();
    }
  };

  if (isLocationLoading) {
    return <WeatherSkeleton />;
  }

  if (locationError) {
    return (
      <Alert variant="destructive" className="max-w-md p-3">
        <AlertTriangle className="h-6 w-6 text-destructive mt-1" />
        <AlertTitle className="text-lg font-bold">Location Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationError}</p>
          <div className="flex justify-end">
            <Button onClick={getLocation} variant="outline" className="w-fit">
              <MapPin className="mr-2 h-4 w-4" />
              Enable Location
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    );
  }

  if (!coordinates) {
    return (
      <Alert variant="destructive" className="max-w-md p-3">
        <AlertTitle className="text-lg font-bold">Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>
            Please enable location access to get the weather data for your
            current location.
          </p>
          <div className="flex justify-end">
            <Button onClick={getLocation} variant="outline" className="w-fit">
              <MapPin className="mr-2 h-4 w-4" />
              Enable Location
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    );
  }

  const locationName = locationQuery.data?.[0];

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant="destructive" className="max-w-md p-3">
        <AlertTriangle className="h-6 w-6 text-destructive mt-1" />
        <AlertTitle className="text-lg font-bold">Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Failed to fetch weather data. Please try again.</p>
          <div className="flex justify-end">
            <Button onClick={handleRefresh} variant="outline" className="w-fit">
              <RefreshCw className="mr-2 h-4 w-4" />
              Retry
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    );
  }

  if (!weatherQuery.data || !forecastQuery.data) {
    return <WeatherSkeleton />;
  }

  return (
    <div className="space-y-4">
      {/* Favorite Cities List */}

      <FavoriteCities />

      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant="outline"
          size="icon"
          onClick={handleRefresh}
          disabled={isLocationLoading}
        >
          <RefreshCw
            className={`h-4 w-4 ${weatherQuery.isFetching ? "animate-spin" : ""}`}
          />
        </Button>
      </div>

      {/* Current and Hourly Weather Information */}
      <div className="grid gap-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Current Weather */}
          <CurrentWeather
            data={weatherQuery.data}
            locationName={locationName}
          />
          {/* Hourly Temperature */}
          <HourlyTemperature data={forecastQuery.data} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          {/* Weather Details */}
          <WeatherDetails data={weatherQuery.data} />
          {/* 5 days Forecast */}
          <WeatherForecast data={forecastQuery.data} />
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
