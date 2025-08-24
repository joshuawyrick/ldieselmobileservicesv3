
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA, EMAIL_ADDRESS } from '@/lib/constants';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

// export const metadata: Metadata = {
//   title: 'Contact Us - Mobile Diesel Mechanic Service',
//   description: `Contact ${COMPANY_NAME} for 24/7 mobile diesel repair. Call us, send a message, or find our service area information. We serve ${SERVICE_AREA}.`,
// };

const FormSchema = z.object({
    name: z.string().min(2, 'Name is required.'),
    phone: z.string().min(10, 'A valid phone number is required.'),
    email: z.string().email('A valid email is required.'),
    service: z.string().min(3, 'Service description is required.'),
    message: z.string().min(10, 'Please provide a detailed message.'),
});

type FormValues = z.infer<typeof FormSchema>;


export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
      resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
      const subject = encodeURIComponent(`Contact Form Inquiry from ${data.name} - ${data.service}`);
      const body = encodeURIComponent(
`Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Service Needed: ${data.service}

Message:
${data.message}`
      );
      window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
  };


  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We're available 24/7 for emergency service. For general inquiries or to schedule maintenance, please reach out to us.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center">
                        <Phone className="h-6 w-6 text-primary mr-4"/>
                        <div>
                            <p className="font-semibold">Emergency & General Inquiries</p>
                            <a href={`tel:${PHONE_NUMBER}`} className="text-muted-foreground hover:text-primary">{PHONE_NUMBER}</a>
                        </div>
                    </div>
                     <div className="flex items-center">
                        <Mail className="h-6 w-6 text-primary mr-4"/>
                        <div>
                            <p className="font-semibold">Email</p>
                            <a href={`mailto:${EMAIL_ADDRESS}`} className="text-muted-foreground hover:text-primary">{EMAIL_ADDRESS}</a>
                        </div>
                    </div>
                     <div className="flex items-center">
                        <Clock className="h-6 w-6 text-primary mr-4"/>
                         <div>
                            <p className="font-semibold">Service Hours</p>
                            <p className="text-muted-foreground">24 Hours a Day, 7 Days a Week</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="h-6 w-6 text-primary mr-4"/>
                         <div>
                            <p className="font-semibold">Service Area</p>
                            <p className="text-muted-foreground">{SERVICE_AREA}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

             <Card className="bg-accent text-accent-foreground">
                <CardHeader>
                    <CardTitle>Emergency? Call Us Now!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>For immediate assistance, please call us directly. We offer 24/7 emergency roadside service.</p>
                    <Button asChild size="lg" className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                         <a href={`tel:${PHONE_NUMBER}`}>
                            <Phone className="mr-2 h-5 w-5" /> Click to Call
                        </a>
                    </Button>
                </CardContent>
             </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" {...register('name')} placeholder="John Doe" />
                    {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" {...register('phone')} placeholder="(555) 123-4567" />
                    {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" {...register('email')} placeholder="you@example.com" />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="service">Service Needed</Label>
                   <Input id="service" {...register('service')} placeholder="e.g., Emergency Repair, Tire Service" />
                   {errors.service && <p className="text-sm text-destructive mt-1">{errors.service.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" {...register('message')} placeholder="Please describe your issue and location." />
                  {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                </div>
                <Button type="submit" className="w-full">Submit Request</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
