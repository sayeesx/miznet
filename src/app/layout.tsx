
import './globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Miznet',
  description: 'AI-Powered Web3 Project Showcase',
}

import React, { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
