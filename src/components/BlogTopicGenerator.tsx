
'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Lightbulb, PenSquare, Copy } from 'lucide-react';
import { suggestBlogTopic, type BlogTopicSuggestionOutput } from '@/ai/flows/blog-topic-suggestion';
import { writeBlogPost, type BlogPostWriterOutput } from '@/ai/flows/blog-post-writer';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  location: z.string().min(2, 'Location is required.'),
  industryFocus: z.string().min(2, 'Industry focus is required.'),
  keywords: z.string().min(2, 'Keywords are required.'),
});

type FormValues = z.infer<typeof FormSchema>;

export default function BlogTopicGenerator() {
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);
  const [suggestions, setSuggestions] = useState<BlogTopicSuggestionOutput | null>(null);
  const [generatedPost, setGeneratedPost] = useState<BlogPostWriterOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

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
    setLoadingSuggestions(true);
    setSuggestions(null);
    setGeneratedPost(null);
    setError(null);
    try {
      const result = await suggestBlogTopic(data);
      setSuggestions(result);
    } catch (e) {
      setError('Failed to generate suggestions. Please try again.');
      console.error(e);
    } finally {
      setLoadingSuggestions(false);
    }
  };

  const handleWritePost = async (topic: string) => {
    setLoadingPost(true);
    setGeneratedPost(null);
    setError(null);
    try {
      const result = await writeBlogPost({ topic });
      setGeneratedPost(result);
    } catch (e) {
      setError('Failed to generate the blog post. Please try again.');
      console.error(e);
    } finally {
      setLoadingPost(false);
    }
  };
  
  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${field} Copied!`,
      description: "The text has been copied to your clipboard.",
    });
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
        <Button type="submit" disabled={loadingSuggestions || loadingPost} className="w-full">
          {loadingSuggestions ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating Topics...
            </>
          ) : (
            'Suggest Topics'
          )}
        </Button>
      </form>

      {error && <p className="mt-4 text-center text-destructive">{error}</p>}

      {suggestions && !generatedPost && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-center mb-4">Here are some ideas:</h3>
          <div className="space-y-4">
            {suggestions.topicSuggestions.map((topic, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-center justify-between space-x-4">
                  <div className='flex items-start space-x-4'>
                    <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground">{topic}</p>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => handleWritePost(topic)} 
                    disabled={loadingPost || loadingSuggestions}
                  >
                    {loadingPost ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <PenSquare className="mr-2 h-4 w-4" />
                    )}
                    Write Post
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
      
      {loadingPost && (
        <div className="mt-8 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-muted-foreground">Writing your blog post...</p>
        </div>
      )}

      {generatedPost && (
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-bold font-headline text-primary text-center">Generated Blog Post</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
                <Label htmlFor="postTitle">Title</Label>
                 <Button variant="ghost" size="sm" onClick={() => handleCopy(generatedPost.title, 'Title')}>
                    <Copy className="mr-2 h-4 w-4" /> Copy
                </Button>
            </div>
            <Input id="postTitle" readOnly value={generatedPost.title} />
          </div>
           <div className="space-y-2">
            <div className="flex justify-between items-center">
                <Label htmlFor="metaDescription">Meta Description</Label>
                 <Button variant="ghost" size="sm" onClick={() => handleCopy(generatedPost.metaDescription, 'Description')}>
                    <Copy className="mr-2 h-4 w-4" /> Copy
                </Button>
            </div>
            <Textarea id="metaDescription" readOnly value={generatedPost.metaDescription} rows={3} />
          </div>
           <div className="space-y-2">
            <div className="flex justify-between items-center">
                <Label htmlFor="postContent">Content (Markdown)</Label>
                 <Button variant="ghost" size="sm" onClick={() => handleCopy(generatedPost.content, 'Content')}>
                    <Copy className="mr-2 h-4 w-4" /> Copy
                </Button>
            </div>
            <Textarea id="postContent" readOnly value={generatedPost.content} rows={15} />
          </div>

           <Button onClick={() => setGeneratedPost(null)} className="w-full">
            Generate Another
          </Button>
        </div>
      )}
    </div>
  );
}
