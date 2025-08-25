
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';
import { ArrowLeft, Phone, CheckCircle, Clock, Users, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { notFound } from 'next/navigation';

const service = services.find((s) => s.url === '/aftertreatment-services');

export async function generateMetadata(): Promise<Metadata> {
  if (!service) {
    return {};
  }

  const title = `Mobile DPF & DEF System Repair | Aftertreatment Service | ${COMPANY_NAME}`;
  const description = `24/7 mobile aftertreatment service for DPF, DEF, and SCR systems in ${SERVICE_AREA}. We fix emission-related issues to keep your truck compliant and running efficiently. Call ${PHONE_NUMBER}.`;

  return {
    title,
    description,
    keywords: "mobile aftertreatment service, DPF repair, DEF system repair, forced regen, mobile diesel mechanic, San Luis Obispo, Santa Maria, CARB compliance",
    alternates: {
      canonical: `/services/aftertreatment-services`,
    },
  };
}

export default function ServiceDetailPage() {
  if (!service) {
    notFound();
  }
  
  const relatedServices = [
      services.find(s => s.url === '/engine-diagnostics-repair'),
      services.find(s => s.url === '/carb-clean-truck-check-testing'),
      services.find(s => s.url === '/mobile-fleet-maintenance'),
  ].filter(Boolean) as typeof services;

  return (
    <div>
       {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden bg-background flex items-center justify-center text-center text-foreground">
         <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://i.imgur.com/e5k45T5.jpeg"
              alt="Mobile aftertreatment service for a heavy-duty truck exhaust system"
              className="w-full h-full object-cover"
              fill
              priority
              data-ai-hint="exhaust system"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white">
            {service.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Expert mobile diagnostics and repair for DPF, DEF, and SCR systems to keep you compliant and on the road.
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
              Navigating California's strict emissions standards is a challenge. A fault in your aftertreatment system can derate your engine or put your truck out of service. Our mobile technicians provide on-site diagnostics and repair for DPF, DEF, and SCR systems across {SERVICE_AREA} to resolve codes, clear filters, and ensure you stay compliant.
            </p>
        </div>
        
        {/* What's Included Section */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Included Aftertreatment Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Forced DPF Regeneration</h4>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">DEF System Diagnostics & Repair</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">SCR System Service</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">DPF Cleaning & Replacement</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">NOx & Temp Sensor Replacement</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">CARB Compliance Support</h4>
                </div>
            </div>
        </div>
        
        {/* Common Aftertreatment Issues */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Common Emission System Faults We Fix</h2>
            <div className="grid md:grid-cols-2 gap-8 p-6 bg-secondary/50 border-2 border-foreground rounded-2xl shadow-card">
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">DPF Light On / Clogged Filter</h4>
                    <p className="text-muted-foreground">We perform mobile forced regenerations and DPF system diagnostics to clear soot buildup and restore power.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">DEF System Fault Codes</h4>
                    <p className="text-muted-foreground">From bad DEF fluid to failed sensors or pumps, we diagnose and repair all components of the DEF/SCR system to clear codes.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Engine Derate or Shutdown</h4>
                    <p className="text-muted-foreground">Aftertreatment issues can limit your speed or shut you down. We provide emergency mobile service to resolve the fault and get you moving.</p>
                </div>
                <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Failed NOx or Temperature Sensors</h4>
                    <p className="text-muted-foreground">Faulty sensors are a common cause of recurring emission codes. We carry common sensors and can replace them on-site.</p>
                </div>
            </div>
        </div>

         {/* Why Choose Us */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Your Go-To for Mobile Emissions Repair</h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-card text-center">
                    <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">24/7 Emergency Service</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Emission system issues can stop you anytime. We're available around the clock to help.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">CARB Compliance Experts</h3>
                    <p className="mt-2 text-muted-foreground text-sm">We understand California's complex regulations and ensure our repairs keep you compliant.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Advanced Diagnostic Tools</h3>
                    <p className="mt-2 text-muted-foreground text-sm">We use OEM-level software to accurately diagnose aftertreatment problems and perform necessary resets.</p>
                </div>
            </div>
        </div>

        {/* FAQ */}
         <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is a forced DPF regeneration?</AccordionTrigger>
                <AccordionContent>
                  A forced regeneration is a process where we use a diagnostic tool to raise the exhaust temperature to burn off excess soot in the Diesel Particulate Filter (DPF). This is necessary when the truck's automatic regen process fails or is not enough.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can you fix a DEF warning light that won't go away?</AccordionTrigger>
                <AccordionContent>
                  Yes. A persistent DEF light can be caused by many issues, including poor quality DEF, a bad sensor, or a problem with the pump or heater. Our mobile technicians can diagnose the specific cause and perform the necessary repairs on-site.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>My truck is in "derate" mode due to an emissions fault. Can you fix it?</AccordionTrigger>
                <AccordionContent>
                 Absolutely. We specialize in emergency mobile service for derated trucks. We will come to your location, diagnose the fault code, make the repair, and perform the required system resets to get your engine back to full power.
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
            <h2 className="text-2xl font-bold">Emission System Problems? Call Now.</h2>
            <p className="mt-2">We offer 24/7 mobile DPF & DEF service across the Central Coast.</p>
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
