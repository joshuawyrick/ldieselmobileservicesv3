
import { notFound } from 'next/navigation';
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';
import { ArrowLeft, Phone, CheckCircle, Award, ShieldCheck, Clock, Users, Truck, MapPin, AlertCircle, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const service = services.find((s) => s.url === '/carb-clean-truck-check-testing');

export async function generateMetadata(): Promise<Metadata> {
  if (!service) {
    return {};
  }

  const title = `CARB Clean Truck Check & Mobile Emissions Testing | ${COMPANY_NAME}`;
  const description = `Certified mobile CARB Clean Truck Check and diesel emissions testing across San Luis Obispo and Santa Barbara Counties. Fast, reliable HD I/M compliance testing at your location. Call ${PHONE_NUMBER}.`;

  return {
    title,
    description,
    keywords: "Clean Truck Check, mobile diesel emissions testing, CARB compliance, HD I/M testing, San Luis Obispo, Santa Barbara, Paso Robles, Santa Maria, Lompoc, Atascadero",
    alternates: {
      canonical: `/services/carb-clean-truck-check-testing`,
    },
  };
}

export default function ServiceDetailPage() {
  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Services
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          {service.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {service.description}
        </p>

        <div className="my-8">
            <Image 
                src="/clean-truck-check-santa-maria.png"
                alt={service.title}
                width={800}
                height={400}
                className="rounded-lg shadow-card border-2 border-foreground"
            />
        </div>

        <div className="prose max-w-none prose-h2:text-primary prose-h2:uppercase prose-h2:font-headline prose-h3:text-primary prose-h3:uppercase prose-h3:font-headline prose-headings:font-headline prose-headings:uppercase prose-strong:text-foreground">
            <p>
                At {COMPANY_NAME}, we understand that downtime is costly. That's why we bring our expert {service.title} directly to your location. Our mobile service trucks are fully equipped with advanced diagnostic tools and high-quality parts to perform tests efficiently and effectively, minimizing your vehicle's time off the road.
            </p>
            <h2>Stay Compliant with California's Clean Truck Check Program</h2>
            <p>
                California's Clean Truck Check program requires regular emissions testing for nearly all heavy-duty vehicles operating in the state. Our mobile service makes it easy to stay compliant without disrupting your schedule. We come to you to perform the required tests, submit the data to CARB, and get you the necessary compliance documentation.
            </p>

             <h3>Services Included:</h3>
             <ul>
                {service.subServices?.map(s => <li key={s}>{s}</li>)}
             </ul>

            <p>
                Whether you're at your yard, on a farm, or at a job site, our certified technicians are ready to help 24/7. We are committed to providing reliable, professional service across San Luis Obispo and Santa Barbara counties.
            </p>
        </div>

        {/* Vehicle Eligibility Checklist */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-4">Does Your Vehicle Need Testing?</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">Use this checklist to determine if your vehicle requires CARB Clean Truck Check compliance testing.</p>
            <div className="grid md:grid-cols-2 gap-8 p-6 bg-secondary/50 border-2 border-foreground rounded-2xl shadow-card">
                <div>
                    <h3 className="text-2xl font-bold font-headline text-primary mb-4 flex items-center"><CheckCircle className="mr-2 h-6 w-6"/>Vehicle Requirements</h3>
                    <div className="space-y-4">
                        <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                            <h4 className="font-bold">Weight Requirement</h4>
                            <p className="text-muted-foreground">Vehicle has a Gross Vehicle Weight Rating (GVWR) over 14,000 pounds.</p>
                        </div>
                        <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                            <h4 className="font-bold">Vehicle Types</h4>
                            <ul className="list-disc list-inside text-muted-foreground">
                                <li>Semi-trucks & tractor-trailers</li>
                                <li>Box trucks & delivery vehicles</li>
                                <li>Buses (school, transit, charter)</li>
                                <li>Work trucks & utility vehicles</li>
                                <li>Motorhomes & large RVs</li>
                            </ul>
                        </div>
                         <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                            <h4 className="font-bold">Agricultural & Out-of-State</h4>
                            <p className="text-muted-foreground">Includes farm equipment over 14,000 lbs and vehicles operated in California from other states.</p>
                        </div>
                    </div>
                </div>
                 <div>
                    <h3 className="text-2xl font-bold font-headline text-primary mb-4 flex items-center"><CalendarDays className="mr-2 h-6 w-6"/>Testing Schedule</h3>
                    <div className="space-y-4">
                        <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                            <h4 className="font-bold">Testing Frequency</h4>
                             <ul className="list-disc list-inside text-muted-foreground">
                                <li><strong>Semi-Annual:</strong> Most heavy-duty vehicles</li>
                                <li><strong>Annual:</strong> Agricultural vehicles & CA-registered motorhomes</li>
                            </ul>
                        </div>
                        <div className="p-4 border-l-4 border-primary bg-background rounded-r-lg">
                            <h4 className="font-bold">Testing Types by Engine Year</h4>
                            <ul className="list-disc list-inside text-muted-foreground">
                                <li><strong>2013+ Diesel:</strong> OBD data scan</li>
                                <li><strong>2012 & Older:</strong> Smoke opacity + visual inspection</li>
                            </ul>
                        </div>
                         <div className="p-4 border-l-4 border-yellow-500 bg-yellow-500/10 rounded-r-lg">
                            <h4 className="font-bold text-yellow-600 flex items-center"><AlertCircle className="mr-2 h-5 w-5"/>Important Deadlines</h4>
                            <p className="text-muted-foreground">Testing can be done up to 90 days before your deadline shown in your CTC-VIS account. Failed tests require retesting before the deadline.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Why Choose Us */}
        <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Why Choose {COMPANY_NAME}?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg bg-card text-center">
                    <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">CARB Credentialed Tester</h3>
                    <p className="mt-2 text-muted-foreground text-sm">State-certified testing ensures compliant results and eliminates risks.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <Truck className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Complete Mobile Service</h3>
                    <p className="mt-2 text-muted-foreground text-sm">We come to your job site, yard, or farm, eliminating downtime.</p>
                </div>
                <div className="p-6 border rounded-lg bg-card text-center">
                    <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Fast & Convenient</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Quick appointments with same-day service often available.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Expert Compliance Support</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Navigate CTC-VIS registration, understand deadlines, and get help.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Avoid Costly Issues</h3>
                    <p className="mt-2 text-muted-foreground text-sm">Prevent DMV registration blocks and enforcement actions.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card text-center">
                    <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Local Expertise</h3>
                    <p className="mt-2 text-muted-foreground text-sm">We understand Central Coast regulations and your local challenges.</p>
                </div>
            </div>
        </div>

        {/* FAQ */}
         <div className="my-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How often does my vehicle need testing?</AccordionTrigger>
                <AccordionContent>
                  Most heavy-duty vehicles require semi-annual testing (twice per year). Agricultural vehicles and California-registered motorhomes only require annual testing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What type of test does my vehicle need?</AccordionTrigger>
                <AccordionContent>
                  It depends on your engine model year. 2013 and newer diesel engines require an OBD data scan. 2012 and older engines need a smoke opacity test and a visual inspection.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How far in advance can I get tested?</AccordionTrigger>
                <AccordionContent>
                  You can complete your Clean Truck Check test up to 90 days before your compliance deadline, which gives you plenty of time for repairs if needed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you handle the CTC-VIS reporting?</AccordionTrigger>
                <AccordionContent>
                  Yes, as a CARB credentialed tester, we handle all test result submissions to the CTC-VIS system. We take care of all the reporting for you.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
         </div>


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
  );
}
