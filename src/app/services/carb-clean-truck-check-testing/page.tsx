import { notFound } from 'next/navigation';
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PHONE_NUMBER } from '@/lib/constants';
import { ArrowLeft, Phone } from 'lucide-react';
import Image from 'next/image';

const service = services.find((s) => s.url === '/carb-clean-truck-check-testing');

export async function generateMetadata(): Promise<Metadata> {
  if (!service) {
    return {};
  }

  const title = `${service.title} | L Diesel Mobile Services`;
  const description = `${service.description} Mobile mechanics serving San Luis Obispo & Santa Maria. Available 24/7. Call ${PHONE_NUMBER} now!`;

  return {
    title,
    description,
    keywords: service.keywords,
    alternates: {
      canonical: `/services${service.url}`,
    },
  };
}

export default function ServiceDetailPage() {
  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Services
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          {service.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {service.description}
        </p>

        <div className="my-8">
            <Image 
                src="https://placehold.co/800x400.png"
                alt={service.title}
                data-ai-hint="emission test"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
            />
        </div>

        <div className="prose max-w-none prose-h2:text-primary prose-h2:uppercase prose-h2:font-headline prose-headings:font-headline prose-headings:uppercase">
            <p>
                At L Diesel Mobile Services, we understand that downtime is costly. That's why we bring our expert {service.title} directly to your location. Our mobile service trucks are fully equipped with advanced diagnostic tools and high-quality parts to perform repairs efficiently and effectively, minimizing your vehicle's time off the road.
            </p>
            <h2>Stay Compliant with California's Clean Truck Check Program</h2>
            <p>
                California's Clean Truck Check program requires regular emissions testing for nearly all heavy-duty vehicles operating in the state. Our mobile service makes it easy to stay compliant without disrupting your schedule. We come to you to perform the required tests, submit the data to CARB, and get you the necessary compliance documentation.
            </p>

             <h3>Services Included:</h3>
             <ul>
                {service.subServices?.map(s => <li key={s}>{s}</li>)}
             </ul>

            <p>
                Whether you're stranded on the US-101, need a repair at your farm, or require scheduled maintenance for your fleet, our certified technicians are ready to help 24/7. We are committed to providing reliable, professional service across San Luis Obispo and Santa Barbara counties.
            </p>
        </div>

        <div className="mt-10 p-6 bg-primary/10 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-primary">Need {service.title} Now?</h2>
            <p className="mt-2 text-muted-foreground">We offer 24/7 emergency service. Call us anytime.</p>
            <Button asChild size="lg" className="mt-4 btn-primary">
                <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="mr-2 h-5 w-5" /> Call for Immediate Help
                </a>
            </Button>
        </div>
      </div>
    </div>
  );
}
