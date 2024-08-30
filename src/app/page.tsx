import Hero from './components/Hero/Hero'
import FirstSections from './components/Sections/FirstSections'
import Navbar from './components/Nav/Nav'
import Image from 'next/image'
import logo from '../../public/assets/logo.webp'

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <header>
        {' '}
        <Image src={logo.src} alt="En Palabras" width={225} height={68} />
      </header>

      <Hero />
      <main className="container px-4">
        <FirstSections />
      </main>
    </>
  )
}
