import { notFound } from 'next/navigation';
import { locations, services } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';
import { ArrowLeft, Check, Phone } from 'lucide-react';
import Image from 'next/image';

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.url.substring(1),
  }));
}

export async function generateMetadata({ params }: { params: { slug:string } }): Promise<Metadata> {
  const location = locations.find((l) => l.url === `/${params.slug}`);
  if (!location) {
    return {};
  }
  
  const cityName = location.name.replace(', CA', '');

  let title = `Mobile Diesel Mechanic in ${location.name} | ${COMPANY_NAME}`;
  let description = `24/7 mobile diesel mechanic in ${cityName}, CA. Emergency roadside assistance, on-site heavy-duty truck repairs, fleet maintenance. Fast response. Call ${PHONE_NUMBER}.`;

  if (params.slug === 'santa-maria-ca') {
    title = `Mobile Diesel Mechanic Santa Maria, CA | 24/7 Truck Repair`;
    description = `Professional mobile diesel mechanics serving Santa Maria CA. Expert heavy-duty truck repair, emergency roadside assistance, and fleet maintenance. Call ${PHONE_NUMBER} for fast mobile service.`;
  } else if (params.slug === 'san-luis-obispo-ca') {
    title = `Mobile Diesel Mechanic San Luis Obispo, CA | ${COMPANY_NAME}`;
    description = `Top-rated mobile diesel mechanic in San Luis Obispo, CA. We offer 24/7 emergency truck repair, fleet services, and roadside assistance for commercial vehicles. Call ${PHONE_NUMBER}.`;
  } else if (params.slug === 'paso-robles-ca') {
      title = `Mobile Diesel Mechanic Paso Robles, CA | Heavy-Duty Repair`;
      description = `24/7 mobile diesel mechanic for Paso Robles, CA. Specializing in vineyard and agricultural equipment repair, plus commercial trucks and roadside assistance on Hwy 46 & 101. Call now for fast service.`;
  }

  return {
    title,
    description,
    keywords: `mobile diesel mechanic ${cityName}, diesel repair ${cityName}, truck repair ${cityName}, emergency diesel service ${cityName}, heavy-duty roadside assistance ${cityName}`,
    alternates: {
      canonical: `/locations/${params.slug}`,
    },
  };
}


export default function LocationDetailPage({ params }: { params: { slug: string } }) {
  const location = locations.find((l) => l.url === `/${params.slug}`);

  if (!location) {
    notFound();
  }
  
  const cityName = location.name.replace(', CA', '');

  const pageContent: {[key: string]: JSX.Element} = {
    'santa-maria-ca': (
        <div className='prose max-w-none prose-h2:text-primary prose-h2:font-headline prose-h2:uppercase prose-h3:text-primary prose-h3:font-headline prose-h3:uppercase prose-strong:text-foreground'>
            <h2>24/7 Mobile Diesel Service in Santa Maria</h2>
            <p>
              {COMPANY_NAME} provides professional mobile diesel mechanic services throughout Santa Maria and the greater metropolitan area. Our certified technicians bring expert heavy-duty truck repair and maintenance services directly to your location, offering fast response for breakdowns and scheduled fleet service.
            </p>
            <h3>Service Areas in Santa Maria</h3>
            <ul>
                <li><strong>Greater Santa Maria Metro:</strong> Including the downtown business district, industrial zones, and the Santa Maria Airport (SMX) area.</li>
                <li><strong>Surrounding Communities:</strong> We provide full mobile diesel service to Orcutt, Guadalupe, Los Alamos, and the Santa Ynez Valley wine country.</li>
            </ul>

            <h2>Why Choose Our Santa Maria Mobile Mechanics?</h2>
            <ul>
                <li><strong>Local Expertise:</strong> We know Santa Maria's agricultural roads, major highways like the 101, and business districts for faster response times.</li>
                <li><strong>Agricultural & Fleet Experience:</strong> Extensive experience with Santa Maria-area commercial, agricultural, and transport fleets, including tractors and harvesters.</li>
                <li><strong>Emergency Coverage:</strong> 24/7 emergency roadside assistance for semi-trucks and commercial vehicles throughout the Santa Maria metro area and beyond.</li>
            </ul>

            <h2>Mobile Truck Repair Services in Santa Maria</h2>
            <ul>
                <li><strong>Commercial Fleet Services:</strong> On-site maintenance and repair for delivery trucks, construction equipment, and municipal vehicles.</li>
                <li><strong>Emergency Roadside Assistance:</strong> US-101, CA-1, and CA-135 emergency response for breakdowns, tires, and fuel issues.</li>
                <li><strong>Agricultural Equipment Repair:</strong> Specializing in on-farm repair for tractors, harvesters, and irrigation pump engines.</li>
            </ul>
        </div>
    ),
    'san-luis-obispo-ca': (
        <div className='prose max-w-none prose-h2:text-primary prose-h2:font-headline prose-h2:uppercase prose-h3:text-primary prose-h3:font-headline prose-h3:uppercase prose-strong:text-foreground'>
            <h2>On-Site Diesel Mechanic Services in San Luis Obispo</h2>
            <p>
                From the rolling hills of Edna Valley to the bustling downtown core, {COMPANY_NAME} is San Luis Obispo's trusted source for mobile diesel repair. We bring our fully equipped service trucks to your location, whether you're a commercial fleet manager near the airport, a construction foreman on a new development, or an RV owner enjoying the Central Coast.
            </p>
            <h3>Serving All of San Luis Obispo and Surrounding Areas</h3>
            <ul>
                <li><strong>Downtown & Commercial Hubs:</strong> Rapid response for delivery trucks and commercial vehicles in the city center.</li>
                <li><strong>Highway 101 Corridor:</strong> 24/7 emergency roadside truck service on the Cuesta Grade and throughout SLO.</li>
                <li><strong>South SLO & Airport Area:</strong> Full support for logistics, transport, and industrial businesses.</li>
                <li><strong>Edna Valley & Wineries:</strong> Specialized service for agricultural tractors and wine production equipment.</li>
                <li><strong>Surrounding Communities:</strong> We also serve Avila Beach, Los Osos, and Santa Margarita.</li>
            </ul>
            <h2>Why {COMPANY_NAME} is the Go-To Mobile Mechanic in SLO</h2>
            <ul>
                <li><strong>Local Knowledge:</strong> We understand the unique challenges of navigating SLO's roads and the needs of its diverse industries.</li>
                <li><strong>Fast, Efficient Service:</strong> Our local presence means less downtime for you. We pride ourselves on our rapid response and efficient repairs for all heavy-duty vehicles.</li>
                <li><strong>Comprehensive Diesel Care:</strong> From emergency roadside assistance on the Cuesta Grade to scheduled fleet maintenance, we handle it all.</li>
            </ul>
        </div>
    ),
     'paso-robles-ca': (
        <div className='prose max-w-none prose-h2:text-primary prose-h2:font-headline prose-h2:uppercase prose-h3:text-primary prose-h3:font-headline prose-h3:uppercase prose-strong:text-foreground'>
            <h2>Your Go-To Mobile Mechanic in Paso Robles Wine Country</h2>
            <p>
                {COMPANY_NAME} delivers expert mobile diesel mechanic services across Paso Robles and North San Luis Obispo County. We specialize in servicing the agricultural and wine industries, providing on-site repairs for tractors, harvesters, and irrigation engines. We also offer complete 24/7 emergency roadside assistance for commercial trucks on Highway 46 and the US-101.
            </p>
            <h3>Service Area Highlights in and around Paso Robles</h3>
            <ul>
                <li><strong>East & West Side Wineries:</strong> On-site service for all agricultural and vineyard equipment to prevent costly downtime during harvest.</li>
                <li><strong>Highway 46 & US-101 Corridors:</strong> Rapid emergency response for semi-trucks, commercial trucks, and travelers.</li>
                <li><strong>Downtown Paso Robles:</strong> Maintenance and repair for local delivery fleets and commercial vehicles.</li>
                <li><strong>Surrounding Areas:</strong> Complete mobile mechanic coverage for Templeton, Atascadero, and San Miguel.</li>
            </ul>
            <h2>Specialized Mobile Services for the Paso Robles Area</h2>
            <ul>
                <li><strong>Agricultural Equipment Repair:</strong> Expert diagnostics and repair for John Deere, Kubota, and other major tractor brands.</li>
                <li><strong>Emergency Roadside Truck Repair:</strong> 24/7 service for breakdowns, tires, and fuel issues on the US-101 and rural county roads.</li>
                <li><strong>Fleet Maintenance:</strong> Preventive maintenance plans to keep your agricultural or commercial fleet running reliably.</li>
                <li><strong>Hydraulic Systems:</strong> On-site repair for hydraulic hoses, pumps, and systems on heavy equipment.</li>
            </ul>
        </div>
    )
  };

  const defaultContent = (
      <div className='prose max-w-none prose-h2:text-primary prose-h2:font-headline prose-h2:uppercase prose-h3:text-primary prose-h3:font-headline prose-h3:uppercase prose-strong:text-foreground'>
        <h2>Your On-Site Heavy-Duty Repair Experts in {cityName}</h2>
        <p>
            When your heavy-duty truck or equipment breaks down in {cityName}, you need a fast and reliable solution. {COMPANY_NAME} brings the repair shop to you, whether you're on a busy highway like the US-101, at a construction site, or on a farm in the heart of the Central Coast. Our mobile service trucks are fully equipped to handle a wide range of repairs on-site, minimizing your downtime and getting you back to work as quickly as possible.
        </p>
        <h2>Serving the Needs of {cityName} Industries</h2>
        <p>
            We understand the unique demands of the local economy in {cityName}. {location.description ? `From the ${location.description.toLowerCase()} that rely on heavy machinery to the commercial trucks that are the lifeblood of our local businesses, we have the expertise to service all types of diesel vehicles.` : 'From agriculture to commercial transport, we have the expertise to service all types of diesel vehicles.'} We are committed to providing professional, high-quality mobile repairs that you can depend on.
        </p>
    </div>
  )

  return (
    <div className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
            <Link href="/locations" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Locations
            </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
                <main>
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                      {`Mobile Diesel Mechanic in ${location.name}`}
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {
                            params.slug === 'santa-maria-ca' ? `${COMPANY_NAME} provides 24/7 mobile diesel mechanic services throughout Santa Maria, California. Our certified technicians bring expert heavy-duty truck repair, emergency roadside assistance, and maintenance services directly to your location.` :
                            params.slug === 'san-luis-obispo-ca' ? `Your reliable 24/7 mobile diesel mechanic serving the entire San Luis Obispo area. We come to you for emergency heavy-duty truck repairs, fleet maintenance, and agricultural equipment service.` :
                            params.slug === 'paso-robles-ca' ? `Your 24/7 mobile diesel repair specialists for Paso Robles, CA. We provide on-site service for commercial trucks, agricultural equipment, and RVs throughout North SLO County.` :
                            `${COMPANY_NAME} provides fast and reliable 24/7 mobile diesel repair services to ${cityName} and the surrounding areas. ${location.description ? ` We are familiar with the specific needs of industries in the area, including ${location.description.toLowerCase()}.` : ''}`
                        }
                    </p>
                    
                    <Image 
                        src="https://placehold.co/800x400.png"
                        alt={`Mobile diesel mechanic truck service in ${location.name}`}
                        data-ai-hint="diesel truck"
                        width={800}
                        height={400}
                        className="rounded-lg shadow-card border-2 border-foreground my-8"
                    />
                    {pageContent[params.slug] || defaultContent}
                </main>
            </div>

            <aside className="lg:col-span-1 sticky top-24">
                <div className="border-2 border-foreground rounded-2xl shadow-card p-6">
                    <h3 className="text-2xl font-bold font-headline text-primary text-center mb-4">
                        Need a Mechanic in {cityName}?
                    </h3>
                     <div className="bg-accent text-accent-foreground text-center font-headline text-lg uppercase rounded-full py-2 px-4 mb-4">
                        24/7 EMERGENCY SERVICE
                     </div>
                     <Button asChild size="lg" className="w-full btn-primary mb-4 text-lg">
                         <a href={`tel:${PHONE_NUMBER}`}>
                            <Phone className="mr-2 h-5 w-5" /> Call Now
                        </a>
                    </Button>

                    <div className="mt-6 pt-6 border-t border-border/20">
                         <h4 className="text-xl font-bold font-headline text-primary mb-3">Our Mobile Services</h4>
                         <ul className="space-y-2">
                            {services.slice(0, 5).map(service => (
                                <li key={service.title} className="flex items-start">
                                    <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                                    <Link href={`/services${service.url}`} className="text-muted-foreground hover:text-primary">{service.title}</Link>
                                </li>
                            ))}
                             <li className="flex items-start">
                                <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                                <Link href="/services" className="text-muted-foreground hover:text-primary">And More...</Link>
                            </li>
                         </ul>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border/20">
                        <h4 className="text-xl font-bold font-headline text-primary mb-3">Service Area</h4>
                        <p className="text-muted-foreground">We proudly serve all of {SERVICE_AREA}, providing rapid response for roadside assistance to {cityName} and beyond.</p>
                    </div>
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
}
