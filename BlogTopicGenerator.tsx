
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Lightbulb } from 'lucide-react';
import { suggestBlogTopic, type BlogTopicSuggestionOutput } from '@/ai/flows/blog-topic-suggestion';

const FormSchema = z.object({
  location: z.string().min(2, 'Location is required.'),
  industryFocus: z.string().min(2, 'Industry focus is required.'),
  keywords: z.string().min(2, 'Keywords are required.'),
});

type FormValues = z.infer<typeof FormSchema>;

export default function BlogTopicGenerator() {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<BlogTopicSuggestionOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      location: 'San Luis Obispo, CA',
      industryFocus: 'Agriculture & Farming',
      keywords: 'diesel repair, maintenance, DPF',
    }
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    setSuggestions(null);
    setError(null);
    try {
      const result = await suggestBlogTopic(data);
      setSuggestions(result);
    } catch (e) {
      setError('Failed to generate suggestions. Please try again.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="location">Service Location</Label>
          <Input id="location" {...register('location')} placeholder="e.g., San Luis Obispo, CA" />
          {errors.location && <p className="text-sm text-destructive mt-1">{errors.location.message}</p>}
        </div>
        <div>
          <Label htmlFor="industryFocus">Industry Focus</Label>
          <Input id="industryFocus" {...register('industryFocus')} placeholder="e.g., Agriculture, Tourism" />
          {errors.industryFocus && <p className="text-sm text-destructive mt-1">{errors.industryFocus.message}</p>}
        </div>
        <div>
          <Label htmlFor="keywords">Keywords</Label>
          <Input id="keywords" {...register('keywords')} placeholder="e.g., diesel repair, maintenance" />
          {errors.keywords && <p className="text-sm text-destructive mt-1">{errors.keywords.message}</p>}
        </div>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Suggest Topics'
          )}
        </Button>
      </form>

      {error && <p className="mt-4 text-center text-destructive">{error}</p>}

      {suggestions && suggestions.topicSuggestions.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-center mb-4">Here are some ideas:</h3>
          <div className="space-y-4">
            {suggestions.topicSuggestions.map((topic, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-start space-x-4">
                  <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-foreground">{topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
