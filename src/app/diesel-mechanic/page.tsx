
import { Button } from '@/components/ui/button';
import { services } from '@/lib/data';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Heavy-Duty Diesel Mechanic | Professional Mobile Diesel Repair 24/7',
  description: `Looking for a professional heavy-duty diesel mechanic on the Central Coast? ${COMPANY_NAME} offers expert, 24/7 mobile diesel repair for semi-trucks, fleets, and agricultural equipment.`,
  keywords: 'heavy-duty diesel mechanic, professional diesel repair, mobile mechanic, Central Coast, truck repair, semi-truck mechanic',
};

export default function DieselMechanicPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            Professional Heavy-Duty Diesel Mechanic Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Expert mobile solutions from a trusted Central Coast diesel mechanic for heavy-duty and commercial trucks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline text-primary">
              Why Choose a Professional Diesel Mechanic?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Heavy-duty diesel engines are complex, powerful machines that require specialized knowledge for proper service and repair. Choosing a professional diesel mechanic ensures that your commercial truck or equipment is handled by a trained expert with the right tools and diagnostic equipment. This leads to more reliable repairs, better performance, and a longer lifespan for your engine.
            </p>
            <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Accurate mobile diagnostics to pinpoint the exact issue.</span>
                </li>
                <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Use of correct, high-quality parts for lasting heavy-duty repairs.</span>
                </li>
                <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>In-depth knowledge of emissions systems (DPF, DEF, SCR).</span>
                </li>
                 <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>Adherence to safety and DOT standards.</span>
                </li>
            </ul>
          </div>
          <div>
            <Image
              src="https://i.imgur.com/r62a2C2.jpeg"
              alt="Professional diesel mechanic at work on a semi-truck"
              data-ai-hint="diesel engine"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16 bg-primary/10 p-8 rounded-lg">
          <h2 className="text-3xl font-bold font-headline text-primary text-center">
            Our Mobile Diesel Mechanic Expertise
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto text-center">
            At ${COMPANY_NAME}, our team is comprised of certified diesel mechanics specializing in mobile repair for:
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div key={service.title} className="bg-card p-4 rounded-md text-center">
                <Link href={`/services${service.url}`} className="font-semibold text-foreground hover:text-primary">
                  {service.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold font-headline text-primary">
            Need a Mobile Diesel Mechanic Now?
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            Our heavy-duty mobile mechanics are ready to assist you 24/7 anywhere on the Central Coast, including emergency roadside assistance on Highway 101.
          </p>
          <Button asChild size="lg" className="mt-6 bg-accent hover:bg-accent/90">
            <a href={`tel:${PHONE_NUMBER}`}>Call for Immediate Service</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
