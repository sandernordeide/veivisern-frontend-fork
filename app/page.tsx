'use client';

import Title from '@/components/layout/Title';
import Search from '@/components/search/Search';
import Header from '@/components/layout/Header';
import { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense>
      <Header showLogo={false} />
      <main>
        <Title style="mt-6 sm:mt-0" />
        <Search />
      </main>
    </Suspense>
  );
}
