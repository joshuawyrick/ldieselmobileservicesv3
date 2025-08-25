
import type { LucideIcon } from 'lucide-react';
import { Award, Clock, ShieldCheck, Truck, Users, Wrench } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/locations', label: 'Locations' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const services = [
  {
    title: 'Emergency Roadside Assistance',
    url: '/emergency-roadside-assistance',
    keywords: 'emergency diesel repair, roadside assistance, breakdown service, Highway 101 truck repair',
    description: '24/7 emergency support for unexpected breakdowns. We provide fast, reliable roadside assistance to get you back on the road anytime, anywhere on the Central Coast, from Paso Robles south to Lompoc.',
    imageHint: 'towing truck',
    alt: 'Emergency roadside assistance for a heavy-duty truck',
    imageUrl: '/emergency-roadside-assistance-central-coast.jpg',
    serviceArea: 'San Luis Obispo & Santa Barbara Counties',
    subServices: [
        '24/7 Emergency Dispatch',
        'Roadside Engine Diagnostics',
        'Jump Starts & Battery Issues',
        'Mobile Fuel Delivery',
    ]
  },
  {
    title: 'Mobile Tire Services',
    url: '/mobile-tire-services',
    keywords: 'mobile tire repair, truck tire service, commercial tires, 24 hour mobile tire service',
    description: 'Complete mobile tire services, including repairs, replacements, and installations for commercial trucks and agricultural equipment in the Santa Maria Valley and beyond. We bring the tire shop to you.',
    imageHint: 'truck tire',
    alt: 'Mobile tire service for a commercial semi-truck',
    imageUrl: '/mobile-tire-service-paso-robles-santa-maria.jpg',
    serviceArea: 'Santa Maria Valley & SLO County',
    subServices: [
        'Tire Repair & Patching',
        'New Tire Installation & Mounting',
        'Wheel Balancing',
        'Tire Rotation',
    ]
  },
  {
    title: 'Mobile Brake Repairs',
    url: '/mobile-brake-repairs',
    keywords: 'brake repair, air brake service, DOT brake inspection, mobile truck brake repair',
    description: 'Expert on-site brake repairs and inspections for heavy-duty trucks. We service air brakes and hydraulic systems to ensure your vehicle meets DOT standards and operates safely on highways like the US-101.',
    imageHint: 'truck brakes',
    alt: 'Mobile brake repair for a heavy-duty truck',
    imageUrl: '/mobile-brake-repairs-US-101-santa-maria.jpg',
    serviceArea: 'Central Coast, including US-101 corridor',
    subServices: [
        'Air Brake System Diagnostics',
        'Brake Chamber Replacement',
        'Slack Adjuster & S-Cam Service',
        'DOT Brake Inspections',
    ]
  },
  {
    title: 'Cooling System Repairs',
    url: '/cooling-system-repairs',
    keywords: 'cooling system repair, radiator repair, overheating, truck radiator repair',
    description: 'Comprehensive cooling system diagnostics and repairs to prevent engine overheating, crucial for vehicles operating in the variable climates of the Central Coast. We handle everything from radiator leaks to thermostat replacements.',
    imageHint: 'truck radiator',
    alt: 'Truck cooling system and radiator repair',
    imageUrl: '/diesel-radiator-repair-central-coast.jpg',
    serviceArea: 'San Luis Obispo & Santa Barbara Counties',
    subServices: [
        'Radiator & Hose Repair',
        'Water Pump Replacement',
        'Thermostat Service',
        'Coolant Flush & Refill',
    ]
  },
  {
    title: 'Aftertreatment Services (DPF & DEF)',
    url: '/aftertreatment-services',
    keywords: 'DPF cleaning, DEF system, emissions repair, forced regen service',
    description: 'Specialized diesel particulate filter (DPF) and diesel exhaust fluid (DEF) system services. We help you meet California\'s strict emissions standards and maintain engine performance across SLO and Santa Barbara counties.',
    imageHint: 'exhaust system',
    alt: 'Truck aftertreatment system with DPF and DEF components',
    imageUrl: '/one-box-dpf-repair-SLO-Santa-Barbara-County.jpg',
    serviceArea: 'California Central Coast',
    subServices: [
        'Forced DPF Regeneration',
        'DEF System Diagnostics',
        'Sensor Replacement (NOx, Temp)',
        'Component Cleaning & Repair',
    ]
  },
  {
    title: 'CARB Clean Truck Check Testing',
    url: '/carb-clean-truck-check-testing',
    keywords: 'CARB testing, clean truck check, diesel emissions test, HD I/M testing mobile',
    description: 'We provide official CARB Clean Truck Check testing to ensure your heavy-duty vehicles are compliant with California\'s emissions regulations, helping you avoid penalties and keep your fleet on the road.',
    imageHint: 'emission test',
    alt: 'Mobile CARB Clean Truck Check emissions testing',
    imageUrl: '/clean-truck-check-santa-maria.jpg',
    serviceArea: 'California Central Coast',
    subServices: [
        'Official On-Board Diagnostics (OBD) Data Submission',
        'Periodic Smoke Opacity Testing',
        'Compliance Certificates',
        'Pre-inspection Readiness Checks',
    ]
  },
  {
    title: 'Engine Diagnostics & Repair',
    url: '/engine-diagnostics-repair',
    keywords: 'engine diagnostics, diesel engine repair, check engine light, mobile diesel diagnostics',
    description: 'Advanced mobile engine diagnostics to accurately identify issues. Our mechanics perform expert repairs on all major diesel engine makes and models, serving industries from agriculture in Santa Maria to transport in San Luis Obispo.',
    imageHint: 'diesel engine',
    alt: 'Mobile diesel engine diagnostics and repair',
    imageUrl: 'https://placehold.co/600x400.png',
    serviceArea: 'San Luis Obispo & Santa Maria',
    subServices: [
        'Check Engine Light Diagnostics',
        'Engine Component Repair',
        'Performance Tuning',
        'Complete Engine Overhauls',
    ]
  },
  {
    title: 'Mobile Electrical Repairs',
    url: '/mobile-electrical-repairs',
    keywords: 'electrical repair, alternator, starter, battery, mobile truck electrical repair',
    description: 'On-site diagnosis and repair of complex truck electrical systems. We service batteries, alternators, starters, and wiring to resolve power issues quickly and efficiently, wherever you are located.',
    imageHint: 'truck wiring',
    alt: 'Mobile repair of a truck\'s electrical system',
    imageUrl: 'https://placehold.co/600x400.png',
    serviceArea: 'Central Coast',
    subServices: [
        'Battery Testing & Replacement',
        'Alternator & Starter Repair',
        'Wiring & Harness Diagnostics',
        'Lighting System Repairs',
    ]
  },
  {
    title: 'Fuel System Services',
    url: '/fuel-system-services',
    keywords: 'fuel system repair, fuel injector, fuel pump, diesel fuel system service',
    description: 'Complete fuel system services to ensure optimal engine efficiency and power. We repair and replace fuel pumps, injectors, and filters to resolve performance problems for fleets and independent operators.',
    imageHint: 'fuel tank',
    alt: 'Repair of a diesel fuel system',
    imageUrl: 'https://placehold.co/600x400.png',
    serviceArea: 'Paso Robles to Santa Barbara',
     subServices: [
        'Fuel Filter Replacement',
        'Fuel Injector Service',
        'Fuel Pump Repair',
        'Fuel Tank Cleaning',
    ]
  },
  {
    title: 'Hydraulic & Suspension Repairs',
    url: '/hydraulic-suspension-repairs',
    keywords: 'hydraulic repair, suspension repair, air suspension, truck suspension repair',
    description: 'Expert mobile repairs for hydraulic systems on heavy equipment and vehicle suspensions. We service everything from hydraulic leaks to air suspension components for agricultural machinery and commercial trucks.',
    imageHint: 'truck suspension',
    alt: 'Mobile repair of truck hydraulic and suspension systems',
    imageUrl: 'https://placehold.co/600x400.png',
    serviceArea: 'Santa Maria & San Luis Obispo Agricultural Areas',
     subServices: [
        'Hydraulic Hose Repair',
        'Air Suspension Diagnostics',
        'Leaf Spring Replacement',
        'Shock & Strut Service',
    ]
  },
  {
    title: 'Mobile Fleet Maintenance',
    url: '/mobile-fleet-maintenance',
    keywords: 'fleet maintenance, commercial fleet, preventive maintenance, mobile fleet repair',
    description: 'Customized preventive maintenance programs for commercial fleets in San Luis Obispo and Santa Barbara counties. We help you minimize downtime, reduce costs, and extend the life of your vehicles with on-site service.',
    imageHint: 'fleet trucks',
    alt: 'Mobile maintenance service for a fleet of commercial trucks',
    imageUrl: 'https://placehold.co/600x400.png',
    serviceArea: 'Central Coast Fleets',
     subServices: [
        'Scheduled Oil & Filter Changes',
        'DOT Inspection Readiness',
        'Fluid Analysis',
        'Comprehensive Vehicle Check-ups',
    ]
  },
];

export const locations = [
  { name: 'San Luis Obispo, CA', url: '/san-luis-obispo-ca', description: 'Main city, Cal Poly SLO, downtown area', county: 'San Luis Obispo' },
  { name: 'Paso Robles, CA', url: '/paso-robles-ca', description: 'Wine country, CA-46 corridor', county: 'San Luis Obispo' },
  { name: 'Pismo Beach, CA', url: '/pismo-beach-ca', description: 'Coastal tourism, beach access', county: 'San Luis Obispo' },
  { name: 'Nipomo, CA', url: '/nipomo-ca', description: 'Home base location', county: 'San Luis Obispo' },
  { name: 'Arroyo Grande, CA', url: '/arroyo-grande-ca', county: 'San Luis Obispo' },
  { name: 'Atascadero, CA', url: '/atascadero-ca', county: 'San Luis Obispo' },
  { name: 'Avila Beach, CA', url: '/avila-beach-ca', county: 'San Luis Obispo' },
  { name: 'Cambria, CA', url: '/cambria-ca', county: 'San Luis Obispo' },
  { name: 'Cayucos, CA', url: '/cayucos-ca', county: 'San Luis Obispo' },
  { name: 'Creston, CA', url: '/creston-ca', county: 'San Luis Obispo' },
  { name: 'Grover Beach, CA', url: '/grover-beach-ca', county: 'San Luis Obispo' },
  { name: 'Los Osos, CA', url: '/los-osos-ca', county: 'San Luis Obispo' },
  { name: 'Morro Bay, CA', url: '/morro-bay-ca', county: 'San Luis Obispo' },
  { name: 'Oceano, CA', url: '/oceano-ca', county: 'San Luis Obispo' },
  { name: 'Santa Margarita, CA', url: '/santa-margarita-ca', county: 'San Luis Obispo' },
  { name: 'Shandon, CA', url: '/shandon-ca', county: 'San Luis Obispo' },
  { name: 'Templeton, CA', url: '/templeton-ca', county: 'San Luis Obispo' },
  { name: 'Santa Maria, CA', url: '/santa-maria-ca', description: 'Agriculture center, Vandenberg area', county: 'Santa Barbara' },
  { name: 'Buellton, CA', url: '/buellton-ca', county: 'Santa Barbara' },
  { name: 'Guadalupe, CA', url: '/guadalupe-ca', county: 'Santa Barbara' },
  { name: 'Lompoc, CA', url: '/lompoc-ca', county: 'Santa Barbara' },
  { name: 'Orcutt, CA', url: '/orcutt-ca', county: 'Santa Barbara' },
  { name: 'Santa Ynez, CA', url: '/santa-ynez-ca', county: 'Santa Barbara' },
  { name: 'Solvang, CA', url: '/solvang-ca', county: 'Santa Barbara' },
];

const iconMap = { ShieldCheck, Wrench, Clock, Users, Award, Truck };

type ValueProp = {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}

export const valueProps: ValueProp[] = [
    {
        icon: 'Clock',
        title: '24/7 Emergency Service',
        description: 'We are available around the clock to respond to your emergency needs, minimizing your downtime.'
    },
    {
        icon: 'Truck',
        title: 'Fully Mobile Service',
        description: 'Our mechanics come to you, wherever you are on the Central Coast, with fully equipped service trucks.'
    },
    {
        icon: 'Users',
        title: 'Experienced Technicians',
        description: 'Our certified diesel mechanics have the expertise to handle any repair, big or small.'
    },
    {
        icon: 'Wrench',
        title: 'Comprehensive Repairs',
        description: 'From engines to electronics, we offer a complete range of on-site repair and maintenance services.'
    },
    {
        icon: 'Award',
        title: 'Quality Guaranteed',
        description: 'We stand behind our work with a commitment to quality parts and professional service.'
    },
    {
        icon: 'ShieldCheck',
        title: 'Focus on Safety',
        description: 'We prioritize safety in all our repairs, ensuring your vehicle is roadworthy and reliable.'
    },
]

export const footerLinks = {
  services: {
    title: 'Services',
    links: [
      ...services.map(service => ({
        label: service.title.replace('Mobile', '').replace('Services', '').replace('Repairs', '').replace('Assistance', '').trim(),
        href: `/services${service.url}`
      })),
      { label: 'All Services →', href: '/services' },
    ],
  },
  locations: {
    title: 'Locations',
    links: [
      { label: 'San Luis Obispo', href: '/locations/san-luis-obispo-ca'},
      { label: 'Santa Maria', href: '/locations/santa-maria-ca'},
      { label: 'Paso Robles', href: '/locations/paso-robles-ca'},
      { label: 'Pismo Beach', href: '/locations/pismo-beach-ca'},
      { label: 'More Service Locations →', href: '/locations' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about'},
      { label: 'Contact', href: '/contact'},
      { label: 'Blog', href: '/blog'},
      { label: 'Diesel Mechanic', href: '/diesel-mechanic'},
    ],
  },
};

export const blogPosts = [
  {
    url: '/mobile-carb-compliance',
    title: 'Your Mobile Solution for CARB Clean Truck Check Compliance on the Central Coast',
    excerpt: 'Stay compliant with California\'s Clean Truck Check program. We offer mobile testing and on-site emissions repair in San Luis Obispo & Santa Barbara Counties.',
    date: 'July 26, 2042',
    category: 'Compliance Guide',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'emission test',
    alt: 'Mobile CARB Clean Truck Check testing being performed',
  },
  // Add other blog posts here as needed
];
