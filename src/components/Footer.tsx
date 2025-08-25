
'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { footerLinks } from '@/lib/data';
import { COMPANY_NAME, PHONE_NUMBER, PHONE_NUMBER_RAW, EMAIL_ADDRESS } from '@/lib/constants';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-background/10">
          <div className="lg:col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
               <Image
                src="/logo-white.png"
                alt={`${COMPANY_NAME} logo`}
                width={200}
                height={80}
                className="h-auto"
              />
            </Link>
            <div className="mt-4 space-y-4">
                <div>
                    <p className="text-sm uppercase text-background/80">24/7 Emergency Service</p>
                    <a href={`tel:${PHONE_NUMBER_RAW}`} className="font-headline text-2xl text-accent hover:text-white transition-colors">{PHONE_NUMBER}</a>
                </div>
                 <div>
                    <p className="text-sm uppercase text-background/80">Email Us</p>
                    <a href={`mailto:${EMAIL_ADDRESS}`} className="font-headline text-lg text-accent hover:text-white transition-colors break-all">{EMAIL_ADDRESS}</a>
                </div>
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold font-headline text-accent text-xl uppercase mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-background/90 hover:text-accent hover:translate-x-1 inline-block transition-all">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-background/70 mb-4 md:mb-0">&copy; {currentYear} {COMPANY_NAME}. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="Facebook" className="p-2 bg-background/10 rounded-full hover:bg-accent transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="p-2 bg-background/10 rounded-full hover:bg-accent transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
             <a href="#" aria-label="LinkedIn" className="p-2 bg-background/10 rounded-full hover:bg-accent transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
