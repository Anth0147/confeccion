'use client';

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

export function LocationMap() {
  // Coordinates for Plaza de Armas, Trujillo, Peru as a central point.
  const position = { lat: -8.11194, lng: -79.02889 };
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center rounded-lg">
        <div className="text-muted-foreground text-center p-4">
          <p className="font-semibold">Could not load map.</p>
          <p className="text-sm">
            Google Maps API Key is missing. Please add it to your environment variables as NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.
          </p>
        </div>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        defaultCenter={position}
        defaultZoom={15}
        mapId="confeccion-estrellita-map"
        className="w-full h-full"
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        <Marker position={position} title="CC Don Carlos Location (Approx.)" />
      </Map>
    </APIProvider>
  );
}
