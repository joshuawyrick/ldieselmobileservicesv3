import { services, locations } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';
import { ArrowLeft, Phone, CheckCircle, ShieldCheck, Clock, Users, Zap, Fuel, Tractor, Wrench, Siren, MapPin, PlayCircle, FileText, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { notFound } from 'next/navigation';

const service = services.find((s) => s.url === '/emergency-roadside-assistance');

export async function generateMetadata(): Promise<Metadata> {
  if (!service) {
    return {};
  }

  const title = `24/7 Emergency Roadside Assistance for Trucks | ${COMPANY_NAME}`;
  const description = `Fast 24/7 emergency roadside assistance for heavy-duty trucks on Highway 101, San Luis Obispo & Santa Maria. Mobile diesel mechanic for breakdowns. Call ${PHONE_NUMBER}.`;

  return {
    title,
    description,
    keywords: "emergency roadside assistance, 24/7 truck repair, mobile diesel mechanic, Highway 101 truck service, San Luis Obispo, Santa Maria, Paso Robles, heavy-duty towing",
    alternates: {
      canonical: `/services/emergency-roadside-assistance`,
    },
  };
}

export default function ServiceDetailPage() {
  if (!service) {
    notFound();
  }
  
  const relatedServices = [
      services.find(s => s.url === '/mobile-tire-services'),
      services.find(s => s.url === '/mobile-electrical-repairs'),
      services.find(s => s.url === '/engine-diagnostics-repair'),
  ].filter(Boolean) as typeof services;


  return (
    <div>
       {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden bg-background flex items-center justify-center text-center text-foreground">
         <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://placehold.co/1440x400.png"
              alt="Emergency roadside assistance for a heavy-duty truck on the Central Coast"
              className="w-full h-full object-cover"
              fill
              priority
              data-ai-hint="truck roadside night"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white">
            {service.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Fast 24/7 mobile response for heavy-duty truck breakdowns on Highway 101 and across the Central Coast.
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
                When your truck breaks down on the road, every minute of downtime costs you money. That's why our mobile diesel mechanics are available 24/7 to provide emergency roadside assistance for tire blowouts, dead batteries, fuel shortages, and minor mechanical issues anywhere in {SERVICE_AREA}.
            </p>
        </div>
        
        {/* What's Included Section */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Included Emergency Roadside Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Tire Changes & Repairs</h4>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Battery Jump-Starts</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Mobile Fuel Delivery</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Lockout Services</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Minor Mechanical Fixes</h4>
                </div>
                 <div className="p-4 bg-secondary/50 rounded-lg border">
                    <h4 className="font-semibold">Roadside Diagnostics</h4>
                </div>
            </div>
        </div>

        {/* Common Emergency Situations We Handle */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Common Roadside Emergencies We Handle</h2>
            <div className="grid md:grid-cols-2 gap-8 p-6 bg-secondary/50 border-2 border-foreground rounded-2xl shadow-card">
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Blown Tire on Highway 101</h4>
                    <p className="text-muted-foreground">We provide safe, fast mobile tire changes on busy highways, including setting up proper traffic safety measures.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Dead Battery at 3 AM</h4>
                    <p className="text-muted-foreground">Our 24/7 service means we're ready with heavy-duty jump-starts or replacement batteries, day or night.</p>
                </div>
                 <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Out of Fuel in a Remote Area</h4>
                    <p className="text-muted-foreground">We deliver diesel fuel directly to your location and can prime the fuel system to get you started.</p>
                </div>
                <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                    <h4 className="font-bold">Engine Won't Start</h4>
                    <p className="text-muted-foreground">Our mobile trucks carry diagnostic tools to troubleshoot no-start situations caused by electrical, fuel, or air system issues.</p>
                </div>
            </div>
        </div>

         {/* Why Choose Us */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Why Choose Our Roadside Service?</h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-card text-center">
                    <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Fast Response Time</h3>
                    <p className="mt-2 text-muted-foreground text-sm">We prioritize emergency calls to minimize downtime and get you back on schedule.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Experienced Technicians</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Our certified mechanics are trained for safe and effective roadside repairs.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Safety is Our Priority</h3>
                    <p className="mt-2 text-muted-foreground text-sm">We use proper safety procedures for all roadside work to protect you and your vehicle.</p>
                </div>
            </div>
        </div>

        {/* FAQ */}
         <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How quickly can you respond to an emergency on the Central Coast?</AccordionTrigger>
                <AccordionContent>
                  We prioritize emergency roadside calls and aim for the fastest possible response time. Our local dispatch provides an accurate ETA based on your location in San Luis Obispo or Santa Barbara County.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What information should I have ready when I call?</AccordionTrigger>
                <AccordionContent>
                  Please provide your exact location (mile marker, nearest exit, or address), a description of the problem, and your truck's make and model. This helps us dispatch the right technician and tools for the job.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can you handle repairs for heavy-duty trucks on Highway 101?</AccordionTrigger>
                <AccordionContent>
                 Yes, we are fully equipped and experienced in providing safe roadside assistance on major highways, including US-101. Our technicians follow strict safety protocols to manage traffic and ensure a secure repair environment.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-4">
                <AccordionTrigger>What if my truck needs more than a minor roadside repair?</AccordionTrigger>
                <AccordionContent>
                 If the issue is too complex for a roadside fix, we will diagnose the problem and can help coordinate with a local heavy-duty towing service to get your truck to a suitable repair location.
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
            <h2 className="text-2xl font-bold">Stranded? Call Us Now.</h2>
            <p className="mt-2">We offer 24/7 emergency roadside assistance. Call us anytime for immediate help.</p>
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
