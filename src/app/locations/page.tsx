import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { locations } from '@/lib/data';
import { MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICE_AREA } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Service Locations | L Diesel Mobile Services',
  description: 'L Diesel Mobile Services provides mobile diesel repair services across San Luis Obispo County and Santa Barbara County CA. Find our service areas and emergency response times.',
};

export default function LocationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Our Service Area
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We proudly offer 24/7 mobile diesel mechanic services throughout {SERVICE_AREA}. Our strategic location allows for rapid response times to get you back to work quickly.
        </p>
      </div>
      
      <div className="my-8">
        <Image
            src="https://placehold.co/1200x600.png"
            alt={`Map of service area: ${SERVICE_AREA}`}
            data-ai-hint="service area map"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {locations.map((location) => (
          <Link href={`/locations${location.url}`} key={location.name} className="block hover:-translate-y-1 transition-transform duration-300">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                   <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                   <CardTitle className="text-md">{location.name}</CardTitle>
                </div>
                 {location.description && (
                  <CardDescription className="pt-2">{location.description}</CardDescription>
                )}
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
