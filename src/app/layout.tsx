import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'

import './globals.css'
import localFont from 'next/font/local'
import './nav.css'

const myFont = localFont({
  src: '../../public/assets/fonts/FontsFree-Net-gotham-ultra.ttf',
  display: 'swap',
  variable: '--my-font',
})

const inter = Raleway({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--inter',
})

export const metadata: Metadata = {
  title: 'En Palabras - FAQs',
  description:
    'Preguntas frecuentes sobre En Palabras. Contiene información acerca de envíos, retiros, pagos. También información sobre la empresa y sus productos. Conseguí todos nuestros productos en nuestra tienda online.',
  keywords:
    'en palabras, preguntas, frecuentes, envios, retiros, pagos, empresa, productos, tienda, online, desconectados, destapados, descubriendo, juegos en palabras, journal, journal en palabras, envio en palabras, regalo, regalo niño',
  icons: {
    icon: '//acdn.mitiendanube.com/stores/001/705/915/themes/common/logo-1600072508-1621866994-b0fd695ab493ee571f9f076ae0ea024d1621866995.ico?0',
  },
  authors: [{ name: 'En Palabras' }],
  creator: 'En Palabras',
  publisher: 'En Palabras',
  openGraph: {
    title: 'En Palabras - FAQs',

    description:
      'Preguntas frecuentes sobre En Palabras. Contiene información acerca de envíos, retiros, pagos. También información sobre la empresa y sus productos. Conseguí todos nuestros productos en nuestra tienda online.',
    images: [
      {
        url: 'https://enpalabras.com.ar/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'En Palabras - FAQs',
      },
    ],
    siteName: 'En Palabras - FAQs',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${myFont.variable} `}>
      <body className="flex min-h-screen flex-col items-center ">
        {children}
      </body>
      {/* <GoogleAnalytics gaId="G-MKG6D0CXYV" /> */}
      <GoogleTagManager gtmId="GTM-T2GWKRP" />
    </html>
  )
}
