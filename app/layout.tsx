import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StitchesRegistry from './StitchesRegistry';
// Note: globals.css is removed because we're using Stitches global styles

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Atelier | Premium Footwear',
  description: 'Highly aesthetic and premium footwear.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
        <StitchesRegistry>
          {children}
        </StitchesRegistry>
      </body>
    </html>
  );
}
