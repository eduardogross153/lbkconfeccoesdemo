import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://lbkconfeccoes.vercel.app'),
  title: 'LBK Confecções',
  description: 'LBK Confecções: confecções infantis, coleções e qualidade em cada detalhe.',
  generator: 'v0.app',
  openGraph: {
    title: 'LBK Confecções',
    description: 'Confecções infantis, coleções e qualidade em cada detalhe.',
    type: 'website',
    url: 'https://lbkconfeccoes.vercel.app',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20lbkconfeccoes-btNxhxn1ChKP6YdM8Mmldzhq8mQ5Wf.jpg',
        alt: 'Logotipo oficial LBK Confecções',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LBK Confecções',
    description: 'Confecções infantis, coleções e qualidade em cada detalhe.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20lbkconfeccoes-btNxhxn1ChKP6YdM8Mmldzhq8mQ5Wf.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
