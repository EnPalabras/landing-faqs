import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

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
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${myFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}
