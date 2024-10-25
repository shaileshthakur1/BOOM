import  StreamVideoProvider  from '@/providers/StreamClientProvider';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'BOOM',
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
};

const RootLayout = ({ children }: Readonly<{children: ReactNode}>) => {
  return (
    <main>
        <StreamVideoProvider>
        {children}
        </StreamVideoProvider>
    </main>
  );
};

export default RootLayout;