import { Button } from '@/components/ui/button';
import { COMPANY_NAME, SERVICE_AREA } from '@/lib/constants';
import { Award, ShieldCheck, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Mobile Diesel Mechanics San Luis Obispo & Santa Maria',
  description: `Learn about ${COMPANY_NAME}, our team's experience, and our commitment to providing reliable 24/7 mobile diesel services across the Central Coast.`,
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            About {COMPANY_NAME}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your trusted local partner for mobile diesel repair on the Central Coast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className='order-2 md:order-1'>
                <h2 className="text-3xl font-bold font-headline text-primary">Our Story</h2>
                <p className="mt-4 text-muted-foreground">
                    {COMPANY_NAME} was founded with a clear mission: to provide reliable, professional, and convenient mobile diesel mechanic services to the hardworking industries of {SERVICE_AREA}. We saw a need for an on-site service that understands the urgency of equipment breakdowns and the unique demands of our local economy—from agriculture and wine production to commercial transport and tourism.
                </p>
                <p className="mt-4 text-muted-foreground">
                    We are more than just mechanics; we are problem-solvers dedicated to keeping your operations running smoothly. Our commitment is to our community, ensuring that businesses on the Central Coast have a dependable partner they can call 24/7.
                </p>
            </div>
            <div className="order-1 md:order-2">
                <Image
                src="https://placehold.co/600x400.png"
                alt="Our team of diesel mechanics"
                data-ai-hint="team portrait"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                />
            </div>
        </div>

        <div className="mt-16">
            <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Our Service Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-6 border rounded-lg bg-card">
                    <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Commitment to Quality</h3>
                    <p className="mt-2 text-muted-foreground">We use high-quality parts and state-of-the-art diagnostic equipment to ensure every repair is done right the first time.</p>
                </div>
                <div className="p-6 border rounded-lg bg-card">
                    <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Customer-First Approach</h3>
                    <p className="mt-2 text-muted-foreground">We prioritize clear communication, transparent pricing, and professional service to build lasting relationships with our clients.</p>
                </div>
                 <div className="p-6 border rounded-lg bg-card">
                    <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">Reliability and Trust</h3>
                    <p className="mt-2 text-muted-foreground">Our 24/7 availability and rapid response mean you can count on us to be there when you need us most, day or night.</p>
                </div>
            </div>
        </div>

        <div className="mt-16 text-center bg-primary/10 p-8 rounded-lg">
             <h2 className="text-3xl font-bold font-headline text-primary">Ready to Experience the Difference?</h2>
             <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Contact us today for routine maintenance or emergency repairs. We're here to help.</p>
             <Button asChild size="lg" className="mt-6">
                <Link href="/contact">Get In Touch</Link>
             </Button>
        </div>

      </div>
    </div>
  );
}
