import type { Coordinates } from "@/api/types";
import { useEffect, useState } from "react";

interface UseGeolocationState {
  isLoading: boolean;
  error: string | null;
  coordinates: Coordinates | null;
}

export function useGeolocation() {
  const [locationData, setLocationData] = useState<UseGeolocationState>({
    isLoading: true,
    error: null,
    coordinates: null,
  });

  const getLocation = () => {
    setLocationData((prev) => ({ ...prev, isLoading: true, error: null }));

    if (!navigator.geolocation) {
      setLocationData({
        coordinates: null,
        isLoading: false,
        error: "Geolocation is not supported by your browser",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationData({
          coordinates: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
          isLoading: false,
          error: null,
        });
      },
      (error) => {
        let errorMessage: string;
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage =
              "Location permission denied. You need to grant permission to access your location";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out. Please try again.";
            break;
          default:
            errorMessage =
              "An unknown error occurred while getting your location";
            break;
        }
        setLocationData({
          coordinates: null,
          isLoading: false,
          error: errorMessage,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
    );
  };

  useEffect(() => {
    const fetchLocation = async () => {
      await getLocation();
    };
    fetchLocation();
  }, []);

  return {
    ...locationData,
    getLocation,
  };
}
