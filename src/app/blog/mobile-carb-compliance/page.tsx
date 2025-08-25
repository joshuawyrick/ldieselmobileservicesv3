
import { Button } from '@/components/ui/button';
import { COMPANY_NAME, PHONE_NUMBER } from '@/lib/constants';
import { ArrowLeft, Check, Phone, ShieldCheck, Truck, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const metadata: Metadata = {
    title: `Mobile CARB Clean Truck Check Compliance | ${COMPANY_NAME}`,
    description: `Stay compliant with California's Clean Truck Check program. ${COMPANY_NAME} offers mobile testing and on-site emissions repair in San Luis Obispo & Santa Barbara Counties.`,
    alternates: {
        canonical: '/blog/mobile-carb-compliance',
    },
};

export default function BlogPostPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                <Link href="/blog" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Link>
                
                <article>
                    <header className="mb-8">
                         <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                           <span className="font-semibold bg-primary/10 text-primary py-1 px-3 rounded-full text-xs uppercase">Compliance Guide</span>
                           <span>July 26, 2024</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                           Your Mobile Solution for CARB Clean Truck Check Compliance on the Central Coast
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            {COMPANY_NAME} delivers streamlined on-site testing and expert emissions repairs across San Luis Obispo and Santa Barbara Counties to keep your fleet moving.
                        </p>
                    </header>
                    
                    <div className="my-8">
                        <Image
                            src="https://placehold.co/800x400.png"
                            alt="CARB Clean Truck Check testing being performed on a heavy-duty truck"
                            width={800}
                            height={400}
                            className="rounded-lg shadow-card border-2 border-foreground w-full"
                        />
                    </div>

                    <div className="prose max-w-none prose-h2:text-primary prose-h2:uppercase prose-h2:font-headline prose-h3:text-primary prose-h3:uppercase prose-h3:font-headline prose-a:text-accent hover:prose-a:text-primary prose-strong:text-foreground">
                        <p className="text-xl">
                            When your heavy-duty trucks operate throughout San Luis Obispo and Santa Barbara Counties—from the vineyards of <Link href="/locations/paso-robles-ca">Paso Robles</Link> to the coastal routes in <Link href="/locations/santa-maria-ca">Santa Maria</Link> and <Link href="/locations/lompoc-ca">Lompoc</Link>—maintaining CARB Clean Truck Check compliance can be a challenge. {COMPANY_NAME} delivers a streamlined solution: mobile compliance testing and expert emissions repairs, right where you're parked.
                        </p>
                        
                        <h2>What We Offer</h2>
                        <h3>On-Site CARB Clean Truck Check Testing</h3>
                        <p>
                            Our CARB-credentialed technicians bring OBD and smoke testing tools directly to your location, whether you're in <Link href="/locations/atascadero-ca">Atascadero</Link> or Santa Barbara. We handle your <Link href="/services/carb-clean-truck-check-testing">CARB compliance testing</Link> efficiently, ensuring you avoid interrupting your route. We submit results immediately via CTC-VIS, minimizing the risk of costly DMV registration holds.
                        </p>

                        <h3>Mobile Emissions System Repairs & Diagnostics</h3>
                        <p>
                           Failed a test? Our team performs expert <Link href="/services/engine-diagnostics-repair">mobile diagnostics and repairs</Link> on-site. From forced DPF regeneration and sensor replacements to comprehensive <Link href="/services/aftertreatment-services">aftertreatment services</Link>, we get you compliant and back on the road without the delay of a trip to the shop.
                        </p>

                         <div className="my-10 p-6 bg-primary/10 rounded-lg text-center">
                            <h2 className="text-2xl font-bold text-primary">Serving Your Key Central Coast Cities</h2>
                            <p className="mt-2 text-muted-foreground">We provide tailored compliance solutions across the region.</p>
                            <div className="mt-4 overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                        <TableHead className="font-semibold">City / Area</TableHead>
                                        <TableHead className="font-semibold">Benefit with {COMPANY_NAME}</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>San Luis Obispo city</TableCell>
                                            <TableCell>On-site testing and quick compliance for local fleets.</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Paso Robles / Atascadero</TableCell>
                                            <TableCell>Efficient work with minimal asset downtime for agricultural and transport trucks.</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Santa Maria / Orcutt</TableCell>
                                            <TableCell>Skilled testing and emission repairs near major production centers.</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Lompoc / Goleta / Carpinteria</TableCell>
                                            <TableCell>Fast service for regional transport and commercial routes along the 101.</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>

                        <h2>How It Works: A Simple 4-Step Process</h2>
                        <ol className="list-decimal pl-5 space-y-4">
                            <li>
                                <strong>Book Your Service:</strong> Give us your location (warehouse, job site, yard), vehicle details, and target date.
                            </li>
                            <li>
                                <strong>We Arrive Prepared:</strong> Equipped and credentialed, we manage all testing and, if needed, can perform on-the-spot emissions repairs.
                            </li>
                            <li>
                                <strong>Swift CARB Submission:</strong> Test results are automatically uploaded to the CARB CTC-VIS database, ensuring your compliance is officially recorded.
                            </li>
                             <li>
                                <strong>Confirm Compliance:</strong> We help you confirm your DMV status to avoid registration holds and fines, keeping your <Link href="/services/mobile-fleet-maintenance">fleet</Link> fully operational.
                            </li>
                        </ol>
                        
                        <h2>The Final Word on Central Coast Compliance</h2>
                        <p>
                            For fleet operators in San Luis Obispo and Santa Barbara counties, {COMPANY_NAME} offers local convenience with regulatory confidence. Enjoy hassle-free testing, on-site repairs, and compliance solutions tailored to your city.
                        </p>
                         <p>
                           Ready to protect your operations from fines or downtime? Contact us to schedule your Clean Truck Check or emissions repair today.
                        </p>

                    </div>
                </article>

                <div className="mt-12 p-6 btn-primary no-hover text-accent-foreground rounded-lg text-center">
                    <h2 className="text-3xl font-bold font-headline">Need Mobile Compliance Help Now?</h2>
                    <p className="mt-2 max-w-xl mx-auto">
                        Call us for immediate on-site CARB testing and emissions repair across the Central Coast.
                    </p>
                    <Button asChild size="lg" className="mt-6 bg-white text-black hover:bg-white/90">
                        <a href={`tel:${PHONE_NUMBER}`}>
                            <Phone className="mr-2 h-5 w-5" /> Schedule Your Service
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
