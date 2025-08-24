'use server';

/**
 * @fileOverview A blog topic suggestion AI agent.
 *
 * - suggestBlogTopic - A function that suggests blog topics.
 * - BlogTopicSuggestionInput - The input type for the suggestBlogTopic function.
 * - BlogTopicSuggestionOutput - The return type for the suggestBlogTopic function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BlogTopicSuggestionInputSchema = z.object({
  location: z
    .string()
    .describe('The service location for which blog topics should be relevant.'),
  industryFocus: z
    .string()
    .describe(
      'The industry focus to tailor blog topics (e.g., agriculture, tourism).'
    ),
  keywords: z
    .string()
    .describe(
      'Relevant keywords for diesel repair, separated by commas (e.g., diesel repair, maintenance).'
    ),
});
export type BlogTopicSuggestionInput = z.infer<typeof BlogTopicSuggestionInputSchema>;

const BlogTopicSuggestionOutputSchema = z.object({
  topicSuggestions: z
    .array(z.string())
    .describe('An array of suggested blog topics.'),
});
export type BlogTopicSuggestionOutput = z.infer<typeof BlogTopicSuggestionOutputSchema>;

export async function suggestBlogTopic(
  input: BlogTopicSuggestionInput
): Promise<BlogTopicSuggestionOutput> {
  return suggestBlogTopicFlow(input);
}

const prompt = ai.definePrompt({
  name: 'blogTopicSuggestionPrompt',
  input: {schema: BlogTopicSuggestionInputSchema},
  output: {schema: BlogTopicSuggestionOutputSchema},
  prompt: `You are a marketing expert in the diesel repair industry.

  Based on the service location, industry focus, and keywords provided, suggest 3 relevant blog topics that would attract more visitors to the website.

  Service Location: {{{location}}}
  Industry Focus: {{{industryFocus}}}
  Keywords: {{{keywords}}}

  Blog Topics:`,
});

const suggestBlogTopicFlow = ai.defineFlow(
  {
    name: 'suggestBlogTopicFlow',
    inputSchema: BlogTopicSuggestionInputSchema,
    outputSchema: BlogTopicSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
