
'use server';

/**
 * @fileOverview An AI agent for writing blog posts.
 *
 * - writeBlogPost - A function that generates a blog post from a topic.
 * - BlogPostWriterInput - The input type for the writeBlogPost function.
 * - BlogPostWriterOutput - The return type for the writeBlogPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { COMPANY_NAME, SERVICE_AREA } from '@/lib/constants';

const BlogPostWriterInputSchema = z.object({
  topic: z.string().describe('The topic for the blog post.'),
});
export type BlogPostWriterInput = z.infer<typeof BlogPostWriterInputSchema>;

const BlogPostWriterOutputSchema = z.object({
  title: z.string().describe('The generated title for the blog post.'),
  metaDescription: z.string().describe('A short, SEO-friendly meta description for the blog post (max 160 characters).'),
  content: z.string().describe('The full content of the blog post, formatted in Markdown.'),
});
export type BlogPostWriterOutput = z.infer<typeof BlogPostWriterOutputSchema>;

export async function writeBlogPost(
  input: BlogPostWriterInput
): Promise<BlogPostWriterOutput> {
  return writeBlogPostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'blogPostWriterPrompt',
  input: {schema: BlogPostWriterInputSchema},
  output: {schema: BlogPostWriterOutputSchema},
  prompt: `You are an expert content writer and SEO specialist for ${COMPANY_NAME}, a 24/7 mobile diesel mechanic serving ${SERVICE_AREA}.

  Your task is to write a full, SEO-friendly blog post based on the following topic.

  Topic: {{{topic}}}

  Instructions:
  1.  **Title:** Create a compelling, keyword-rich title for the blog post.
  2.  **Meta Description:** Write a concise meta description (under 160 characters) that summarizes the post and encourages clicks from search results.
  3.  **Content:** Write a blog post of at least 400 words.
      - Use Markdown for formatting (e.g., # for H1, ## for H2, ### for H3, - for lists, ** for bold).
      - The tone should be professional, helpful, and authoritative.
      - The content should be practical and valuable for truck drivers, fleet managers, and equipment operators in the Central Coast.
      - Naturally incorporate relevant keywords.
      - End with a clear call-to-action, encouraging readers to contact ${COMPANY_NAME} for service.
      - Ensure the entire output is a single JSON object matching the output schema.`,
});

const writeBlogPostFlow = ai.defineFlow(
  {
    name: 'writeBlogPostFlow',
    inputSchema: BlogPostWriterInputSchema,
    outputSchema: BlogPostWriterOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
