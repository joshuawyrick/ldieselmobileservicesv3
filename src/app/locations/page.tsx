import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { locations } from '@/lib/data';
import { MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Service Locations | L Diesel Mobile Services',
  description: `L Diesel Mobile Services provides mobile diesel repair services across ${SERVICE_AREA}. Find our service areas and emergency response times.`,
};

export default function LocationsPage() {
    const sloCountyLocations = locations.filter(l => l.county === 'San Luis Obispo');
    const sbCountyLocations = locations.filter(l => l.county === 'Santa Barbara');

  return (
    <div>
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden bg-background flex items-center justify-center text-center text-foreground">
            <div className="absolute inset-0 w-full h-full">
            <Image
                src="https://placehold.co/1440x400.png"
                alt="Diesel service truck on the Central Coast"
                className="w-full h-full object-cover"
                fill
                priority
                data-ai-hint="california coast highway"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white">
                Service Locations
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
                Mobile Diesel Repair Services Across {SERVICE_AREA}
            </p>
            </div>
        </section>

        {/* Locations Section */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                 <div className="text-center max-w-4xl mx-auto mb-16">
                     <h2 className="text-4xl md:text-5xl font-headline text-foreground">
                        Serving the Entire Central Coast
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {COMPANY_NAME} provides comprehensive mobile diesel repair services throughout San Luis Obispo and Santa Barbara counties. Our strategically positioned mobile units ensure rapid response times for emergency roadside assistance and on-site repairs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* San Luis Obispo County */}
                    <div className="bg-secondary/50 p-8 rounded-2xl border-2 border-foreground">
                        <h3 className="text-3xl font-headline text-primary mb-6 text-center">San Luis Obispo County</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {sloCountyLocations.map((location) => (
                                <Link href={`/locations${location.url}`} key={location.name} className="block group">
                                    <div className="bg-card p-4 rounded-lg border-2 border-transparent group-hover:border-primary group-hover:-translate-y-1 transition-transform">
                                        <div className="flex items-center space-x-3">
                                            <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                                            <h4 className="text-lg font-semibold">{location.name.replace(', CA', '')}</h4>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Santa Barbara County */}
                     <div className="bg-secondary/50 p-8 rounded-2xl border-2 border-foreground">
                        <h3 className="text-3xl font-headline text-primary mb-6 text-center">Santa Barbara County</h3>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {sbCountyLocations.map((location) => (
                               <Link href={`/locations${location.url}`} key={location.name} className="block group">
                                    <div className="bg-card p-4 rounded-lg border-2 border-transparent group-hover:border-primary group-hover:-translate-y-1 transition-transform">
                                        <div className="flex items-center space-x-3">
                                            <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                                            <h4 className="text-lg font-semibold">{location.name.replace(', CA', '')}</h4>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Map Section */}
        <section id="coverage" className="py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-headline text-foreground">
              Full Coverage Area
            </h2>
            <div className="mt-12">
               <Image
                  src="https://placehold.co/1200x600.png"
                  alt={`Map of service area: ${SERVICE_AREA}`}
                  data-ai-hint="service area map"
                  width={1200}
                  height={600}
                  className="rounded-2xl shadow-card border-2 border-foreground mx-auto"
                />
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                    <h3 className="text-5xl font-headline text-accent">~45 min</h3>
                    <p className="mt-2 text-muted-foreground text-lg">Average Response Time</p>
                </div>
                 <div className="text-center">
                    <h3 className="text-5xl font-headline text-accent">24/7</h3>
                    <p className="mt-2 text-muted-foreground text-lg">Emergency Service</p>
                </div>
                 <div className="text-center">
                    <h3 className="text-5xl font-headline text-accent">2 Counties</h3>
                    <p className="mt-2 text-muted-foreground text-lg">Covered</p>
                </div>
            </div>
          </div>
        </section>
        
         <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                 <div className="bg-accent border-2 border-foreground rounded-2xl shadow-card p-10 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl text-accent-foreground">Need a Mechanic Now?</h2>
                    <p className="text-lg text-accent-foreground/90 mt-4">We're available 24/7 across {SERVICE_AREA}.</p>
                    <a href={`tel:${PHONE_NUMBER}`} className="inline-block bg-white text-black font-headline text-3xl md:text-4xl py-4 px-8 rounded-full mt-6 border-2 border-foreground hover:-translate-y-0.5 transition-transform">
                        <Phone className='inline-block mr-3' />
                        {PHONE_NUMBER}
                    </a>
                </div>
            </div>
        </section>

    </div>
  );
}
