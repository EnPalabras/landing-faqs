import Hero from './components/Hero/Hero'
import FirstSections from './components/Sections/FirstSections'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Hero />
      <FirstSections />
    </main>
  )
}
