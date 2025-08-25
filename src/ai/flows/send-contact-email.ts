
'use server';

/**
 * @fileOverview A flow for sending a contact form email.
 *
 * - sendContactEmail - A function that handles formatting and sending a contact email.
 * - ContactFormInput - The input type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { EMAIL_ADDRESS } from '@/lib/constants';

export const ContactFormInputSchema = z.object({
  name: z.string().describe('The full name of the person submitting the form.'),
  phone: z.string().describe('The phone number of the person.'),
  email: z.string().describe('The email address of the person.'),
  service: z.string().describe('The service the person is inquiring about.'),
  message: z.string().describe('The message content from the person.'),
});

export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

export async function sendContactEmail(input: ContactFormInput): Promise<{ success: boolean; message: string }> {
  try {
    // In a real application, you would integrate an email sending service here (e.g., Nodemailer, SendGrid, Resend).
    // For this prototype, we will simulate the email sending process and log the content.
    const emailContent = await sendContactEmailFlow(input);
    
    console.log('Email sending simulated.');
    console.log('Recipient:', EMAIL_ADDRESS);
    console.log('Subject:', emailContent.subject);
    console.log('Body:', emailContent.body);

    // Simulate a successful email send
    return { success: true, message: "Your message has been sent successfully!" };

  } catch (error) {
    console.error('Failed to send contact email:', error);
    return { success: false, message: 'There was an error sending your message. Please try again.' };
  }
}

const emailPrompt = ai.definePrompt({
  name: 'contactEmailPrompt',
  input: { schema: ContactFormInputSchema },
  output: { schema: z.object({ subject: z.string(), body: z.string() }) },
  prompt: `
    You are an assistant for a mobile diesel mechanic business. Your task is to format a contact form submission into a professional email.

    The email should be sent to the business owner. Use the following information from the form submission:

    - Name: {{{name}}}
    - Phone: {{{phone}}}
    - Email: {{{email}}}
    - Service Needed: {{{service}}}
    - Message: {{{message}}}

    Generate a subject line that is clear and concise, like "New Contact Form Inquiry from [Name] - [Service Needed]".

    Generate a body for the email that is well-formatted and easy to read. Present all the information from the user clearly.
  `,
});


const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: z.object({ subject: z.string(), body: z.string() }),
  },
  async (input) => {
    const { output } = await emailPrompt(input);
    return output!;
  }
);
