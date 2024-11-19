import type { Metadata } from 'next';
import Footer from '@/components/footer';
import localFont from 'next/font/local';
import './globals.css';
import { accordionData } from '@/faq/faqs';
import { contacts } from '@/contacts/contacts';
import Nav from '@/components/nav';
import { Routes } from '@/navigation/navigation';
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A portfolio template',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="p-4 mx-auto max-w-7xl">
          <Nav logoPath="/logo.png" navElems={Routes} />
        </div>
        {children}
        <Footer
          accordItems={accordionData}
          icons={contacts}
          copyright=" 2024. All rights reserved."
        />
      </body>
    </html>
  );
}
