
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';
import { ArrowLeft, Phone, CheckCircle, ShieldCheck, Clock, Users, Wrench, AlertTriangle, Tractor } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { notFound } from 'next/navigation';

const service = services.find((s) => s.url === '/mobile-tire-services');

export async function generateMetadata(): Promise<Metadata> {
  if (!service) {
    return {};
  }

  const title = `24/7 Mobile Tire Service for Trucks | ${COMPANY_NAME}`;
  const description = `24/7 mobile tire service for heavy-duty trucks in ${SERVICE_AREA}. Emergency commercial tire repair and replacement on Highway 101. Call ${PHONE_NUMBER} for fast roadside service.`;

  return {
    title,
    description,
    keywords: "mobile tire service, truck tire repair, commercial tire service, 24/7 tire repair, emergency tire service, San Luis Obispo, Santa Maria, Paso Robles, Highway 101",
    alternates: {
      canonical: `/services${service.url}`,
    },
  };
}

export default function ServiceDetailPage() {
  if (!service) {
    notFound();
  }
  
  const relatedServices = [
      services.find(s => s.url === '/emergency-roadside-assistance'),
      services.find(s => s.url === '/mobile-brake-repairs'),
      services.find(s => s.url === '/mobile-fleet-maintenance'),
  ].filter(Boolean) as typeof services;


  return (
    <div>
       {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden bg-background flex items-center justify-center text-center text-foreground">
         <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://placehold.co/1440x400.png"
              alt="Mobile tire service for a heavy-duty truck on the Central Coast"
              className="w-full h-full object-cover"
              fill
              priority
              data-ai-hint="truck tire roadside"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white">
            {service.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Fast, 24/7 on-site tire repair and replacement for commercial trucks across {SERVICE_AREA}.
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
               A flat tire can bring your entire operation to a halt. {COMPANY_NAME} provides 24/7 mobile tire services for semi-trucks, agricultural equipment, and commercial fleets across the Central Coast. Whether you're on Highway 101 near Paso Robles or on a farm in the Santa Maria Valley, we bring the tire shop to you.
            </p>
        </div>
        
        {/* What's Included Section */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Included Mobile Tire Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Emergency Tire Repair</h4>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">New Tire Replacement</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Tire Mounting & Balancing</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Roadside Puncture Repair</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Fleet Tire Checks</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Agricultural & Tractor Tires</h4>
                </div>
            </div>
        </div>
        
        {/* Common Tire Emergencies */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Common Roadside Tire Emergencies We Handle</h2>
            <div className="grid md:grid-cols-2 gap-8 p-6 bg-secondary/50 border-2 border-foreground rounded-2xl shadow-card">
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Highway Tire Blowout</h4>
                    <p className="text-muted-foreground">We provide safe, fast mobile tire changes on busy highways like US-101 and CA-46, including setting up proper traffic safety measures.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Slow Leaks & Punctures</h4>
                    <p className="text-muted-foreground">Don't risk a blowout. We can find and professionally patch punctures on-site in San Luis Obispo or Santa Maria to get you moving safely.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Dual-Tire Issues</h4>
                    <p className="text-muted-foreground">We have the heavy-duty equipment to safely lift and service both inner and outer dual tires on your semi-truck or trailer.</p>
                </div>
                <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Valve Stem & TPMS Leaks</h4>
                    <p className="text-muted-foreground">Our mobile trucks are equipped to replace faulty valve stems and service Tire Pressure Monitoring Systems (TPMS) on commercial vehicles.</p>
                </div>
            </div>
        </div>


         {/* Why Choose Us */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Why Choose Our Mobile Tire Service?</h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-card text-center">
                    <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">24/7 Availability</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Tire issues don't stick to a 9-5 schedule. Our mobile tire service is available 24 hours a day, 7 days a week.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Heavy-Duty Experts</h3>
                    <p className="mt-2 text-muted-foreground text-sm">We specialize in commercial and agricultural tires, using the right equipment for safe and effective service.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Safety is Our Priority</h3>
                    <p className="mt-2 text-muted-foreground text-sm">We use proper safety procedures for all roadside work to protect you, your vehicle, and our technicians.</p>
                </div>
            </div>
        </div>

        {/* FAQ */}
         <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Do you stock commercial truck tires?</AccordionTrigger>
                <AccordionContent>
                  Yes, we stock a wide range of common commercial tire sizes for semi-trucks, trailers, and heavy-duty vehicles. If you need a specific or unusual size, we can source it quickly from our local suppliers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How quickly can you get to me for a tire change on Highway 101?</AccordionTrigger>
                <AccordionContent>
                  We prioritize emergency roadside calls along major routes like Highway 101. Our local dispatch will give you an accurate ETA based on your location, whether you're in Paso Robles, San Luis Obispo, or Santa Maria.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can you repair a punctured semi-truck tire on the roadside?</AccordionTrigger>
                <AccordionContent>
                 Absolutely. For many common punctures, we can perform a safe and durable repair on-site to get you back on the road without needing a full replacement, saving you time and money.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-4">
                <AccordionTrigger>Do you service agricultural tires for tractors and farm equipment?</AccordionTrigger>
                <AccordionContent>
                 Yes, we provide mobile tire services for a wide range of agricultural equipment. We can come directly to your farm or vineyard in areas like the Santa Maria Valley or Paso Robles wine country to repair or replace tractor tires.
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


        <div className="mt-10 p-6 bg-primary/10 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-primary">Flat Tire? Call for Immediate Help.</h2>
            <p className="mt-2 text-muted-foreground">Our 24/7 mobile tire service is ready to respond across the Central Coast.</p>
            <Button asChild size="lg" className="mt-4 btn-primary">
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
