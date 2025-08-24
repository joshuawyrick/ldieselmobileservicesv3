import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { Wrench } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '24/7 Diesel Repair Services San Luis Obispo & Santa Maria CA',
  description: 'Mobile diesel repair services: emergency roadside assistance, tire & brake repairs, engine diagnostics. Serving San Luis Obispo CA & Santa Maria CA 24/7. Call now!',
  keywords: 'diesel repair services, mobile mechanic, San Luis Obispo, Santa Maria, Central Coast',
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We offer a complete range of mobile diesel mechanic services to keep your trucks and equipment operating at peak performance. Available 24/7 for your convenience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link href={`/services${service.url}`} key={service.title} className="block hover:-translate-y-1 transition-transform duration-300">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                      <Wrench className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardDescription className="p-6 pt-0 flex-grow">
                {service.description}
              </CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
