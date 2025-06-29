'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

export function LocationMap() {
  const mapUrl = 'https://maps.app.goo.gl/gDJKmVtzQfpqU9HE9';

  return (
    <div className="relative w-full h-full">
      <Link href={mapUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full group">
        <Image
          src="https://placehold.co/1200x800.png"
          alt="Mapa mostrando la ubicación de Confección Estrellita"
          fill={true}
          objectFit="cover"
          className="rounded-lg"
          data-ai-hint="street map"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg transition-colors group-hover:bg-black/50">
          <Button size="lg">
            <MapPin className="mr-2 h-5 w-5" />
            Ver en Google Maps
          </Button>
        </div>
      </Link>
    </div>
  );
}
