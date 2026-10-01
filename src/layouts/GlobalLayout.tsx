import type { ReactNode } from 'react';
import { Footer } from '@/components/navigation/Footer';
import { TopNav } from '@/components/navigation/TopNav';

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TopNav />
      <div className="min-h-[100dvh] bg-background text-foreground pb-[env(safe-area-inset-bottom)] pt-[80px] relative">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default GlobalLayout;
