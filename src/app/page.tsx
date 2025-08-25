
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
  CircleCheck,
  Fuel,
  Siren,
  Car,
  Cog,
  Shield,
  Snowflake,
  Battery,
  Tractor,
  Disc3,
  Wind,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';


const icons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  ShieldCheck,
  Wrench,
  Clock,
  Users,
  Award,
  Truck,
  CircleCheck,
  Siren,
  Car,
  Shield,
  Cog,
  Snowflake,
  Fuel,
  Battery,
  Tractor,
};

const serviceIcons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    '/mobile-tire-services': Tractor,
    '/mobile-brake-repairs': Disc3,
    '/fuel-system-services': Fuel,
    '/mobile-electrical-repairs': Zap,
    '/engine-diagnostics-repair': Cog,
    '/cooling-system-repairs': Snowflake,
    '/aftertreatment-services': Wind,
    '/carb-clean-truck-check-testing': Truck,
}


export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[912px] overflow-hidden -mt-[102px]">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://placehold.co/1440x912.png"
              alt="Diesel mechanic working on truck"
              className="w-full h-full object-cover"
              fill
              priority
              data-ai-hint="diesel truck road"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center gap-8 min-h-screen text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
              24/7 Mobile Diesel Mechanic
              <br />
              {SERVICE_AREA}
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
              Emergency Roadside Assistance & On-Site Heavy-Duty Truck Repair
              <br />
              Serving All Makes and Models on Highway 101 & Across the Central Coast. Call Now for Fast Service.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${PHONE_NUMBER}`} className="btn btn-primary">
                  <Phone className="mr-2 h-5 w-5" /> Call Now For Service
                </a>
                <Link href="/contact" className="btn btn-secondary">
                  Get a Quote
                </Link>
            </div>
          </div>
        </section>

        {/* Services Intro Section */}
        <section id="services-intro" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-24">
                     <h2 className="text-4xl md:text-5xl font-headline text-foreground">24-Hour Emergency Roadside Truck Service</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
                    <Link href="/services/emergency-roadside-assistance" className="block border-2 border-foreground rounded-2xl p-8 text-center shadow-card hover:shadow-[15px_15px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all">
                        <h3 className="text-3xl md:text-4xl">Heavy-Duty Roadside Assistance</h3>
                        <p className="mt-4 text-muted-foreground">Fast response for truck breakdowns on Highway 101 and across the Central Coast.</p>
                         <div className="flex justify-between items-center mt-5 pt-5 border-t border-border/20">
                            <span className="font-headline text-accent uppercase text-lg">Learn More</span>
                            <span>&rarr;</span>
                        </div>
                    </Link>
                     <Link href="/services/engine-diagnostics-repair" className="block border-2 border-foreground rounded-2xl p-8 text-center shadow-card hover:shadow-[15px_15px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all">
                        <h3 className="text-3xl md:text-4xl">On-Site Diesel Mechanic Services</h3>
                        <p className="mt-4 text-muted-foreground">We bring the repair shop to you, saving you time and getting you back on the road, day or night.</p>
                         <div className="flex justify-between items-center mt-5 pt-5 border-t border-border/20">
                            <span className="font-headline text-accent uppercase text-lg">Learn More</span>
                            <span>&rarr;</span>
                        </div>
                    </Link>
                </div>

                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-headline text-foreground">Mobile Truck Repair Services</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
                    {services.slice(1, 9).map((service) => {
                        const Icon = serviceIcons[service.url] || Wrench;
                        return (
                        <Link href={`/services${service.url}`} key={service.title} className="group block border-2 border-foreground rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                            <div className="flex justify-center mb-4">
                                <Icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
                            </div>
                            <h3 className="font-headline text-xl md:text-2xl text-foreground uppercase">{service.title.replace('Mobile', '').replace('Services', '').replace('Repairs', '').trim()}</h3>
                            <p className="text-sm text-muted-foreground mt-2">{service.description.split('.')[0]}.</p>
                        </Link>
                        )
                    })}
                </div>
                <div className="text-center">
                    <Link href="/services" className="btn btn-primary">Explore All Services</Link>
                </div>
            </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
             <div className="bg-accent border-2 border-foreground rounded-2xl shadow-card p-10 text-center max-w-4xl mx-auto mb-24">
                <h2 className="text-4xl md:text-5xl text-accent-foreground">Need a Heavy-Duty Mobile Mechanic Now?</h2>
                <p className="text-lg text-accent-foreground/90 mt-4">Call us 24/7 for immediate mobile diesel repair near you.</p>
                <a href={`tel:${PHONE_NUMBER}`} className="inline-block bg-white text-black font-headline text-3xl md:text-4xl py-4 px-8 rounded-full mt-6 border-2 border-foreground hover:-translate-y-0.5 transition-transform">
                    {PHONE_NUMBER}
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-24">
              {valueProps.map((prop) => {
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
            <div className="text-center">
                 <h2 className="text-3xl md:text-4xl">{COMPANY_NAME}: Your Trusted Partner for Mobile Truck Service</h2>
            </div>
          </div>
        </section>

        {/* Coverage Area Map Section */}
        <section id="coverage" className="py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl">
              Our Central Coast Service Area
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide 24/7 mobile diesel repair services from Paso Robles to Santa Maria, including full coverage of Highway 101 and all major routes in San Luis Obispo and Santa Barbara Counties.
            </p>
            <div className="mt-12">
               <Image 
                src="https://i.imgur.com/8Z5f2Q5.png" 
                alt="Service area map for L Diesel Mobile Services"
                width={1200}
                height={800}
                className="rounded-2xl shadow-card border-2 border-foreground w-full h-auto"
                />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
