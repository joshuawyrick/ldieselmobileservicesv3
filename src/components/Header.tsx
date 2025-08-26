
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { COMPANY_NAME, PHONE_NUMBER } from '@/lib/constants';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-[102px] items-center justify-between">
          <div className="flex flex-1 justify-start">
            <Link href="/" className="flex items-center space-x-2">
                <Image
                src="https://i.imgur.com/pHfPUUt.png"
                alt={`${COMPANY_NAME} logo`}
                width={200}
                height={80}
                className="h-auto"
                priority
                />
            </Link>
          </div>

          <nav className="hidden lg:flex flex-1 items-center justify-center space-x-8">
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

          <div className="flex flex-1 items-center justify-end">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-8 w-8" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className='p-4 text-left'>
                  <SheetTitle>
                     <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2">
                       <Image
                        src="https://i.imgur.com/pHfPUUt.png"
                        alt={`${COMPANY_NAME} logo`}
                        width={180}
                        height={72}
                        className="h-auto"
                      />
                    </Link>
                  </SheetTitle>
                  <SheetDescription>
                    Mobile navigation menu
                  </SheetDescription>
                </SheetHeader>
                <div className="p-4">
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
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
