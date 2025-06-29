'use client';

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

export function LocationMap() {
  // Coordinates for C.C. Don Carlos, Trujillo, Peru
  const position = { lat: -8.1155, lng: -79.0303 };
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
        defaultZoom={17}
        mapId="confeccion-estrellita-map"
        className="w-full h-full"
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        <Marker position={position} title="C.C. Don Carlos" />
      </Map>
    </APIProvider>
  );
}
