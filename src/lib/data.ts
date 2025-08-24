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
    keywords: 'emergency diesel repair, roadside assistance, breakdown service',
    description: '24/7 emergency support for unexpected breakdowns. We provide fast, reliable roadside assistance to get you back on the road anytime, anywhere on the Central Coast.',
  },
  {
    title: 'Mobile Tire Services',
    url: '/mobile-tire-services',
    keywords: 'mobile tire repair, truck tire service, commercial tires',
    description: 'Complete mobile tire services, including repairs, replacements, and installations for commercial trucks and trailers. We bring the tire shop to you.',
  },
  {
    title: 'Mobile Brake Repairs',
    url: '/mobile-brake-repairs',
    keywords: 'brake repair, air brake service, DOT brake inspection',
    description: 'Expert on-site brake repairs and inspections. We service air brakes and hydraulic systems to ensure your vehicle meets DOT standards and operates safely.',
  },
  {
    title: 'Cooling System Repairs',
    url: '/cooling-system-repairs',
    keywords: 'cooling system repair, radiator repair, overheating',
    description: 'Comprehensive cooling system diagnostics and repairs. We handle everything from radiator leaks to thermostat replacements to prevent engine overheating.',
  },
  {
    title: 'Aftertreatment Services',
    url: '/aftertreatment-services',
    keywords: 'DPF cleaning, DEF system, emissions repair',
    description: 'Specialized diesel particulate filter (DPF) and diesel exhaust fluid (DEF) system services. We help you meet emissions standards and maintain engine performance.',
  },
  {
    title: 'Engine Diagnostics & Repair',
    url: '/engine-diagnostics-repair',
    keywords: 'engine diagnostics, diesel engine repair, check engine light',
    description: 'Advanced engine diagnostics to accurately identify issues. Our mechanics perform expert repairs on all major diesel engine makes and models.',
  },
  {
    title: 'Mobile Electrical Repairs',
    url: '/mobile-electrical-repairs',
    keywords: 'electrical repair, alternator, starter, battery',
    description: 'On-site diagnosis and repair of complex electrical systems. We service batteries, alternators, starters, and wiring to resolve power issues quickly.',
  },
  {
    title: 'Fuel System Services',
    url: '/fuel-system-services',
    keywords: 'fuel system repair, fuel injector, fuel pump',
    description: 'Complete fuel system services to ensure optimal engine efficiency. We repair and replace fuel pumps, injectors, and filters to resolve performance problems.',
  },
  {
    title: 'Hydraulic & Suspension Repairs',
    url: '/hydraulic-suspension-repairs',
    keywords: 'hydraulic repair, suspension repair, air suspension',
    description: 'Expert mobile repairs for hydraulic systems and vehicle suspensions. We service everything from hydraulic leaks to air suspension components for a smooth ride.',
  },
  {
    title: 'Mobile Fleet Maintenance',
    url: '/mobile-fleet-maintenance',
    keywords: 'fleet maintenance, commercial fleet, preventive maintenance',
    description: 'Customized preventive maintenance programs for commercial fleets. We help you minimize downtime, reduce costs, and extend the life of your vehicles.',
  },
];

export const locations = [
  { name: 'San Luis Obispo, CA', url: '/san-luis-obispo-ca', description: 'Main city, Cal Poly SLO, downtown area' },
  { name: 'Santa Maria, CA', url: '/santa-maria-ca', description: 'Agriculture center, Vandenberg area' },
  { name: 'Paso Robles, CA', url: '/paso-robles-ca', description: 'Wine country, CA-46 corridor' },
  { name: 'Pismo Beach, CA', url: '/pismo-beach-ca', description: 'Coastal tourism, beach access' },
  { name: 'Nipomo, CA', url: '/nipomo-ca', description: 'Home base location' },
  { name: 'Arroyo Grande, CA', url: '/arroyo-grande-ca' },
  { name: 'Atascadero, CA', url: '/atascadero-ca' },
  { name: 'Avila Beach, CA', url: '/avila-beach-ca' },
  { name: 'Buellton, CA', url: '/buellton-ca' },
  { name: 'Cambria, CA', url: '/cambria-ca' },
  { name: 'Cayucos, CA', url: '/cayucos-ca' },
  { name: 'Creston, CA', url: '/creston-ca' },
  { name: 'Grover Beach, CA', url: '/grover-beach-ca' },
  { name: 'Guadalupe, CA', url: '/guadalupe-ca' },
  { name: 'Lompoc, CA', url: '/lompoc-ca' },
  { name: 'Los Osos, CA', url: '/los-osos-ca' },
  { name: 'Morro Bay, CA', url: '/morro-bay-ca' },
  { name: 'Oceano, CA', url: '/oceano-ca' },
  { name: 'Orcutt, CA', url: '/orcutt-ca' },
  { name: 'Santa Margarita, CA', url: '/santa-margarita-ca' },
  { name: 'Santa Ynez, CA', url: '/santa-ynez-ca' },
  { name: 'Shandon, CA', url: '/shandon-ca' },
  { name: 'Solvang, CA', url: '/solvang-ca' },
  { name: 'Templeton, CA', url: '/templeton-ca' },
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
      { label: 'Emergency Roadside', href: '/services/emergency-roadside-assistance'},
      { label: 'Mobile Tire Service', href: '/services/mobile-tire-services'},
      { label: 'Brake Repairs', href: '/services/mobile-brake-repairs'},
      { label: 'Engine Diagnostics', href: '/services/engine-diagnostics-repair'},
    ],
  },
  locations: {
    title: 'Locations',
    links: [
      { label: 'San Luis Obispo', href: '/locations/san-luis-obispo-ca'},
      { label: 'Santa Maria', href: '/locations/santa-maria-ca'},
      { label: 'Paso Robles', href: '/locations/paso-robles-ca'},
      { label: 'Pismo Beach', href: '/locations/pismo-beach-ca'},
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