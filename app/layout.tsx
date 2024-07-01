"use client";

import React from 'react';
import { Poppins, Dancing_Script } from 'next/font/google';
import './globals.css';

const font = Poppins({
  subsets: ['latin'],
  weight: '400',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <style jsx global>{`
          :root {
            --dancing-script: ${dancingScript.style.fontFamily};
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}
