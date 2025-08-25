
import { Button } from '@/components/ui/button';
import { services, valueProps } from '@/lib/data';
import { Check, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';

export const metadata: Metadata = {
  title: '24/7 Mobile Diesel Repair Services | San Luis Obispo & Santa Maria, CA',
  description: `Mobile diesel repair services for heavy-duty trucks: emergency roadside assistance, tire & brake repairs, engine diagnostics. Serving ${SERVICE_AREA} 24/7. Call now!`,
  keywords: 'diesel repair services, mobile mechanic, San Luis Obispo, Santa Maria, Central Coast, heavy-duty truck repair, commercial truck service',
};

const icons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  ShieldCheck: Check,
  Wrench: Check,
  Clock: Check,
  Users: Check,
  Award: Check,
  Truck: Check,
  CircleCheck: Check,
};


export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden bg-background flex items-center justify-center text-center text-foreground">
         <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1617846337253-b248a86737ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Diesel service truck on the Central Coast providing mobile repair"
              className="w-full h-full object-cover"
              fill
              priority
              data-ai-hint="diesel truck road"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white">
            Mobile Diesel Repair Services
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Expert on-site diesel solutions for heavy-duty trucks across San Luis Obispo & Santa Maria
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div
                className={`order-2 ${
                  index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <h2 className="text-3xl font-bold font-headline text-primary">
                  {service.title}
                </h2>
                <p className="mt-4 text-muted-foreground">
                  {service.description}
                </p>
                {service.subServices && (
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">What's Included:</h3>
                    <ul className="space-y-2">
                      {service.subServices.map((sub) => (
                        <li key={sub} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <Button asChild className="mt-6 btn-primary">
                  <Link href={`/services${service.url}`}>Learn More</Link>
                </Button>
              </div>
              <div
                className={`order-1 ${
                  index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                }`}
              >
                <Image
                  src={service.imageUrl}
                  alt={service.alt}
                  data-ai-hint={service.imageHint}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-card border-2 border-foreground"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* Why Us Section */}
        <section id="why-us" className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-headline text-foreground">Why Choose Our Mobile Mechanics?</h2>
                 <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    We are dedicated to providing the fastest, most reliable mobile diesel service for commercial trucks on the Central Coast.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
              {valueProps.slice(0,3).map((prop) => {
                const Icon = icons[prop.icon];
                return (
                  <div key={prop.title} className="text-center">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-3xl">{prop.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {prop.description}
                    </p>
                  </div>
                );
              })}
            </div>
             <div className="btn-primary no-hover border-2 border-foreground rounded-2xl shadow-card p-10 text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-accent-foreground">Need a Mobile Truck Mechanic Now?</h2>
                <p className="text-lg text-accent-foreground/90 mt-4">We're available 24/7 across ${SERVICE_AREA} for emergency truck repair.</p>
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
