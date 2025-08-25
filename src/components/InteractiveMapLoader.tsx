
'use client';

import dynamic from 'next/dynamic';

const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  loading: () => <div className="h-[500px] w-full rounded-2xl shadow-card border-2 border-foreground bg-secondary animate-pulse"></div>,
  ssr: false,
});

export default function InteractiveMapLoader() {
  return <InteractiveMap />;
}
