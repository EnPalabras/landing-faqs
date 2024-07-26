import Hero from './components/Hero/Hero'
import FirstSections from './components/Sections/FirstSections'
import Navbar from './components/Nav/Nav'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container px-4">
        <FirstSections />
      </main>
    </>
  )
}
