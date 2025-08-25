
'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export default function InteractiveMapLoader() {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/InteractiveMap'), {
        loading: () => <div className="h-[500px] w-full rounded-2xl shadow-card border-2 border-foreground bg-secondary animate-pulse"></div>,
        ssr: false,
      }),
    []
  );
  return <Map />;
}
