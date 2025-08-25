
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';
import { ArrowLeft, Phone, CheckCircle, Clock, Users, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { notFound } from 'next/navigation';

const service = services.find((s) => s.url === '/cooling-system-repairs');

export async function generateMetadata(): Promise<Metadata> {
  if (!service) {
    return {};
  }

  const title = `Mobile Truck Cooling System Repair | Radiator & Water Pump | ${COMPANY_NAME}`;
  const description = `24/7 mobile truck cooling system repair for overheating engines in ${SERVICE_AREA}. On-site radiator, water pump, and hose repair for heavy-duty trucks. Call ${PHONE_NUMBER}.`;

  return {
    title,
    description,
    keywords: "mobile truck cooling system repair, radiator repair, water pump replacement, overheating truck, mobile diesel mechanic, San Luis Obispo, Santa Maria, Paso Robles",
    alternates: {
      canonical: `/services/cooling-system-repairs`,
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
              src="https://i.imgur.com/gT3h1eC.jpeg"
              alt="Mobile cooling system repair for a heavy-duty truck"
              className="w-full h-full object-cover"
              fill
              priority
              data-ai-hint="truck radiator"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white">
            {service.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Prevent costly engine damage with our 24/7 on-site cooling system diagnostics and repair for heavy-duty trucks.
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
              An overheating engine can lead to catastrophic failure, leaving you stranded and facing expensive repairs. Our mobile mechanics specialize in heavy-duty truck cooling systems, providing fast, on-site service across {SERVICE_AREA} to fix leaks, replace components, and keep your engine at the right temperature.
            </p>
        </div>
        
        {/* What's Included Section */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Included Cooling System Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Radiator Repair & Replacement</h4>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Water Pump Service</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Thermostat Replacement</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Coolant Hose Repair</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Fan Clutch & Belt Service</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Complete Coolant Flushes</h4>
                </div>
            </div>
        </div>
        
        {/* Common Cooling System Issues */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Common Overheating Issues We Fix On-Site</h2>
            <div className="grid md:grid-cols-2 gap-8 p-6 bg-secondary/50 border-2 border-foreground rounded-2xl shadow-card">
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Visible Coolant Leaks</h4>
                    <p className="text-muted-foreground">We quickly locate and repair leaks from radiators, hoses, or water pumps to prevent coolant loss and overheating on roads like Highway 101.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Faulty Water Pump</h4>
                    <p className="text-muted-foreground">A failing water pump can't circulate coolant effectively. We perform on-site replacements to restore proper flow and prevent engine damage.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Stuck Thermostat</h4>
                    <p className="text-muted-foreground">A thermostat stuck closed will cause rapid overheating. Our mobile service includes fast diagnosis and replacement to get you running cool again.</p>
                </div>
                <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Damaged Fan Clutch or Belts</h4>
                    <p className="text-muted-foreground">The cooling fan is critical at low speeds and on steep grades. We can repair or replace fan clutches and serpentine belts right at your location.</p>
                </div>
            </div>
        </div>

         {/* Why Choose Us */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Why Choose Our Cooling System Experts?</h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-card text-center">
                    <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Rapid Mobile Response</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Overheating requires immediate attention. We prioritize these calls to prevent engine damage.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Heavy-Duty Specialists</h3>
                    <p className="mt-2 text-muted-foreground text-sm">We understand the complex cooling systems of commercial trucks and agricultural equipment.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Quality Parts & Service</h3>
                    <p className="mt-2 text-muted-foreground text-sm">We use high-quality parts and coolants to ensure a reliable, long-lasting repair.</p>
                </div>
            </div>
        </div>

        {/* FAQ */}
         <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>My truck is overheating. What should I do?</AccordionTrigger>
                <AccordionContent>
                  Safely pull over immediately and turn off the engine to prevent severe damage. Do not attempt to open the radiator cap while the engine is hot. Call us for 24/7 emergency assistance, and we will guide you on the next steps.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How often should I have my truck's cooling system serviced?</AccordionTrigger>
                <AccordionContent>
                  We recommend a complete cooling system flush and inspection at least once a year or as part of your scheduled preventive maintenance. Regular checks of hoses and coolant levels during pre-trip inspections are also crucial.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can you perform a coolant flush on-site?</AccordionTrigger>
                <AccordionContent>
                 Yes, our mobile service trucks are equipped to perform complete cooling system flushes at your location. We capture all old coolant and replace it with the correct type for your specific engine, ensuring your system is clean and protected.
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
            <h2 className="text-2xl font-bold">Engine Overheating? Call Us Now.</h2>
            <p className="mt-2">Our mobile mechanics are available 24/7 for emergency cooling system repairs.</p>
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
