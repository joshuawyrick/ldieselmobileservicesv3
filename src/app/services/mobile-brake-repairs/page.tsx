import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';
import { ArrowLeft, Phone, CheckCircle, ShieldCheck, FileText, Wrench, AlertTriangle, PlayCircle, Users, Clock } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const service = services.find((s) => s.url === '/mobile-brake-repairs');

export async function generateMetadata(): Promise<Metadata> {
  if (!service) {
    return {};
  }

  const title = `Mobile Brake Repair for Heavy-Duty Trucks | ${COMPANY_NAME}`;
  const description = `24/7 mobile brake repair for semi-trucks, trailers, and heavy-duty vehicles in ${SERVICE_AREA}. DOT certified air brake service on Highway 101. Call ${PHONE_NUMBER} for immediate assistance.`;

  return {
    title,
    description,
    keywords: "mobile brake repair, truck brake service, air brake repair, DOT brake inspection, semi-truck brakes, San Luis Obispo, Santa Maria, Paso Robles, Highway 101",
    alternates: {
      canonical: `/services${service.url}`,
    },
  };
}

export default function ServiceDetailPage() {
  if (!service) {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold">Service not found</h1>
            <Link href="/services">Back to services</Link>
        </div>
    );
  }
  
  const relatedServices = [
      services.find(s => s.url === '/mobile-tire-services'),
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
              alt="Mobile brake repair service for heavy-duty trucks on the Central Coast"
              className="w-full h-full object-cover"
              fill
              priority
              data-ai-hint="truck brakes"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white">
            {service.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            DOT-certified mobile air brake diagnostics, repairs, and inspections for heavy-duty trucks along Highway 101 and the Central Coast.
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
              When your truck's brakes fail, everything stops—including your business. Our mobile mechanics specialize in heavy-duty air brake systems, providing on-site diagnostics and repairs in Paso Robles, San Luis Obispo, and Santa Maria to get you back on the road safely and in compliance with all DOT regulations.
            </p>
        </div>
        
        {/* What's Included Section */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Included Mobile Brake Repair Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Air Brake System Repairs</h4>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Brake Pad & Shoe Replacement</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Brake Adjustments</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">DOT Brake Inspections</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Emergency Brake Repairs</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">ABS Diagnostics</h4>
                </div>
            </div>
        </div>

        {/* Your Safety is Our Priority */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Your Safety Is Our Priority</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 border rounded-lg bg-card text-center">
                    <AlertTriangle className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Immediate Assessment</h3>
                    <p className="mt-2 text-muted-foreground text-sm">We assess brake issues immediately to determine if it's safe to operate the vehicle.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <Wrench className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">DOT Compliance</h3>
                    <p className="mt-2 text-muted-foreground text-sm">All our repairs meet or exceed DOT standards to keep you compliant and safe.</p>
                </div>
                <div className="p-6 border rounded-lg bg-card text-center">
                    <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">System-Wide Check</h3>
                    <p className="mt-2 text-muted-foreground text-sm">We inspect the entire brake system to identify and prevent future potential failures.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <FileText className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Clear Documentation</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Receive detailed service reports for your maintenance and compliance records.</p>
                </div>
            </div>
        </div>

        {/* Common Brake Issues We Fix */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Common Heavy-Duty Brake Issues We Fix</h2>
            <div className="grid md:grid-cols-2 gap-8 p-6 bg-secondary/50 border-2 border-foreground rounded-2xl shadow-card">
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Air System Leaks</h4>
                    <p className="text-muted-foreground">Locating and repairing leaks in air lines, fittings, and valves to restore pressure for trucks in Atascadero and surrounding areas.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Worn Brake Pads & Shoes</h4>
                    <p className="text-muted-foreground">On-site replacement for worn pads and shoes causing grinding or reduced stopping power, available 24/7.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Slack Adjuster Problems</h4>
                    <p className="text-muted-foreground">Adjusting or replacing faulty slack adjusters to prevent uneven braking, a common issue for heavy-haul trucks.</p>
                </div>
                <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">ABS Malfunctions</h4>
                    <p className="text-muted-foreground">Diagnosing and repairing ABS warning lights, sensors, and control modules for commercial fleets.</p>
                </div>
                <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Brake Chamber Failures</h4>
                    <p className="text-muted-foreground">Replacing damaged diaphragms or springs causing brake drag or failure, a critical roadside repair.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Glazed or Cracked Drums</h4>
                    <p className="text-muted-foreground">Inspecting brake drums for heat damage on steep grades like the Cuesta Grade and providing replacement when necessary.</p>
                </div>
            </div>
        </div>


        {/* FAQ */}
         <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What are signs my truck's air brakes need service on the Central Coast?</AccordionTrigger>
                <AccordionContent>
                  Warning signs include squealing or grinding noises, the truck pulling to one side when braking, a soft or spongy brake pedal, slow-to-build air pressure, or the ABS warning light staying on. These issues are especially critical on roads like Highway 101.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How quickly can you respond to a brake-related emergency in San Luis Obispo or Santa Maria?</AccordionTrigger>
                <AccordionContent>
                  Brake issues are a top priority. We treat these as emergencies and dispatch a technician for the fastest possible response to ensure your safety and minimize downtime anywhere in our service area.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you perform mobile DOT brake inspections near me?</AccordionTrigger>
                <AccordionContent>
                 Yes, we are certified to perform comprehensive mobile DOT brake inspections across the Central Coast. We can make any necessary on-site repairs to ensure your heavy-duty truck meets all federal safety requirements.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-4">
                <AccordionTrigger>What parts do you use for brake repairs?</AccordionTrigger>
                <AccordionContent>
                 We use high-quality, OEM-spec parts for all our brake repairs to ensure maximum safety, reliability, and longevity. This includes brake pads, chambers, slack adjusters, and other critical components suited for heavy-duty commercial use.
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
            <h2 className="text-2xl font-bold text-primary">Need Emergency Brake Service?</h2>
            <p className="mt-2 text-muted-foreground">Our mobile mechanics are available 24/7. Call now for immediate help.</p>
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
