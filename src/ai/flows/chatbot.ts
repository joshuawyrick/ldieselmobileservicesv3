
'use server';

/**
 * @fileOverview An AI-powered chatbot flow.
 *
 * - chat - A function that takes a user message and conversation history and returns an AI response.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { COMPANY_NAME, PHONE_NUMBER, SERVICE_AREA, services, locations } from '@/lib/constants';

const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

const ChatInputSchema = z.object({
  history: z.array(MessageSchema),
  message: z.string().describe('The latest message from the user.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export type ChatOutput = string;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  const { history, message } = input;

  const serviceList = services.map(s => s.title).join(', ');
  const locationList = locations.map(l => l.name).join(', ');

  const systemPrompt = `You are a friendly and helpful customer service assistant for ${COMPANY_NAME}, a 24/7 mobile diesel mechanic business.

  Your goal is to answer user questions accurately and encourage them to call for service if they have a problem.

  Here is key information about the business:
  - Company Name: ${COMPANY_NAME}
  - Services Offered: We are a full-service mobile diesel repair shop. Our main services include: ${serviceList}.
  - Service Area: We serve the entire ${SERVICE_AREA}, including cities like ${locationList}. We are based in Nipomo, CA.
  - Phone Number: ${PHONE_NUMBER}. This is the best way to get immediate help.
  - Hours of Operation: We are available 24 hours a day, 7 days a week for emergency service.

  Your rules:
  1. Be concise and friendly in your responses.
  2. If a user describes a problem with their truck or asks for help, your primary goal is to encourage them to call ${PHONE_NUMBER} for immediate assistance. Do not attempt to diagnose complex mechanical problems yourself.
  3. Use the information provided above to answer questions about services, service areas, and contact information.
  4. If you don't know the answer to a question, say so and suggest they call for more information.
  5. Do not make up information. Stick to the facts provided.
  `;

  const response = await ai.generate({
    model: 'googleai/gemini-2.0-flash',
    system: systemPrompt,
    history: history.map(msg => ({ role: msg.role, content: [{ text: msg.content }] })),
    prompt: message,
  });

  if (!response.text) {
    return "I'm sorry, I couldn't process that. Please try rephrasing your question or call us for assistance.";
  }
  
  return response.text;
}
