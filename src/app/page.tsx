import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services, valueProps } from '@/lib/data';
import {
  ShieldCheck,
  Wrench,
  Clock,
  Users,
  Award,
  Truck,
  Phone,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';

const icons = {
  ShieldCheck,
  Wrench,
  Clock,
  Users,
  Award,
  Truck,
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary tracking-tight">
              {COMPANY_NAME}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-foreground max-w-3xl mx-auto">
              24/7 Mobile Diesel Mechanic for {SERVICE_AREA}
            </p>
            <p className="mt-2 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Emergency Roadside Assistance, On-Site Truck Repair & Fleet Maintenance
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={`tel:${PHONE_NUMBER}`}>
                  <Phone className="mr-2 h-5 w-5" /> Emergency Service
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Value Propositions Section */}
        <section id="why-us" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-headline text-primary">
                Your Reliable Partner on the Road
              </h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                We provide fast, professional, and reliable mobile diesel services to keep you moving.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valueProps.map((prop) => {
                const Icon = icons[prop.icon];
                return (
                  <div key={prop.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{prop.title}</h3>
                      <p className="mt-1 text-muted-foreground">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-headline text-primary">
                Comprehensive Diesel Repair Services
              </h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                From emergency repairs to routine maintenance, we have you covered.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {services.slice(0, 10).map((service) => (
                <Link href={`/services${service.url}`} key={service.title}>
                  <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mx-auto mb-4">
                         <Wrench className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-md font-semibold">{service.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
             <div className="text-center mt-12">
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Company Background Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-headline text-primary">
                  Local Experts for the Central Coast
                </h2>
                <p className="mt-4 text-muted-foreground">
                  L Diesel Mobile Services was founded to provide top-tier, on-site diesel mechanic services to the vital industries of California's Central Coast. We understand the importance of keeping your agricultural equipment, transport trucks, and commercial fleets running smoothly.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Our team of certified mechanics is equipped with state-of-the-art diagnostic tools and a commitment to quality service, available 24/7 to handle any emergency.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/about">More About Us</Link>
                </Button>
              </div>
              <div>
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Diesel truck repair"
                  data-ai-hint="diesel truck"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Area Map Section */}
        <section id="coverage" className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline text-primary">
              Serving {SERVICE_AREA}
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              We provide rapid response across the Central Coast, including key highways like US-101, CA-46, and CA-1.
            </p>
            <div className="mt-8">
               <Image
                  src="https://placehold.co/1200x600.png"
                  alt="Service area map for San Luis Obispo and Santa Barbara counties"
                  data-ai-hint="service area map"
                  width={1200}
                  height={600}
                  className="rounded-lg shadow-lg mx-auto"
                />
            </div>
            <Button asChild size="lg" className="mt-8">
              <Link href="/locations">
                <MapPin className="mr-2 h-5 w-5" /> View Service Locations
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}