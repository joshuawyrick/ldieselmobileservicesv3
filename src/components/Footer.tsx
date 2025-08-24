import Link from 'next/link';
import { Truck } from 'lucide-react';
import { footerLinks } from '@/lib/data';
import { COMPANY_NAME, ADDRESS, PHONE_NUMBER, SERVICE_AREA } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/10 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Truck className="h-8 w-8 text-primary" />
              <span className="font-bold text-lg font-headline">{COMPANY_NAME}</span>
            </Link>
            <p className="text-sm text-muted-foreground">{ADDRESS}</p>
            <p className="text-sm text-muted-foreground mt-2">
              <a href={`tel:${PHONE_NUMBER}`} className="hover:text-primary">{PHONE_NUMBER}</a>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Service Area:</strong> {SERVICE_AREA}
            </p>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {COMPANY_NAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
