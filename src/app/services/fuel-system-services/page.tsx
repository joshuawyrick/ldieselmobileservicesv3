import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';
import { ArrowLeft, Phone, CheckCircle, Award, ShieldCheck, Clock, Users, Truck, MapPin, AlertCircle, CalendarDays, Fuel, Wrench, Siren } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { notFound } from 'next/navigation';

const service = services.find((s) => s.url === '/fuel-system-services');

export async function generateMetadata(): Promise<Metadata> {
  if (!service) {
    return {};
  }

  const title = `Diesel Fuel System Service - Fuel Injector & Pump Repair | ${COMPANY_NAME}`;
  const description = `Expert diesel fuel system service and repair. Fix fuel injectors, fuel pumps, contamination issues, and fuel system problems. Mobile service available in ${SERVICE_AREA}. Call ${PHONE_NUMBER}.`;

  return {
    title,
    description,
    keywords: "diesel fuel system, fuel injector repair, fuel pump repair, mobile diesel mechanic, San Luis Obispo, Santa Maria",
    alternates: {
      canonical: `/services/fuel-system-services`,
    },
  };
}

export default function ServiceDetailPage() {
  if (!service) {
    notFound();
  }
  
  const relatedServices = [
      services.find(s => s.url === '/engine-diagnostics-repair'),
      services.find(s => s.url === '/emergency-roadside-assistance'),
      services.find(s => s.url === '/mobile-fleet-maintenance'),
  ].filter(Boolean) as typeof services;


  return (
    <div>
       {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden bg-background flex items-center justify-center text-center text-foreground">
         <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://placehold.co/1440x400.png"
              alt="Diesel fuel system service"
              className="w-full h-full object-cover"
              fill
              priority
              data-ai-hint="fuel tank"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white">
            {service.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Professional mobile repair & maintenance for diesel fuel systems.
          </p>
        </div>
      </section>

    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Services
        </Link>
        <div className="prose max-w-none prose-h2:text-primary prose-h2:uppercase prose-h2:font-headline prose-h3:text-primary prose-h3:uppercase prose-h3:font-headline prose-headings:font-headline prose-headings:uppercase prose-strong:text-foreground">
            <p className="text-xl text-muted-foreground">
              The fuel system is the heart of your diesel engine. Contamination or component failures can cause expensive damage and leave you stranded. Our technicians specialize in diesel fuel system diagnosis, cleaning, and repair to keep your engine running at peak performance.
            </p>
            
            <h2>Common Fuel System Problems We Fix</h2>
        </div>

        <div className="my-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg bg-card">
                <Siren className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold">Performance Symptoms</h3>
                <p className="text-sm text-muted-foreground">Hard starts, loss of power, rough idle, poor MPG, or excessive smoke.</p>
            </div>
             <div className="p-4 border rounded-lg bg-card">
                <Fuel className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold">Fuel Contamination</h3>
                <p className="text-sm text-muted-foreground">Water, dirt, debris, or algae in the fuel tank clogging filters and injectors.</p>
            </div>
             <div className="p-4 border rounded-lg bg-card">
                <Wrench className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold">Component Failures</h3>
                <p className="text-sm text-muted-foreground">Failed injectors, worn-out fuel pumps, fuel line leaks, and sensor issues.</p>
            </div>
        </div>
       
        {/* What's Included Section */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Included Fuel System Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Fuel System Cleaning</h4>
                    <p className="text-xs text-muted-foreground">System flushes, tank cleaning, and line purging.</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Fuel Injector Service</h4>
                    <p className="text-xs text-muted-foreground">Cleaning, testing, calibration, and replacement.</p>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Fuel Pump Service</h4>
                    <p className="text-xs text-muted-foreground">Pressure testing, repair, and replacement of lift and high-pressure pumps.</p>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Contamination Solutions</h4>
                    <p className="text-xs text-muted-foreground">Water removal, tank draining, and system decontamination.</p>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Advanced Diagnostics</h4>
                    <p className="text-xs text-muted-foreground">Pressure tests, injector balance tests, and scan tool diagnostics.</p>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Preventive Care</h4>
                    <p className="text-xs text-muted-foreground">Filter changes, water separator service, and system inspections.</p>
                </div>
            </div>
        </div>


        {/* Why Choose Us */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Why Choose {COMPANY_NAME}?</h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-card text-center">
                    <Truck className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">We Come To You</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Our mobile service minimizes downtime, saving you time and money.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Expert Technicians</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Certified mechanics with specialized knowledge of diesel fuel systems.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">24/7 Emergency Service</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Available around the clock for fuel-related emergencies and breakdowns.</p>
                </div>
            </div>
        </div>

        {/* FAQ */}
         <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What are signs of a bad fuel injector?</AccordionTrigger>
                <AccordionContent>
                  Common signs include a rough idle, engine misfires, poor acceleration, increased fuel consumption, and difficulty starting the engine. You might also notice fuel smells inside or outside the vehicle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How often should I change my diesel fuel filters?</AccordionTrigger>
                <AccordionContent>
                  It's generally recommended to change diesel fuel filters every 10,000 to 25,000 miles, but this can vary based on your vehicle manufacturer's recommendations, your driving conditions, and fuel quality. We recommend checking your owner's manual and consulting with our technicians.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What is fuel contamination and how do I fix it?</AccordionTrigger>
                <AccordionContent>
                 Fuel contamination occurs when water, dirt, debris, or microbial growth (algae) gets into your fuel tank. The fix often involves draining and cleaning the tank, flushing the fuel lines, and replacing all fuel filters. In severe cases, components like injectors and pumps may need to be cleaned or replaced.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-4">
                <AccordionTrigger>Can you perform fuel system repairs on the roadside?</AccordionTrigger>
                <AccordionContent>
                 Yes, many fuel system repairs can be done on-site. We can handle emergency filter changes, bleed air from the system, diagnose no-start issues, and perform temporary repairs to get you to a safe location. More extensive work like tank cleaning or injector replacement is typically done at your yard or shop.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
         </div>
         
         {/* Related Services */}
        {relatedServices.length > 0 && (
            <div className="my-16">
                <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Related Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {relatedServices.map(related => (
                        <Link href={`/services${related.url}`} key={related.url} className="block group">
                            <div className="bg-card p-4 rounded-lg border-2 border-transparent group-hover:border-primary group-hover:-translate-y-1 transition-transform h-full">
                                <h4 className="text-lg font-semibold text-foreground">{related.title}</h4>
                                <p className="text-sm text-muted-foreground mt-1">{related.description.split('.')[0]}.</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )}


        <div className="mt-10 p-6 btn-primary no-hover text-accent-foreground rounded-lg text-center">
            <h2 className="text-2xl font-bold">Need {service.title} Now?</h2>
            <p className="mt-2">We offer 24/7 emergency service. Call us anytime.</p>
            <Button asChild size="lg" className="mt-4 bg-white text-black hover:bg-white/90">
                <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="mr-2 h-5 w-5" /> Call for Immediate Help
                </a>
            </Button>
        </div>
      </div>
    </div>
    </div>
  );
}
