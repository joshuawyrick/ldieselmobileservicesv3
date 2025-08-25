
import { notFound } from 'next/navigation';
import { locations, services } from '@/lib/data';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { COMPANY_NAME, PHONE_NUMBER } from '@/lib/constants';
import { ArrowLeft, Check, Phone } from 'lucide-react';
import Image from 'next/image';

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.url.substring(1),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = params.slug;
  const location = locations.find((l) => l.url === `/${slug}`);
  if (!location) {
    return {};
  }
  
  const cityName = location.name.replace(', CA', '');

  let title = `Mobile Diesel Mechanic in ${location.name} | ${COMPANY_NAME}`;
  let description = `24/7 mobile diesel mechanic in ${cityName}, CA. Emergency roadside assistance for heavy-duty trucks, on-site repairs, and fleet maintenance. Fast response. Call ${PHONE_NUMBER}.`;

  // Custom metadata for key locations
  switch(slug) {
    case 'santa-maria-ca':
      title = `Mobile Diesel Mechanic Santa Maria, CA | 24/7 Truck Repair`;
      description = `Professional mobile diesel mechanics serving Santa Maria CA. Expert heavy-duty truck repair, emergency roadside assistance on Highway 101, and fleet maintenance for agricultural and commercial vehicles.`;
      break;
    case 'san-luis-obispo-ca':
      title = `Mobile Diesel Mechanic San Luis Obispo, CA | ${COMPANY_NAME}`;
      description = `Top-rated mobile diesel mechanic in San Luis Obispo, CA. We offer 24/7 emergency truck repair on the Cuesta Grade, fleet services, and roadside assistance for commercial vehicles.`;
      break;
    case 'paso-robles-ca':
      title = `Mobile Diesel Mechanic Paso Robles, CA | Heavy-Duty Repair`;
      description = `24/7 mobile diesel mechanic for Paso Robles, CA. Specializing in vineyard equipment repair, plus commercial trucks and roadside assistance on Hwy 46 & 101.`;
      break;
    case 'atascadero-ca':
        title = `Mobile Diesel Mechanic Atascadero, CA | Truck Repair Highway 101`;
        description = `Fast mobile diesel mechanic service in Atascadero, CA. 24/7 emergency repairs for heavy-duty trucks on Highway 101, plus fleet and agricultural equipment service.`;
        break;
     case 'lompoc-ca':
        title = `Mobile Diesel Mechanic Lompoc, CA | Heavy Duty & Ag Repair`;
        description = `Reliable mobile diesel mechanic serving Lompoc, CA. We provide 24/7 on-site repair for commercial trucks, agricultural equipment, and fleets near Vandenberg SFB.`;
        break;
  }

  return {
    title,
    description,
    keywords: `mobile diesel mechanic ${cityName}, diesel repair ${cityName}, truck repair ${cityName}, emergency diesel service ${cityName}, roadside assistance ${cityName}, heavy-duty mechanic ${cityName}`,
    alternates: {
      canonical: `/locations/${slug}`,
    },
  };
}


export default function LocationDetailPage({ params }: PageProps) {
  const location = locations.find((l) => l.url === `/${params.slug}`);

  if (!location) {
    notFound();
  }
  
  const cityName = location.name.replace(', CA', '');
  const otherLocations = locations.filter(l => l.url !== `/${params.slug}`).slice(0, 3);

  const pageContent: {[key: string]: JSX.Element} = {
    'san-luis-obispo-ca': (
        <div className='prose max-w-none prose-h2:text-primary prose-h2:font-headline prose-h2:uppercase prose-h3:text-primary prose-h3:font-headline prose-h3:uppercase prose-strong:text-foreground'>
            <h2>On-Site Diesel Mechanic Services in San Luis Obispo</h2>
            <p>From the rolling hills of Edna Valley to the bustling downtown core, {COMPANY_NAME} is San Luis Obispo's trusted source for mobile diesel repair. We bring our fully equipped service trucks to your location, whether you're a commercial fleet manager near the airport, a construction foreman on a new development, or an RV owner enjoying the Central Coast. Our 24/7 mobile truck service ensures you're never stranded.</p>
            <h3>Serving All of San Luis Obispo and Surrounding Areas</h3>
            <ul>
                <li><strong>Highway 101 Corridor:</strong> 24/7 emergency roadside truck service on the Cuesta Grade and throughout SLO for breakdowns, tire changes, and fuel delivery.</li>
                <li><strong>Downtown & Commercial Hubs:</strong> Rapid response for delivery trucks and commercial vehicles in the city center, including Broad Street and Higuera Street.</li>
                <li><strong>South SLO & Airport Area:</strong> Full support for logistics, transport, and industrial businesses around SLO County Regional Airport.</li>
                <li><strong>Edna Valley & Wineries:</strong> Specialized service for agricultural tractors and wine production equipment to prevent downtime during critical seasons.</li>
                <li><strong>Surrounding Communities:</strong> We provide full mobile diesel service to Avila Beach, Los Osos, and Santa Margarita.</li>
            </ul>
            <h2>Why {COMPANY_NAME} is the Go-To Mobile Mechanic in SLO</h2>
            <p>When you need a "mobile diesel mechanic near me" in San Luis Obispo, you need a team with local knowledge. We understand the unique challenges of navigating SLO's roads and the needs of its diverse industries, from tourism to agriculture.</p>
            <ul>
                <li><strong>Local Knowledge:</strong> Our mechanics know the best routes to reach you quickly, avoiding Cal Poly traffic and downtown congestion.</li>
                <li><strong>Fast, Efficient Service:</strong> Our local presence means less downtime. We pride ourselves on our rapid response for all heavy-duty vehicles.</li>
                <li><strong>Comprehensive Diesel Care:</strong> From emergency roadside assistance on the Cuesta Grade to scheduled fleet maintenance, we handle it all.</li>
            </ul>
        </div>
    ),
    'paso-robles-ca': (
        <div className='prose max-w-none prose-h2:text-primary prose-h2:font-headline prose-h2:uppercase prose-h3:text-primary prose-h3:font-headline prose-h3:uppercase prose-strong:text-foreground'>
            <h2>Your Go-To Mobile Mechanic in Paso Robles Wine Country</h2>
            <p>{COMPANY_NAME} delivers expert mobile diesel mechanic services across Paso Robles and North San Luis Obispo County. We specialize in servicing the agricultural and wine industries, providing on-site repairs for tractors, harvesters, and irrigation engines. We also offer complete 24/7 emergency roadside assistance for commercial trucks on Highway 46 and the US-101.</p>
            <h3>Service Area Highlights in and around Paso Robles</h3>
            <ul>
                <li><strong>East & West Side Wineries:</strong> On-site service for all agricultural and vineyard equipment to prevent costly downtime during harvest.</li>
                <li><strong>Highway 46 & US-101 Corridors:</strong> Rapid emergency response for semi-trucks, commercial trucks, and travelers facing breakdowns.</li>
                <li><strong>Downtown Paso Robles:</strong> Maintenance and repair for local delivery fleets and commercial vehicles in the downtown core.</li>
                <li><strong>Surrounding Areas:</strong> Complete mobile mechanic coverage for Templeton, Atascadero, and San Miguel.</li>
            </ul>
            <h2>Specialized Mobile Services for the Paso Robles Area</h2>
            <p>Our heavy-duty mobile mechanics are equipped to handle the specific needs of the Paso Robles economy.</p>
            <ul>
                <li><strong>Agricultural Equipment Repair:</strong> Expert diagnostics and repair for John Deere, Kubota, and other major tractor brands.</li>
                <li><strong>Emergency Roadside Truck Repair:</strong> 24/7 service for breakdowns, tires, and fuel issues on the US-101 and rural county roads.</li>
                <li><strong>Fleet Maintenance:</strong> Preventive maintenance plans to keep your agricultural or commercial fleet running reliably.</li>
            </ul>
        </div>
    ),
    'santa-maria-ca': (
        <div className='prose max-w-none prose-h2:text-primary prose-h2:font-headline prose-h2:uppercase prose-h3:text-primary prose-h3:font-headline prose-h3:uppercase prose-strong:text-foreground'>
            <h2>24/7 Mobile Diesel Service in Santa Maria</h2>
            <p>{COMPANY_NAME} provides professional mobile diesel mechanic services throughout Santa Maria and the greater metropolitan area. As the agricultural heart of the Central Coast, Santa Maria's economy relies on heavy-duty trucks and farm equipment. Our certified technicians bring expert heavy-duty truck repair and maintenance services directly to your location, offering fast response for breakdowns on Highway 101, Betteravia Road, or right on the farm.</p>
            <h3>Key Service Corridors in Santa Maria</h3>
            <ul>
                <li><strong>Highway 101:</strong> Complete roadside assistance for semi-trucks and commercial vehicles traveling through Santa Maria.</li>
                <li><strong>Betteravia Road & Stowell Road:</strong> Rapid response for delivery trucks and commercial fleets in Santa Maria's main business and industrial zones.</li>
                <li><strong>Santa Maria Airport (SMX) area:</strong> Full support for logistics, transport, and industrial businesses.</li>
                <li><strong>Surrounding Agricultural Areas:</strong> We provide full mobile diesel service to the farms and vineyards of Orcutt, Guadalupe, and the Santa Maria Valley.</li>
            </ul>

            <h2>Why Choose Our Santa Maria Mobile Mechanics?</h2>
             <p>When searching for a "mobile diesel mechanic Santa Maria," choose the team with local expertise and a commitment to rapid response.</p>
            <ul>
                <li><strong>Local Agricultural Expertise:</strong> We understand the unique demands of Santa Maria's agricultural sector, servicing tractors, harvesters, and irrigation pumps.</li>
                <li><strong>Fast, Local Response:</strong> Our local presence means less downtime for you. We know Santa Maria's roads for faster, more efficient service.</li>
                <li><strong>Emergency Coverage:</strong> 24/7 emergency roadside assistance for semi-trucks and commercial vehicles throughout the Santa Maria metro area.</li>
            </ul>
        </div>
    ),
  };

  const defaultContent = (
      <div className='prose max-w-none prose-h2:text-primary prose-h2:font-headline prose-h2:uppercase prose-h3:text-primary prose-h3:font-headline prose-h3:uppercase prose-strong:text-foreground'>
        <h2>Your On-Site Heavy-Duty Repair Experts in {cityName}</h2>
        <p>When your heavy-duty truck or equipment breaks down in {cityName}, you need a fast and reliable solution. {COMPANY_NAME} brings the repair shop to you, whether you're on a busy highway like the US-101, at a construction site, or on a farm in the heart of the Central Coast. Our mobile service trucks are fully equipped to handle a wide range of repairs on-site, minimizing your downtime and getting you back to work as quickly as possible.</p>
        <h3>Comprehensive Mobile Services in {cityName}</h3>
        <ul>
            <li><strong>24/7 Emergency Roadside Assistance:</strong> Stranded? We offer around-the-clock service for any heavy-duty truck breakdown in the {cityName} area.</li>
            <li><strong>Advanced Diagnostics:</strong> Our mobile units are equipped with the latest tools to accurately diagnose any issue with your engine, electrical system, or aftertreatment components.</li>
            <li><strong>Full-Service Repairs:</strong> From mobile tire service and brake repairs to complex engine work, our certified technicians handle it all on-site.</li>
            <li><strong>Fleet Maintenance:</strong> We provide scheduled preventive maintenance for commercial fleets in {cityName} to reduce unexpected breakdowns and maximize uptime.</li>
        </ul>
        <h2>Serving the Needs of {cityName} Industries</h2>
        <p>We understand the unique demands of the local economy in {cityName}. {location.description ? `From the ${location.description.toLowerCase()} that rely on heavy machinery to the commercial trucks that are the lifeblood of our local businesses, we have the expertise to service all types of diesel vehicles.` : 'From agriculture to commercial transport, we have the expertise to service all types of diesel vehicles.'} We are committed to providing professional, high-quality mobile repairs that you can depend on.</p>
    </div>
  )

  return (
    <div>
        <section className="relative h-[300px] md:h-[400px] overflow-hidden bg-background flex items-center justify-center text-center text-foreground">
             <div className="absolute inset-0 w-full h-full">
                <Image
                    src={params.slug === 'paso-robles-ca' ? '/images/mobile-diesel-mechanic-paso-robles-ca.jpg' : 'https://placehold.co/2070x1380.png'}
                    alt={`Mobile Diesel Mechanic services in ${cityName}`}
                    className="w-full h-full object-cover"
                    fill
                    priority
                />
                <div className="absolute inset-0 bg-black/60"></div>
             </div>
            <div className="relative z-10 px-4 container mx-auto">
                <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white">
                    {`Mobile Diesel Mechanic in ${cityName}`}
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
                    24/7 On-Site Heavy-Duty Truck & Equipment Repair
                </p>
            </div>
        </section>
        
        <section className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                 <div className="mb-8">
                    <Link href="/locations" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Locations
                    </Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <main className="lg:col-span-2">
                        {pageContent[params.slug] || defaultContent}
                    </main>

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
                        </div>
                    </aside>
                </div>
            </div>
        </section>
        
        {otherLocations.length > 0 && (
             <section className="py-12 md:py-24 bg-secondary">
                <div className="container mx-auto px-4">
                     <h2 className="text-3xl md:text-4xl font-headline text-foreground text-center mb-8">Nearby Service Areas</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {otherLocations.map(loc => (
                             <Link href={`/locations${loc.url}`} key={loc.url} className="block group">
                                <div className="bg-card p-6 rounded-lg border-2 border-transparent group-hover:border-primary group-hover:-translate-y-1 transition-transform h-full shadow-md">
                                    <h4 className="text-xl font-semibold text-foreground">{loc.name}</h4>
                                    <p className="text-sm text-muted-foreground mt-1">{loc.description}</p>
                                    <div className="flex justify-end items-center mt-4 pt-4 border-t border-border/10">
                                        <span className="text-sm font-semibold text-primary">View Details &rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                     </div>
                </div>
            </section>
        )}
    </div>
  );
}
