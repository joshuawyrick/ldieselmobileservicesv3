
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { locations } from '@/lib/data';
import { MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Mobile Diesel Mechanic Service Locations | ${COMPANY_NAME}`,
  description: `${COMPANY_NAME} provides 24/7 mobile diesel mechanic services across ${SERVICE_AREA}, including Paso Robles, San Luis Obispo, and Santa Maria. Find our service areas for emergency roadside assistance and truck repair.`,
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
                src="https://images.unsplash.com/photo-1614729939124-037f0199500c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Diesel service truck on Highway 101 on the Central Coast"
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
                24/7 Mobile Diesel Repair Services Across {SERVICE_AREA}
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
                        {COMPANY_NAME} provides comprehensive mobile diesel repair for heavy-duty trucks throughout San Luis Obispo and Santa Barbara counties. Our strategically positioned mobile units ensure rapid response times for emergency roadside assistance and on-site repairs.
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
        
         <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                 <div className="btn-primary no-hover border-2 border-foreground rounded-2xl shadow-card p-10 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl text-accent-foreground">Need a Roadside Diesel Mechanic Now?</h2>
                    <p className="text-lg text-accent-foreground/90 mt-4">We're available 24/7 for emergency truck repair across {SERVICE_AREA}.</p>
                    <a href={`tel:${PHONE_NUMBER}`} className="inline-block bg-white text-black font-headline text-3xl md:text-4xl py-4 px-8 rounded-full mt-6 border-2 border-foreground">
                        <Phone className='inline-block mr-3' />
                        {PHONE_NUMBER}
                    </a>
                </div>
            </div>
        </section>

    </div>
  );
}
