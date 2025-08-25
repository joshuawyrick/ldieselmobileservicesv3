
import { notFound } from 'next/navigation';
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER } from '@/lib/constants';
import { ArrowLeft, Phone } from 'lucide-react';
import Image from 'next/image';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.url.substring(1),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((p) => p.url === `/${params.slug}`);
  if (!service) {
    return {};
  }

  const title = `${service.title} | ${COMPANY_NAME}`;
  const description = `${service.description} Mobile heavy-duty mechanics serving San Luis Obispo & Santa Maria. Available 24/7. Call ${PHONE_NUMBER} now!`;

  return {
    title,
    description,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${params.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((p) => p.url === `/${params.slug}`);

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
                src={service.imageUrl || "https://i.imgur.com/kQo4J42.jpeg"}
                alt={`Image for ${service.title} service`}
                data-ai-hint="diesel repair"
                width={800}
                height={400}
                className="rounded-lg shadow-md"
            />
        </div>

        <div className="prose max-w-none prose-h2:text-primary prose-h2:font-headline prose-h2:uppercase prose-h3:text-primary prose-h3:font-headline prose-h3:uppercase prose-strong:text-foreground">
          <h2>On-Site {service.title.replace('Mobile', '').trim()}</h2>
          <p>
            At {COMPANY_NAME}, we understand that downtime is costly for your heavy-duty trucks. That's why we bring our expert {service.title} directly to your location, whether you're on Highway 101 or at a job site. Our mobile service trucks are fully equipped with advanced diagnostic tools and high-quality parts to perform repairs efficiently and effectively, minimizing your vehicle's time off the road.
          </p>
          <p>
            Whether you're stranded with a semi-truck on the US-101, need a repair for agricultural equipment at your farm, or require scheduled maintenance for your commercial fleet, our certified technicians are ready to help 24/7. We are committed to providing reliable, professional heavy-duty truck service across San Luis Obispo and Santa Barbara counties.
          </p>
        </div>

        <div className="mt-10 p-6 btn-primary no-hover text-accent-foreground rounded-lg text-center">
            <h2 className="text-2xl font-bold">Need Emergency {service.title.replace('Mobile', '').replace('Services', '').trim()}?</h2>
            <p className="mt-2">We offer 24/7 emergency service. Call us anytime for immediate help.</p>
            <Button asChild size="lg" className="mt-4 bg-white hover:bg-white/90 text-black">
                <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="mr-2 h-5 w-5" /> Call for Immediate Help
                </a>
            </Button>
        </div>
      </div>
    </div>
  );
}
