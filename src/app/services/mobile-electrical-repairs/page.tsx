import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';
import { ArrowLeft, Phone, CheckCircle, Clock, Users, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { notFound } from 'next/navigation';

const service = services.find((s) => s.url === '/mobile-electrical-repairs');

export async function generateMetadata(): Promise<Metadata> {
  if (!service) {
    return {};
  }

  const title = `Mobile Truck Electrical Repair | Battery, Starter, Alternator | ${COMPANY_NAME}`;
  const description = `24/7 mobile truck electrical repair in ${SERVICE_AREA}. We fix batteries, starters, alternators, and wiring issues on-site for heavy-duty trucks. Call ${PHONE_NUMBER}.`;

  return {
    title,
    description,
    keywords: "mobile truck electrical repair, truck battery replacement, starter repair, alternator service, mobile diesel mechanic, San Luis Obispo, Santa Maria",
    alternates: {
      canonical: `/services/mobile-electrical-repairs`,
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
              alt="Mobile electrical repair for a heavy-duty truck"
              className="w-full h-full object-cover"
              fill
              priority
              data-ai-hint="truck wiring"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white">
            {service.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Expert on-site diagnostics and repair for heavy-duty truck batteries, starters, alternators, and wiring.
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
              Electrical problems can be frustrating and difficult to diagnose, often leaving you stranded without warning. Our mobile mechanics are equipped with advanced diagnostic tools to trace and resolve complex electrical issues on your heavy-duty truck, from simple battery replacements to complex wiring faults, anywhere in {SERVICE_AREA}.
            </p>
        </div>
        
        {/* What's Included Section */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Our Mobile Electrical Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Battery Testing & Replacement</h4>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Starter & Solenoid Repair</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Alternator Service & Replacement</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Wiring & Harness Repair</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Lighting System Repair</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Computer Diagnostics</h4>
                </div>
            </div>
        </div>
        
        {/* Common Electrical Problems */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Common Electrical Faults We Fix On-Site</h2>
            <div className="grid md:grid-cols-2 gap-8 p-6 bg-secondary/50 border-2 border-foreground rounded-2xl shadow-card">
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">No-Start Condition</h4>
                    <p className="text-muted-foreground">We test the entire starting circuit—battery, starter, alternator, and connections—to quickly identify and fix the reason your truck won't start.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Dead Batteries or Charging Issues</h4>
                    <p className="text-muted-foreground">Our technicians can diagnose whether you have a bad battery, a failing alternator, or a parasitic draw draining your power.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Flickering or Dead Lights</h4>
                    <p className="text-muted-foreground">We troubleshoot and repair all lighting issues, including headlights, brake lights, and trailer lights, to keep you safe and DOT compliant.</p>
                </div>
                <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Blown Fuses or Faulty Wiring</h4>
                    <p className="text-muted-foreground">We trace short circuits and repair damaged wiring harnesses to resolve persistent electrical problems and prevent potential fire hazards.</p>
                </div>
            </div>
        </div>

         {/* Why Choose Us */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Your Go-To for Mobile Electrical Service</h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-card text-center">
                    <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Fast Emergency Response</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Electrical issues can leave you stranded. We offer 24/7 service to get you back on the road quickly.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Experienced Technicians</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Our mechanics are skilled in complex heavy-duty electrical systems and use advanced diagnostic tools.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Quality Parts & Repairs</h3>
                    <p className="mt-2 text-muted-foreground text-sm">We use high-quality batteries, starters, and components to ensure reliable, long-lasting repairs.</p>
                </div>
            </div>
        </div>

        {/* FAQ */}
         <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>My truck won't start, is it the battery or the starter?</AccordionTrigger>
                <AccordionContent>
                  It could be either, or the alternator. Common signs of a bad starter include a clicking sound when you turn the key. A weak or dead battery might cause slow cranking or no power at all. Our technicians can perform a full diagnostic test on-site to pinpoint the exact cause.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you carry replacement batteries on your trucks?</AccordionTrigger>
                <AccordionContent>
                  Yes, we stock common heavy-duty commercial truck batteries on our service vehicles for immediate on-site replacement. We can get you back up and running without a tow.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can you fix trailer light wiring issues?</AccordionTrigger>
                <AccordionContent>
                 Absolutely. We can diagnose and repair all types of trailer lighting problems, from faulty connections and grounds to damaged wiring, ensuring your rig is safe and legal on the road.
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
            <h2 className="text-2xl font-bold">Electrical Problems? Call Us 24/7.</h2>
            <p className="mt-2">Don't let electrical issues leave you stranded. Call us for immediate mobile assistance.</p>
            <Button asChild size="lg" className="mt-4 bg-white hover:bg-white/90 text-black">
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
