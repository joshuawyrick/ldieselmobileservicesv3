
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';
import { ArrowLeft, Phone, CheckCircle, Clock, Users, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { notFound } from 'next/navigation';

const service = services.find((s) => s.url === '/hydraulic-suspension-repairs');

export async function generateMetadata(): Promise<Metadata> {
  if (!service) {
    return {};
  }

  const title = `Mobile Hydraulic & Suspension Repair | Trucks & Equipment | ${COMPANY_NAME}`;
  const description = `On-site hydraulic hose repair and air suspension service for heavy-duty trucks and agricultural equipment in ${SERVICE_AREA}. 24/7 mobile mechanic. Call ${PHONE_NUMBER}.`;

  return {
    title,
    description,
    keywords: "mobile hydraulic repair, truck suspension repair, air suspension service, hydraulic hose replacement, mobile diesel mechanic, San Luis Obispo, Santa Maria, Paso Robles",
    alternates: {
      canonical: `/services/hydraulic-suspension-repairs`,
    },
  };
}

export default function ServiceDetailPage() {
  if (!service) {
    notFound();
  }
  
  const relatedServices = [
      services.find(s => s.url === '/mobile-brake-repairs'),
      services.find(s => s.url === '/mobile-fleet-maintenance'),
      services.find(s => s.url === '/emergency-roadside-assistance'),
  ].filter(Boolean) as typeof services;

  return (
    <div>
       {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden bg-background flex items-center justify-center text-center text-foreground">
         <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1601288427218-3551523a5951?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mobile hydraulic and suspension repair"
              className="w-full h-full object-cover"
              fill
              priority
              data-ai-hint="truck suspension"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white">
            {service.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            On-site service for hydraulic systems and air suspension on heavy-duty trucks, trailers, and agricultural equipment.
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
              A failed hydraulic line or a faulty suspension can bring your workday to a sudden stop. We provide specialized mobile service for the complex hydraulic and air suspension systems found on today's commercial trucks and agricultural equipment. From on-site hose replacement to air leak diagnostics, we get you back to work.
            </p>
        </div>
        
        {/* What's Included Section */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Included Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Hydraulic Hose Repair & Replacement</h4>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Air Suspension Diagnostics</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Air Bag Replacement</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Leveling Valve Service</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Leaf Spring & Shocks</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Hydraulic System Troubleshooting</h4>
                </div>
            </div>
        </div>
        
        {/* Common Issues We Address */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Common Hydraulic & Suspension Faults</h2>
            <div className="grid md:grid-cols-2 gap-8 p-6 bg-secondary/50 border-2 border-foreground rounded-2xl shadow-card">
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Blown Hydraulic Hoses</h4>
                    <p className="text-muted-foreground">A common failure point on heavy equipment. We can fabricate and replace hydraulic hoses on-site to get your machinery running again.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Leaking Air Suspension Bags</h4>
                    <p className="text-muted-foreground">A leaking air bag can cause an uneven ride and put stress on other components. We diagnose leaks and replace air bags for all truck and trailer models.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Malfunctioning Leveling Valves</h4>
                    <p className="text-muted-foreground">If your truck or trailer isn't sitting level, it could be a bad leveling valve. We can adjust or replace them to ensure proper ride height.</p>
                </div>
                <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Broken Leaf Springs</h4>
                    <p className="text-muted-foreground">A broken leaf spring is a serious safety issue. Our mobile service can handle on-site replacement to make your truck safe for the road.</p>
                </div>
            </div>
        </div>

         {/* Why Choose Us */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Your Mobile Repair Specialists</h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-card text-center">
                    <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">24/7 Availability</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Hydraulic and suspension failures can happen anytime. We're ready to respond day or night.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Agricultural & Commercial Expertise</h3>
                    <p className="mt-2 text-muted-foreground text-sm">We service both heavy-duty trucks and a wide range of farm equipment used in the Central Coast.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Focus on Safety & Reliability</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Properly functioning suspension is critical for safety. We ensure all repairs meet the highest standards.</p>
                </div>
            </div>
        </div>

        {/* FAQ */}
         <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>My truck is leaning to one side. Can you fix it?</AccordionTrigger>
                <AccordionContent>
                  Yes, this is a common sign of an air suspension problem, such as a leaking air bag or a faulty leveling valve. Our mobile technicians can diagnose the issue at your location and perform the necessary repairs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you make hydraulic hoses on-site?</AccordionTrigger>
                <AccordionContent>
                  Yes, our service trucks are equipped to fabricate many common types of hydraulic hoses on-site, which is especially useful for agricultural and construction equipment repairs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What are signs of a bad suspension?</AccordionTrigger>
                <AccordionContent>
                 Beyond a visible lean, signs of a bad suspension include an unusually bouncy or rough ride, the truck pulling to one side, or uneven tire wear. If you notice any of these, it's a good idea to have your system inspected.
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
            <h2 className="text-2xl font-bold">Need On-Site Hydraulic or Suspension Help?</h2>
            <p className="mt-2">Call us now for fast mobile service anywhere on the Central Coast.</p>
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
