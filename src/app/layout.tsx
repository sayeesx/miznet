import './globals.css'
import { Manrope } from 'next/font/google'
import React, { ReactNode } from 'react'
import { NavbarDemo } from '../components/ui/resizable-navbar'

const manrope = Manrope({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Miznet',
  description: 'AI-Powered Web3 Project Showcase',
  manifest: '/site.webmanifest',
  icons: [
    { rel: 'icon', url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
    { rel: 'icon', url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    { rel: 'icon', url: '/web-app-manifest-192x192.png', type: 'image/png', sizes: '192x192' },
    { rel: 'icon', url: '/web-app-manifest-512x512.png', type: 'image/png', sizes: '512x512' },
  ],
}

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <NavbarDemo />
        {children}
      </body>
    </html>
  );
}
