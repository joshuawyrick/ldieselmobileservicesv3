
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';
import { ArrowLeft, Phone, CheckCircle, Clock, Users, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { notFound } from 'next/navigation';

const service = services.find((s) => s.url === '/engine-diagnostics-repair');

export async function generateMetadata(): Promise<Metadata> {
  if (!service) {
    return {};
  }

  const title = `Mobile Diesel Engine Repair & Diagnostics | ${COMPANY_NAME}`;
  const description = `24/7 mobile diesel engine diagnostics and repair in ${SERVICE_AREA}. Check engine light? Loss of power? We come to you for expert heavy-duty engine service. Call ${PHONE_NUMBER}.`;

  return {
    title,
    description,
    keywords: "mobile diesel engine repair, engine diagnostics, check engine light, mobile diesel mechanic, San Luis Obispo, Santa Maria, Paso Robles, heavy-duty truck repair",
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
      services.find(s => s.url === '/aftertreatment-services'),
      services.find(s => s.url === '/fuel-system-services'),
      services.find(s => s.url === '/emergency-roadside-assistance'),
  ].filter(Boolean) as typeof services;

  return (
    <div>
       {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden bg-background flex items-center justify-center text-center text-foreground">
         <div className="absolute inset-0 w-full h-full">
            <Image
              src="/diesel-engine-diagnostics-paso-robles-ca.png"
              alt="Mobile diesel engine diagnostics and repair"
              className="w-full h-full object-cover"
              fill
              priority
              data-ai-hint="diesel engine"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white">
            {service.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Advanced on-site diagnostics and expert repair for all major heavy-duty diesel engines.
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
              Your engine is the powerhouse of your operation. When a check engine light comes on or you experience performance issues, you need fast, accurate diagnostics. Our mobile mechanics use OEM-level software to pinpoint the exact cause of any engine problem, providing expert on-site repairs across {SERVICE_AREA} to get you back to full power.
            </p>
        </div>
        
        {/* What's Included Section */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Our On-Site Engine Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Check Engine Light Diagnostics</h4>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Performance Troubleshooting</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Component Repair & Replacement</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Forced DPF Regeneration</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Fuel System Diagnostics</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">In-frame & Out-of-Frame Overhauls</h4>
                </div>
            </div>
        </div>
        
        {/* Common Engine Problems */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Common Engine Problems We Diagnose & Fix</h2>
            <div className="grid md:grid-cols-2 gap-8 p-6 bg-card border-2 border-foreground rounded-2xl shadow-card">
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Loss of Power or Poor Performance</h4>
                    <p className="text-muted-foreground">We diagnose issues from clogged fuel filters and faulty injectors to turbocharger problems that cause sluggish performance.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Active Check Engine Light</h4>
                    <p className="text-muted-foreground">Don't ignore the light. We read the codes, interpret the data, and find the root cause to perform an accurate repair.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Excessive Smoke or Emissions</h4>
                    <p className="text-muted-foreground">Whether it's black, white, or blue smoke, we can diagnose the underlying issue, from injector problems to internal engine wear.</p>
                </div>
                <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Hard Starting or No-Start</h4>
                    <p className="text-muted-foreground">We troubleshoot the fuel, air, and electrical systems to find out why your engine won't start and provide the right fix on-site.</p>
                </div>
            </div>
        </div>

         {/* Why Choose Us */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Why Trust Us With Your Engine?</h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-card text-center">
                    <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Fast, Accurate Diagnostics</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Our advanced software saves time by quickly identifying the true source of engine problems.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Certified Diesel Technicians</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Our mechanics have extensive experience with Cummins, Detroit, CAT, Paccar, and other major engines.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">24/7 Emergency Service</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Engine trouble can happen at any time. We're always available to get you back up and running.</p>
                </div>
            </div>
        </div>

        {/* FAQ */}
         <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What does it mean if my check engine light is flashing?</AccordionTrigger>
                <AccordionContent>
                  A flashing check engine light indicates a serious misfire or other critical problem that could damage your catalytic converter or engine. You should pull over safely and shut off the engine as soon as possible, then call for professional diagnostics.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can you perform engine overhauls on-site?</AccordionTrigger>
                <AccordionContent>
                  We can perform many major engine repairs, including some in-frame overhaul tasks, at your location. For more extensive out-of-frame overhauls that require removing the engine, we can help coordinate service with a trusted local shop.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you work on agricultural equipment engines?</AccordionTrigger>
                <AccordionContent>
                 Yes, we have extensive experience servicing diesel engines in a wide range of agricultural equipment, including tractors, harvesters, and irrigation pumps, common in the Santa Maria and Paso Robles areas.
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

        <div className="mt-10 p-6 btn-primary no-hover rounded-lg text-center">
            <h2 className="text-2xl font-bold text-accent-foreground">Engine Trouble? We Come To You.</h2>
            <p className="mt-2 text-accent-foreground">Call now for 24/7 mobile engine diagnostics and repair.</p>
            <Button asChild size="lg" className="mt-4 bg-white hover:bg-white/90 text-black">
                <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="mr-2 h-5 w-5" /> Call for Immediate Service
                </a>
            </Button>
        </div>
      </div>
    </div>
    </div>
  );
}
