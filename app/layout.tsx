import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/ThemeContext';
import { personalInfo } from '@/data/portfolio';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: personalInfo.tagline,
  keywords: [
    'Data Engineer',
    'Azure Data Engineer',
    'Power Apps Developer',
    'Microsoft Fabric',
    'ETL',
    'Data Pipelines',
    'Azure Data Factory',
    'Synapse Analytics',
    'Power Platform',
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://niharika-pendem.dev',
    siteName: `${personalInfo.name} Portfolio`,
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.tagline,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - Data Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.tagline,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
