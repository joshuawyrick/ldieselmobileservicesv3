import type { Metadata } from 'next';
import BlogTopicGenerator from '@/components/BlogTopicGenerator';
import { BrainCircuit } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diesel Repair Blog & Resources | Expert Tips & Guides',
  description: 'Educational content, maintenance tips, troubleshooting guides, and an AI-powered tool to suggest relevant blog topics for the diesel repair industry.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Blog & Resources
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore maintenance tips, troubleshooting guides, and generate content ideas with our AI-powered topic suggestion tool.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-card p-6 sm:p-8 rounded-xl shadow-lg border">
         <div className="flex items-center space-x-4 mb-6">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                    <BrainCircuit className="h-6 w-6" />
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold font-headline text-primary">AI Blog Topic Suggester</h2>
                <p className="text-muted-foreground">
                  Stuck on content ideas? Enter some details to get relevant blog topic suggestions.
                </p>
            </div>
        </div>
        <BlogTopicGenerator />
      </div>

    </div>
  );
}
