import { notFound } from 'next/navigation';
import { locations, services } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER } from '@/lib/constants';
import { ArrowLeft, Phone, Wrench } from 'lucide-react';
import Image from 'next/image';

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.url.substring(1),
  }));
}

export async function generateMetadata({ params }: { params: { slug:string } }): Promise<Metadata> {
  const location = locations.find((l) => l.url === `/${params.slug}`);
  if (!location) {
    return {};
  }
  
  const cityName = location.name.replace(', CA', '');
  const title = `Mobile Diesel Mechanic in ${location.name} | L Diesel Mobile Services`;
  const description = `24/7 mobile diesel mechanic in ${cityName}, CA. Emergency roadside assistance, on-site truck repairs, fleet maintenance. Fast response. Call ${PHONE_NUMBER}.`;

  return {
    title,
    description,
    keywords: `mobile diesel mechanic ${cityName}, diesel repair ${cityName}, truck repair ${cityName}, emergency diesel service ${cityName}`,
    alternates: {
      canonical: `/locations/${params.slug}`,
    },
  };
}


export default function LocationDetailPage({ params }: { params: { slug: string } }) {
  const location = locations.find((l) => l.url === `/${params.slug}`);

  if (!location) {
    notFound();
  }
  
  const cityName = location.name.replace(', CA', '');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/locations" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Locations
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Mobile Diesel Mechanic in {location.name}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {COMPANY_NAME} provides fast and reliable 24/7 mobile diesel repair services to {cityName} and the surrounding areas.
          {location.description && ` We are familiar with the specific needs of industries in the area, including ${location.description.toLowerCase()}.`}
        </p>
        
        <div className="my-8">
            <Image 
                src="https://placehold.co/800x400.png"
                alt={`Diesel service truck in ${location.name}`}
                data-ai-hint="diesel truck"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
            />
        </div>

        <div className="mt-10 p-6 bg-primary/10 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Services Available in {cityName}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map(service => (
                    <li key={service.title} className="flex items-center">
                        <Wrench className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground">{service.title}</span>
                    </li>
                ))}
            </ul>
        </div>

        <div className="mt-10 text-center">
            <h2 className="text-2xl font-bold text-primary">Stranded in {cityName}?</h2>
            <p className="mt-2 text-muted-foreground">Don't wait. We offer fast response times for emergency roadside assistance.</p>
            <Button asChild size="lg" className="mt-4 bg-accent hover:bg-accent/90">
                <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="mr-2 h-5 w-5" /> Call {PHONE_NUMBER}
                </a>
            </Button>
        </div>
      </div>
    </div>
  );
}
