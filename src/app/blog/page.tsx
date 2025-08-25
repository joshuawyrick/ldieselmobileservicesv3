
import type { Metadata } from 'next';
import BlogTopicGenerator from '@/components/BlogTopicGenerator';
import { BrainCircuit, Newspaper } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export const metadata: Metadata = {
  title: 'Diesel Repair Blog & Resources | Expert Tips & Guides',
  description: 'Educational content, maintenance tips, troubleshooting guides, and an AI-powered tool to suggest relevant blog topics for the diesel repair industry.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
         <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
            <Newspaper className="h-8 w-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Blog & Resources
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore maintenance tips, troubleshooting guides, and generate content ideas with our AI-powered topic suggestion tool.
        </p>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24">
        {blogPosts.map((post) => (
           <Link href={`/blog${post.url}`} key={post.url} className="group block">
            <div className="bg-card rounded-2xl border-2 border-foreground shadow-card group-hover:shadow-[15px_15px_0px_hsl(var(--primary))] transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 sm:p-8 flex-grow flex flex-col">
                 <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                   <span className="font-semibold bg-primary/10 text-primary py-1 px-3 rounded-full text-xs uppercase">{post.category}</span>
                   <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold font-headline text-primary group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-muted-foreground flex-grow">{post.excerpt}</p>
                 <div className="mt-6 pt-4 border-t border-border/10">
                   <span className="font-headline text-accent uppercase text-lg group-hover:underline">Read More &rarr;</span>
                </div>
              </div>
            </div>
           </Link>
        ))}
      </div>


      <div className="max-w-3xl mx-auto bg-card p-6 sm:p-8 rounded-xl shadow-lg border mt-16">
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                                <BrainCircuit className="h-6 w-6" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold font-headline text-primary text-left">AI Blog Topic Suggester</h2>
                             <p className="text-muted-foreground text-left">
                                Click to expand and generate content ideas.
                            </p>
                        </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6">
                    <p className="text-muted-foreground mb-4">
                        Stuck on content ideas? Enter some details to get relevant blog topic suggestions.
                    </p>
                    <BlogTopicGenerator />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </div>

    </div>
  );
}
