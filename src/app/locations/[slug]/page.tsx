import { notFound } from 'next/navigation';
import { locations, services } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER } from '@/lib/constants';
import { ArrowLeft, Check, Phone, Wrench } from 'lucide-react';
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
    <div className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
            <Link href="/locations" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Locations
            </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
                <main>
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                    Mobile Diesel Mechanic in {location.name}
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                    {COMPANY_NAME} provides fast and reliable 24/7 mobile diesel repair services to {cityName} and the surrounding areas.
                    {location.description && ` We are familiar with the specific needs of industries in the area, including ${location.description.toLowerCase()}.`}
                    </p>
                    <Image 
                        src="https://placehold.co/800x400.png"
                        alt={`Diesel service truck in ${location.name}`}
                        data-ai-hint="diesel truck"
                        width={800}
                        height={400}
                        className="rounded-lg shadow-card border-2 border-foreground my-8"
                    />

                    <h2 className='text-3xl font-bold font-headline text-primary mt-12 mb-4'>Your On-Site Repair Experts in {cityName}</h2>
                    <p className='text-muted-foreground'>
                        When your truck or heavy equipment breaks down in {cityName}, you need a fast and reliable solution. L Diesel Mobile Services brings the repair shop to you, whether you're on a busy highway like the US-101, at a construction site, or on a farm in the heart of the Central Coast. Our mobile service trucks are fully equipped to handle a wide range of repairs on-site, minimizing your downtime and getting you back to work as quickly as possible.
                    </p>

                    <h2 className='text-3xl font-bold font-headline text-primary mt-12 mb-4'>Serving the Needs of {cityName} Industries</h2>
                    <p className='text-muted-foreground'>
                        We understand the unique demands of the local economy in {cityName}. From the agricultural fields that rely on heavy machinery to the commercial trucks that are the lifeblood of our local businesses, we have the expertise to service all types of diesel vehicles. We are committed to providing professional, high-quality repairs that you can depend on.
                    </p>
                </main>
            </div>

            <aside className="lg:col-span-1 sticky top-24">
                <div className="border-2 border-foreground rounded-2xl shadow-card p-6">
                    <h3 className="text-2xl font-bold font-headline text-primary text-center mb-4">
                        Need a Mechanic in {cityName}?
                    </h3>
                     <div className="bg-accent text-accent-foreground text-center font-headline text-lg uppercase rounded-full py-2 px-4 mb-4">
                        24/7 EMERGENCY SERVICE
                     </div>
                     <Button asChild size="lg" className="w-full btn-primary mb-4 text-lg">
                         <a href={`tel:${PHONE_NUMBER}`}>
                            <Phone className="mr-2 h-5 w-5" /> Call Now
                        </a>
                    </Button>

                    <div className="mt-6 pt-6 border-t border-border/20">
                         <h4 className="text-xl font-bold font-headline text-primary mb-3">Services We Offer</h4>
                         <ul className="space-y-2">
                            {services.slice(0, 5).map(service => (
                                <li key={service.title} className="flex items-start">
                                    <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-muted-foreground">{service.title}</span>
                                </li>
                            ))}
                             <li className="flex items-start">
                                <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">And More...</span>
                            </li>
                         </ul>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border/20">
                        <h4 className="text-xl font-bold font-headline text-primary mb-3">Service Area</h4>
                        <p className="text-muted-foreground">We proudly serve all of {SERVICE_AREA}, providing rapid response to {cityName} and beyond.</p>
                    </div>
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
}
