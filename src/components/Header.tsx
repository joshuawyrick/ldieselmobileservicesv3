'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { COMPANY_NAME, PHONE_NUMBER } from '@/lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[102px]">
          <Link href="/" className="flex items-center space-x-2">
            <Truck className="h-10 w-10 text-primary" />
            <span className="font-bold text-2xl font-headline hidden sm:inline-block">{COMPANY_NAME}</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-headline text-xl text-foreground hover:text-accent transition-colors uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
             <a href={`tel:${PHONE_NUMBER}`} className="hidden md:inline-flex btn btn-primary">
                Call Now
             </a>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-8 w-8" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2">
                      <Truck className="h-8 w-8 text-primary" />
                      <span className="font-bold text-lg font-headline">{COMPANY_NAME}</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-headline text-foreground hover:text-accent transition-colors uppercase"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                   <div className="mt-8 pt-8 border-t">
                    <a href={`tel:${PHONE_NUMBER}`} className="w-full btn btn-primary">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Now
                    </a>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
