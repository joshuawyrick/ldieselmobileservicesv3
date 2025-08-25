
'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full rounded-2xl shadow-card border-2 border-foreground bg-secondary animate-pulse"></div>
});

export default function InteractiveMapLoader() {
  return <InteractiveMap />;
}
