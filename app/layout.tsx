"use client";

import React from 'react';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});

// const dancingScript = Dancing_Script({
//   subsets: ['latin'],
//   weight: ['400', '700'],
// });

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
