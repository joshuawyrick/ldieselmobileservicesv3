
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';
import { ArrowLeft, Phone, CheckCircle, Clock, Users, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { notFound } from 'next/navigation';

const service = services.find((s) => s.url === '/mobile-fleet-maintenance');

export async function generateMetadata(): Promise<Metadata> {
  if (!service) {
    return {};
  }

  const title = `Mobile Fleet Maintenance & Repair | On-Site Service | ${COMPANY_NAME}`;
  const description = `Keep your fleet running with our on-site preventive maintenance and repair services in ${SERVICE_AREA}. We come to you to service your trucks, reducing downtime. Call ${PHONE_NUMBER}.`;

  return {
    title,
    description,
    keywords: "mobile fleet maintenance, commercial truck service, on-site fleet repair, preventive maintenance, mobile diesel mechanic, San Luis Obispo, Santa Maria, Paso Robles",
    alternates: {
      canonical: `/services/mobile-fleet-maintenance`,
    },
  };
}

export default function ServiceDetailPage() {
  if (!service) {
    notFound();
  }
  
  const relatedServices = [
      services.find(s => s.url === '/carb-clean-truck-check-testing'),
      services.find(s => s.url === '/mobile-brake-repairs'),
      services.find(s => s.url === '/emergency-roadside-assistance'),
  ].filter(Boolean) as typeof services;

  return (
    <div>
       {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden bg-background flex items-center justify-center text-center text-foreground">
         <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://i.imgur.com/G20E21s.jpeg"
              alt="Mobile fleet maintenance services for commercial trucks"
              className="w-full h-full object-cover"
              fill
              priority
              data-ai-hint="fleet trucks"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white">
            {service.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Reliable, on-site preventive maintenance and repair to maximize uptime for your commercial fleet.
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
              Managing a fleet is complex. Unexpected downtime means lost revenue and logistical headaches. Our mobile fleet maintenance program brings certified diesel mechanics and fully-equipped service trucks directly to your yard on your schedule, reducing downtime and keeping your vehicles on the road and earning.
            </p>
        </div>
        
        {/* What's Included Section */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Our On-Site Fleet Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Preventive Maintenance</h4>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">DOT Inspections</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Oil & Fluid Services</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Brake & Tire Checks</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">CARB Compliance Testing</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">On-Site Minor Repairs</h4>
                </div>
            </div>
        </div>
        
        {/* Benefits of Mobile Fleet Service */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Benefits Of Our Mobile Fleet Program</h2>
            <div className="grid md:grid-cols-2 gap-8 p-6 bg-secondary/50 border-2 border-foreground rounded-2xl shadow-card">
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Reduce Vehicle Downtime</h4>
                    <p className="text-muted-foreground">We service your trucks during their scheduled off-hours, whether it's evenings or weekends, maximizing their time on the road.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Lower Maintenance Costs</h4>
                    <p className="text-muted-foreground">Eliminate the cost and hassle of shuttling vehicles to and from a repair shop. Our preventive approach also catches small issues before they become costly breakdowns.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Customized Service Plans</h4>
                    <p className="text-muted-foreground">We work with you to create a maintenance schedule tailored to your fleet's specific needs, vehicle types, and usage patterns.</p>
                </div>
                <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Streamlined Record Keeping</h4>
                    <p className="text-muted-foreground">Receive detailed digital service records for every vehicle, making it easy to track maintenance history and ensure compliance.</p>
                </div>
            </div>
        </div>

         {/* Why Choose Us */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Your Partner in Fleet Reliability</h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-card text-center">
                    <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Flexible Scheduling</h3>
                    <p className="mt-2 text-muted-foreground text-sm">We work around your schedule, including after-hours and weekends, to minimize disruption.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Dedicated Technicians</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Get consistent service from mechanics who know your fleet's history and specific needs.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Compliance Focused</h3>
                    <p className="mt-2 text-muted-foreground text-sm">We help keep your fleet compliant with all DOT and CARB regulations, including on-site testing.</p>
                </div>
            </div>
        </div>

        {/* FAQ */}
         <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What types of fleets do you service?</AccordionTrigger>
                <AccordionContent>
                  We service a wide variety of commercial fleets, including delivery trucks, construction equipment, agricultural vehicles, semi-trucks, and municipal vehicles. We create custom plans for fleets of any size.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do you handle major repairs found during maintenance?</AccordionTrigger>
                <AccordionContent>
                  If we discover an issue that requires more extensive repair, we will immediately inform you with a detailed diagnosis and a transparent quote. We can perform many major repairs on-site or help coordinate service at a trusted facility if necessary.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What areas do you serve for fleet maintenance?</AccordionTrigger>
                <AccordionContent>
                  Our mobile fleet maintenance program covers all of {SERVICE_AREA}, including dedicated service for businesses in San Luis Obispo, Santa Maria, Paso Robles, and surrounding communities.
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
            <h2 className="text-2xl font-bold">Ready to Optimize Your Fleet?</h2>
            <p className="mt-2">Contact us today to discuss a custom mobile maintenance plan for your business.</p>
            <Button asChild size="lg" className="mt-4 bg-white text-black hover:bg-white/90">
                <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="mr-2 h-5 w-5" /> Get a Quote Today
                </a>
            </Button>
        </div>
      </div>
    </div>
    </div>
  );
}
